import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function setUpDatabase(db) {
  db.collections("hotels").createIndex({ createdAt: -1 });
  //db.collection('ht-users').createIndex({ email: 1 }, {unique: true});
}

export default async function database(req, res, next) {
    console.log("mongo url", process.env.MONGODB_URI)
  if (!client.isConnected()) {  
    const msg = await client.connect();
    console.log("msg: ", msg);
  }
  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  await setUpDatabase(req.db);
  return next();
}
