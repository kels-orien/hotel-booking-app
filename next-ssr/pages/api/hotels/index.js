import nextConnect from 'next-connect';
import middleware from "../../../middleware/middleware"


const handler = nextConnect();

handler.use(middleware);


handler.get(async (req, res) => {

    const hotels = await req.db
        .collections('hotels')
        .toArray();
        res.send({ hotels});

})

handler.post(async (req, res) => {

    console.log("request body: ", req.body);
    const { content } = req.body;

    if (!content) return res.status(400).send('No data in request body. Pls add and resend');


    const hotel = {
        content,
        createdAt: new Date(),
    }
    
    await req.db.collection('posts').insertOne(hotel);
    return res.send(hotel);
})


export default handler;