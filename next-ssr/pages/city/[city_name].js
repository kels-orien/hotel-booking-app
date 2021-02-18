import React from "react";
import middleware from "../../middleware/middleware";
import { getCity } from "../../lib/db";
import ImageSlider from "../../components/slider";
import BookRoom from "../../components/BookRoom";
import Layout from "../../components/layout";
import Nav from "../../components/Nav";
import PageBody from "../../components/pagebody";
import Footer from "../../components/footer";
import Card from "../../components/card"

const City = ({hotels}) => {
  

  return (
    <Layout>
      <Nav />
      <PageBody>
        <main>
            <section className="listing-main-content">
              <div>
                <div className="listing-middle">
                  <div className="tab-content listing-tab-content">

                    <div className="filter-area-mobile hide">


                    </div>
                    <div>
                      <div className="tab-pane fade in active">
                        

                      
                  {hotels ? hotels.map((hotel) => (
                  <Card
                    key={hotel._id}
                    name = {hotel.name}
                    city={hotel.city}
                    address={hotel.address}
                    thumb_url={hotel.thumb_url}
                    ratings = {hotel.ratings}
                    images = {hotel.images}
                    slug = {hotel.slug}
                  />
                ))
              : "no hotel data"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        </main>
        
      </PageBody>
      <Footer/>
    </Layout>
  );
};

// This function gets called at build time
export async function getServerSideProps(context) {

  await middleware.apply(context.req, context.res);
  const hotels = await getCity(context.req, context.params.city_name);

  if (!hotels) context.res.statusCode = 404;
  return {
    props: {
      hotels,
    },
  };
}


export default City;
