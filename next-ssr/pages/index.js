import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Search from "../components/search";
import Slider from "../components/slider";
import Header from "../components/header";
import Layout from "../components/layout";
import PageBody from "../components/pagebody";
import getTopDeals from "../helpers/buildtime/getTopDeals";
import getCities from "../helpers/buildtime/getCities";
import axios from "axios";
import Topdeals from "../components/Thumbnail/topdeals";
import Cities from "../components/Thumbnail/cities";
import TopDeals from "../components/Thumbnail/topdeals";
import Picture from "../components/Thumbnail/picture";

export default function Home({cities, topdeals }) {
  return (
    <div className="container">
      <Layout>
        <Header>
          <Nav />
        </Header>
        <PageBody>
          <Search />
          <Slider />
          <div>
            {cities
              ? cities.map((city) => (
                  <Cities
                    key={city._id}
                    city_name={city.city_name}
                    number_of_hotels={city.number_of_hotels}
                  />
                ))
              : "no city data"}
          </div>

          <div>
            {topdeals
              ? topdeals.map((topdeal) => (
                  <TopDeals
                    key={topdeal._id}
                    name_of_hotel={topdeal.name_of_hotel}
                    name_of_city={topdeal.name_of_city}
                    percentage_off={topdeal.percentage_off}
                    image_url = {topdeal.image_url}
                  />
                ))
              : "No topdeal data"}
          </div>

          <div>
          {cities
              ? cities.map((picture) => (
                  <Picture
                    key={picture._id}
                    city_name={picture.city_name}
                    number_of_hotels={picture.number_of_hotels}
                    thumb_url = {picture.thumb_url}
                  />
                ))
              : "no city data"}


          </div>

        </PageBody>
        <Footer />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  // params contains the thumb `id`.
  // If the route is like /thumb/1, then params.id is

  const [cities, topdeals] = await Promise.all([getCities(), getTopDeals()]);

 
  return { props: {cities, topdeals } };
}
