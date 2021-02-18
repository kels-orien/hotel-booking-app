/**
 * A simple method of demonstrating how you can use the Next.js
 * internal API for 'server-less' functions. We export an async function.
 *
 * We import the nodemailer package to handle SMTP transactional mail.
 *
 * In a production environment, you could create a .env.production
 * to hold your secure details, e.g.,
 * HOST, AUTH_USER, AUTH_PASS
 *
 */
import nodemailer from "nodemailer";

export default async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "cheyanne.gulgowski17@ethereal.email", // generated ethereal user
      pass: "aASNhAdh7sM9QvjcQf", // generated ethereal password
    },
  });

  const { firstname, lastname, email, hotel_name, amount, booking } = req.body;
  console.log("body: ", req.body);

  

  let rooms = "";

  rooms += booking.map((item) => {
    let container = "";

    container += `Room type: ${item.room_type}\n`;
    container += `Rooms booked: ${item.quantity}\n`;
    container += `Price per room: ${item.price}\n\n`;

    return container;
  });

  console.log("rooms: ", rooms);

  if (req.method === "POST") {
    let info = await transporter.sendMail({
      from: '"Chris Chuks" <hotel-app@booking.com>', // sender address
      to: "cheyanne.gulgowski17@ethereal.email", // list of receivers
      subject: `Hotel Reservations 2`, // Subject line
      text:
        `Hello ${firstname} ${lastname}.\n\n` +
        `Thank you for choosing us for your reservation at ${hotel_name}.\n\n` +
        `${rooms}\n` +
        `Total amount: N${amount}\n`, // plain text body, // plain text body
      html: "", // html body
    });

    // We can also extract the form variables from our req.body
    res.status(200).json("email sent");
  } else {
    res.status(200).json({ message: `Response from /api/email.` });
  }
};
