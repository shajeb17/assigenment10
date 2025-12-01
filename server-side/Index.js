const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config()
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.USER_PASSWORD}@cluster0.wqmawes.mongodb.net/?appName=Cluster0`;

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

    app.get("/mydata", async (req, res) => {
      let email = req.query.email;
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

    app.get("/alldata", async (req, res) => {
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

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged successfully");
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
