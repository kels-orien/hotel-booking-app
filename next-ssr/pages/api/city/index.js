import nextConnect from "next-connect";
import middleware from "../../../middleware/middleware";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const data = await req.db.collection("cities").find().toArray();
  res.send(data);
});

handler.post(async (req, res) => {

  const content = req.body;

  if (!content)
    return res.status(400).send("No data in request body. Pls add and resend");

  await req.db.collection("cities").insertOne(content);
  return res.send(content);
});

export default handler;
