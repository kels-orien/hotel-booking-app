import Stripe from "stripe";
import nextConnect from "next-connect";
import axios from "axios";
import middleware from "../../../middleware/middleware";
import {getHotel} from "../../../lib/db";

const stripe = new Stripe(process.env.STRIPE_SK_TEST);


const handler = nextConnect();
handler.use(middleware);



handler.post(async (req, res) => {
  
  console.log("request body: ", req.body);


  
  
    try {
      const {amount, cartItems, slugNumber, fname, lname, email}  = req.body;

   
      // Psst. For production-ready applications we recommend not using the
      // amount directly from the client without verifying it first. This is to
      // prevent bad actors from changing the total amount on the client before
      // it gets sent to the server. A good approach is to send the quantity of  
      // a uniquely identifiable product and calculate the total price server-side.
      // Then, you would only fulfill orders using the quantity you charged for.
      

    const hotel = await getHotel(req, slugNumber);
     // console.log ("hotel data: ", hotel);
     // console.log("cart items: ", cartItems);


      let bookedRooms = [] ;

      for (var i = 0; i < cartItems.length; i++) {
        let found = hotel.rooms.find(room => room._id === cartItems[i]._id);
        found.quantity = cartItems[i].quantity;
          bookedRooms.push (found);
        
	       }
         //console.log("bookedRooms: ", bookedRooms);

         let totalAmount = bookedRooms.reduce((count, curItem)=> {
          return count + curItem.price * curItem.quantity;
        }, 0)
       
        

        console.log("amount: ", amount);
        console.log("total: ", totalAmount);
     if (totalAmount === amount)
     {
       
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency: "usd"
        });

      res.status(200).send(paymentIntent.client_secret);
    } else {
      console.log("amount incorrect")
    }
    }catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
     }

});

export default handler;
