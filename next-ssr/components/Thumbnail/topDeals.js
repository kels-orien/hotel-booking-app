import React from 'react'

const TopDeals = ({name_of_hotel, image_url, percentage_off, name_of_city}) => {
    return (
        <div>
           <h1>{name_of_hotel}</h1>
           <h2>{name_of_city}</h2>
           <img src={image_url}/>
           <h3>{percentage_off}</h3>
        </div>
    )
}

export default TopDeals
