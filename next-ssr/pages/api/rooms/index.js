import nextConnect from "next-connect";
import middleware from "../../../middleware/middleware";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const data = await req.db.collection("rooms").findOne({
    _id: roomId,
  });
  res.send(data);
});

handler.post(async (req, res) => {
  console.log("request body: ", req.body);
  const { data } = req.body;

  //if (!data)
   // return res.status(400).send("No data in request body. Pls add and resend");

  await req.db.collection("rooms").insertOne(data);
  return res.send(data);
});


export default handler;
