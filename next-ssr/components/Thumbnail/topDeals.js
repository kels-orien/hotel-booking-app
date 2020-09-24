import React from 'react';
import Link from 'next/link';


const TopDeals = ({name_of_hotel, image_url, hid, percentage_off, name_of_city}) => {
    return (
        <div>
        <Link href={`/hotel/${hid}`}><a><h1>{name_of_hotel}</h1></a></Link>
           <h2>{name_of_city}</h2>
           <img src={image_url}/>
           <h2>{percentage_off}</h2>
        </div>
    )
}

export default TopDeals
