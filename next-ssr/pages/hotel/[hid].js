import React from 'react';
import middleware from '../../middleware/middleware';
import { getHotel } from "../../lib/db";
import Slider from "../../components/slider"


const Hotel  = ({hotel}) => {
  const {name, address, faq, city, rooms, ratings, hotel_description, hotel_information, terms_and_conditions, images} = hotel;

  

  return (
     <div>
        <p>name: {name}</p>
        <div> {images.map(image =>  <Slider image_url={image} key={image}/>)}</div>
        <p>address: { address}</p>
        <p>city:{city}</p>
       <p>ratings: {ratings}</p>
       <p>hotel description: {hotel_description}</p>
      <p>hotel information: {hotel_information}</p> 
  </div>
  ) 
}


// This function gets called at build time

export async function getServerSideProps(context) {
    await middleware.apply(context.req, context.res);
    const hotel =  await getHotel(context.req, context.params.hid);
    if (!hotel) context.res.statusCode = 404;
    return {
      props: {
        hotel
      }
    }
}

export default Hotel