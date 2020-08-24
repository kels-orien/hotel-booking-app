import nc from "next-connect";
import middleware from "../../../middleware/middleware";

const handler = nc();

handler.use(middleware);

handler.get(async (req, res) => {
  const hotels = await req.db.collection("hotels").find().toArray();
  res.send(hotels);
});

handler.post(async (req, res) => {
  console.log("request body: ", req.body);
  const content = req.body;

  if (!content)
    return res.status(400).send("No data in request body. Pls add and resend");

  await req.db.collection("hotels").insertOne(content);
  return res.send(content);
});

export default handler;
