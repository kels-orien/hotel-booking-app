import React from 'react'
import Link from 'next/link';



const Picture = ({ city_name,number_of_hotels, thumb_url }) => {
    return (
        <div>
            <h1>{city_name}</h1>
            <h3>{number_of_hotels}</h3>
            <img src={thumb_url}/>
           
        </div>
    )
}

export default Picture
