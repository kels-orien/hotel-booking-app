import { MongoClient } from "mongodb";
import nc from "next-connect";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {

  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  console.log("database working");
  return next();
}

const middleware = nc();

middleware.use(database);

export default middleware;
