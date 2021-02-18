import React from "react";
import middleware from "../../middleware/middleware";
import { getHotel } from "../../lib/db";
import ImageSlider from "../../components/slider";
import BookRoom from "../../components/BookRoom";
import Layout from "../../components/layout";
import Nav from "../../components/Nav";
import PageBody from "../../components/pagebody";
import Footer from "../../components/footer";

const Hotel = ({ hotel }) => {
  const {
    name,
    address,
    slug,
    faq,
    city,
    rooms,
    ratings,
    hotel_description,
    hotel_information,
    terms_and_conditions,
    images,
  } = hotel;

  return (
    <Layout>
      <Nav />
      <PageBody>
        <div className="sph-header-container">
          <div className="sph-header">
            <div className="pull-right">
              <div className="sph-reviews-overview header-section">
                <div className="sph-reviews-overview-rating header-section bkgrnd-excellent">
                  {ratings}
                </div>
                <div className ="sph-reviews-overview-text hidden-xs">
                <p className="color-excellent">Excellent</p>
                  <p>
                    <a href="#reviews" className="sph-reviews-link scroll">
                      Based on 48 Guest Review<span className="single-5">s</span>
                    </a>
                  </p>
               </div>
              </div>
            </div>
            <h1 className="sph-header-name">{name}</h1>
            <p className="sph-header-address">{address} {city}</p>
          </div>
          <center>

          <div className="sph-images">
            {<ImageSlider images={images} key={1} />}
          </div>
          </center>
         
        </div>
        <div className="sph">
          <div className="sph-details">   
            <div className="sph-container">
              <div className="sph-info-container">
                <div className="sph-info">
                  <h2 className="sph-info-header">Hotel Information</h2>
                  <div className="sph-info-highlight">
                    <div className="sph-info-facilities">
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>Security</p>
                      </div>
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>Air Conditioning</p>
                      </div>
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>24 Electricity</p>
                      </div>
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>Adequate Parking</p>
                      </div>
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>Luggage Storage</p>
                      </div>
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>Restaurant</p>
                      </div>
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>Bar/Lounge</p>
                      </div>
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>Wireless Internet</p>
                      </div>
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>Room Service</p>
                      </div>
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>Laundry</p>
                      </div>
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>Conference facility</p>
                      </div>
                      <div className="sph-info-facility">
                        <div className="sph-info-facilities-icon"></div>
                        <p>Fenced compound</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="sph-info-brief"></div>
                  <div className="review-overview hidden-xs"></div>
                  <div className="sph-info-main">

                  <div className="">
                        <article className="sph-info-details">
                          .<p>{hotel_description}</p>
                        </article>


                        <article className="sph-info-terms">
                        </article>
                          
                     </div>

                  </div>
                </div>
                <div className="sph-rooms-container">
                      <h3>Book Rooms</h3>
                      <div className="sph-rooms">
                        <div className="sph-rooms-all">
                          <BookRoom rooms={rooms} slug={slug} hotel_name={name}/>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </PageBody>
      <Footer/>
    </Layout>
  );
};

// This function gets called at build time

export async function getServerSideProps(context) {
  await middleware.apply(context.req, context.res);
  const hotel = await getHotel(context.req, context.params.slug);
  if (!hotel) context.res.statusCode = 404;
  return {
    props: {
      hotel,
    },
  };
}

export default Hotel;
