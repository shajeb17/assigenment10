const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
var jwt = require('jsonwebtoken');
const app = express();
const port =process.env.PORT|| 3000
app.use(cors());
app.use(express.json());


var admin = require("firebase-admin");
const decoded = Buffer.from(process.env.FIREBASE_SERVES_KEY, "base64").toString("utf8");
const serviceAccount = JSON.parse(decoded);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const verifyFirebaseToken = async (req, res, next) => {
  let authentic = req.headers.authorization;
  
  if (!authentic) {
    return res.status(401).send({message:"unauthorization access token"})
  }
  let token = req.headers.authorization.split(" ")[1];
  if(!token){
    return res.status(401).send({message:"access token not found"})
  }
  try {
  let userInfo=await admin.auth().verifyIdToken(token)
  req.token_email=userInfo.email
  
    next();
  } catch (error) {
    return res.status(401).send({message:'unauthorize access'})
  }

};



const verifyToken = (req, res, next) => {
 
  let authentic = req.headers.authorization;
  if (!authentic) {
    return res.status(401).send({ message: "No token" });
  }


   let token = req.headers.authorization.split(" ")[1];
  if(!token){
    return res.status(401).send({message:"access token not found"})
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Invalid token" });
    }
    req.token_email=decoded.email
    next();
  });
};




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.USER_PASSWORD}@cluster0.wqmawes.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const database = client.db("assigenment10");
    const alluser = database.collection("alluser");

    app.get("/alluser", async (req, res) => {
      let cursor = alluser.find().sort({ reminderTime: -1 }).limit(6);
      let result = await cursor.toArray();
      res.send(result);
    });

    app.get("/mydata",verifyToken,async (req, res) => {
      
      let email = req.query.email;
      
      // if(email!==req.token_email){
      //   return res.status(403).send({message:"forbidden access"})
      // }


      if(email!==req.token_email){
        return res.status(403).send({message:"forbidden access"})
      }

      let cursor = alluser.find({ userEmail: email });
      let result = await cursor.toArray();
      res.send(result);
    });
    app.get("/search", async (req, res) => {
      let search = req.query.search;
      let cursor = alluser.find({
        habitTitle: { $regex: search, $options: "i" },
      });
      let result = await cursor.toArray();
      res.send(result);
    });

    app.get("/alldata", verifyToken, async (req, res) => {
      let cursor = alluser.find();
      let result = await cursor.toArray();
      res.send(result);
    });

    app.patch("/mydata/:id", async (req, res) => {
      let value = req.params.id;
      let update = req.body;
      let query = { _id: new ObjectId(value) };

      let userupdate = {
        $set: {
          habitTitle: update.habitTitle,
          description: update.description,
          category: update.category,
          reminderTime: update.reminderTime,
          userEmail: update.userEmail,
          userName: update.userName,
        },
      };
      const setdata = await alluser.updateOne(query, userupdate);
      res.send(setdata);
    });
    app.patch("/habitcomplete/:id", async (req, res) => {
      let id = req.params.id;
      let today = new Date().toISOString().split("T")[0];
      let query = { _id: new ObjectId(id) };
      let habit = await alluser.findOne(query);

      if (!habit) {
        return res.send({ success: false, message: "Habit not found" });
      }
      if (habit.completionHistory?.includes(today)) {
        return res.send({
          success: false,
          message: "Already completed today task",
        });
      }
      let update = {
        $push: { completionHistory: today },
      };
      let result = await alluser.updateOne(query, update);
      res.send({
        success: true,
        message: "complete my task today",
        result,
      });
    });

    app.delete("/mydata/:id", async (req, res) => {
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let result = await alluser.deleteOne(query);
      res.send(result);
    });
    app.post("/alluser", async (req, res) => {
      let mainval = await alluser.insertOne(req.body);
      res.send(mainval);
    });

    app.post("/getToken", (req,res)=>{
      let loginUser=req.body; 
      const token=jwt.sign(
        loginUser,
         process.env.JWT_SECRET,
        {expiresIn:"1h"}
      )
      res.send({token:token})
    })

  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
