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

    app.get("/alluser", async (req, res) => {
      let cursor = alluser.find().sort({ reminderTime: -1 }).limit(6);
      let result = await cursor.toArray();
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
