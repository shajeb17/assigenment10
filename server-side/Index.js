const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
const uri =
  "mongodb+srv://assigenment10:ZEjgwGkCCWIkZnxm@cluster0.wqmawes.mongodb.net/?appName=Cluster0";

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
    
    app.get("/alluser", async(req,res)=>{
        let cursor=await alluser.find().toArray()
        res.send(cursor)
    })
   

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
