import React from 'react'

const Cities = ({ city_name, number_of_hotels }) => {
    return (
        <div>
            <h1>{city_name}</h1>
            <h2>{number_of_hotels}</h2>
        </div>
    )
}

export default Cities
