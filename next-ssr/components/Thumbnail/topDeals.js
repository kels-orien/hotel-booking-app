import React from 'react';
import Link from 'next/link';


const TopDeals = ({name_of_hotel, image_url, slug, percentage_off, name_of_city}) => {
    return (
        <div className="top-deals-grid-card">
            <div className ="rv-card home">
                <Link href={`/hotel/${slug}`}><img src={image_url}/></Link> 
            <div className="rv-card-details homepage">
             <Link href={`/hotel/${slug}`}><h4 className="ellipsis text-left">{name_of_hotel}</h4></Link>
                <p className="color-dark text-left"><a href="">{name_of_city}</a></p>  
            </div>  
         
          <div className="rv-discount-position">
                  <div>
                                    <p className="listing-hotels-discount rv-card-discount">
                                        Up to <span>{percentage_off}</span> off
                                    </p>
                                    <div className="rv-slant"></div>
                                </div>
                            </div>              
            </div>


            
            </div>
            
    )
}

export default TopDeals
