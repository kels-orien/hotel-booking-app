import React from 'react'
import Link from 'next/link';



const Picture = ({ city_name, number_of_hotels, thumb_url}) => {
    return ( 
           
                        <div className="featured-city">
                            <a href="#" className="feature_image">
                                <img src={thumb_url} alt="Lagos hotels" className="width-100"/>
                                <div className="city-name">
                                    <h3 className="">{city_name}</h3>
                                    <p>{number_of_hotels} hotels</p>
                                </div>

                                </a>
                                <div className="featured-city-cta"><a href="#" className="feature_image">
                                   </a><Link href={`/city/${city_name}`}><a href="" className="cta-button">Book Hotels in {city_name}</a></Link>
                                </div>
                            

                        </div>
    )
}

export default Picture
