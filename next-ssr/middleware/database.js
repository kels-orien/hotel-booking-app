import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

export async function setUpDatabase(db) {

    db.collections('hotels').createIndex({ createdAt: -1});
    db.collection('ht-users').createIndex({ email: 1 }, {unique: true});
}



export default async function database (req, res, next) {

    if (!client.isConnected()) await client.connect();
    req.dbClient =  client;
    req.db =  client.db(process.env.DB_NAME);
    await setUpDatabase(req.db);
    return next();
}