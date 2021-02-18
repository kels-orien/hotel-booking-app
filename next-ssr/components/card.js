
import React from 'react';
import Link from "next/link";

const Card = ({name, city, address, thumb_url, ratings, images, slug }) => {
    return (
        <div className="listing-hotels">
        <div className="row">
          <div className="col-xs-12 col-sm-4 listing-hotels-slider-box">
            <div>
              <div className="listing-hotels-slider slick-initialized slick-slider">
                  <button type="button" className="slick-prev slick-arrow" label="Previous"/>

                    <div className="slick-list draggable">
                      <div className="slick-track">
                        <div className="image slick-slide slick-cloned">
                            <a href="#">
                              <span class="visibility-hidden">Go to hotel</span>
                              <img src={thumb_url} className="width-100"/>

                            </a>
                        </div>

                        <div className="image slick-slide slick-current slick-active">
                            <img src=""/>
                            <a href="#">
                              <span className="visibility-hidden">Go to Hotel</span>
                              <img src="" className="width-100"/>
                            </a>
                        </div>
                        
                      </div>
                    </div>
                  <button type="button" className="slick-next slick-arrow" label="Previous"/>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8 row listing-hotels-details-box">
              <div className="col-xs-8 listing-hotels-details">
                <div className="listing-hotels-details-property">

                <div class="listing-hotels-details-property">
                                               <div class="property-badge badge-hotels">Hotel</div>
                                               <a  href="#">
                                               <Link href={`/hotel/${slug}`}>
                                                   <h2 class="listing-hotels-name">{name} {city}</h2>
                                               </Link>

                                               </a>
                                               
                                           </div>
                  <a href="#" className=""> 
                    <h2 className="listing-hotels-name"></h2>
                  </a>
                </div>
                
                <p className="listing-hotels-address color-dark hidden-xs hidden-sm"></p>
                <p className="listing-hotels-address color-dark">{city} {address}</p>
                <div className="listing-hotels-review hidden-xs"></div>
                <div className="listing-hotels-facilities hidden-xs"></div>
                
              </div>
              <div className="col-xs-4 listing-hotels-prices">
            <div className="hide">+234 700034772</div>
            <p className="listing-hotels-prices-discount">N23, 456 <span>avg/night</span></p>
            <div class="listing-hotels-rating-box">
            <p class="listing-hotels-rating"><span class="bkgrnd-excellent">{ratings} Excellent</span><br/>
                                               </p>
                                               <p class="listing-hotels-rating-number">From 197 reviews</p>                  
            </div>

            
            <div>
              <a href = "#">
              <Link href={`/hotel/${slug}`}>
              <button class="new-btn-primary " data-ga-label="book-now-button" data-ga-category="Hotel-Page-Interaction" data-ga-action="button-click">
                             Book Now</button>
                             </Link>
              </a>
            </div>

          </div>
          </div>
          
        </div>
      </div>
    )
}

export default Card
