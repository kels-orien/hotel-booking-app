import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
import session from './session';
import database from "./database";

const middleware = nextConnect();


middleware.use(database).use(session)

export default middleware;
