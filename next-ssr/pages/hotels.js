import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Search from "../components/search";
import Slider from "../components/slider";
import Thumbnail from "../components/thumbnail";
import Header from "../components/header";
import Layout from "../components/layout";
import PageBody from "../components/pagebody";

export default function Hotels({ hotels }) {
  return (
    <div className="container">
      <Layout>
        <Header>
          <Nav />
        </Header>
        <PageBody>
          <Search />
          <Slider />
          {hotels.map((hotel) => (
            <Thumbnail
              key={hotel._id}
              name={hotel.content.name}
              city={hotel.content.city}
              thumb_url={hotel.content.thumb_url}
            />
          ))}
        </PageBody>
        <Footer />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  // params contains the hotel `id`.
  // If the route is like /hotel/1, then params.id is 1
  const res = await fetch(`VERCEL_URL` + `/api/hotels`);
  //console.log(res.json());
  const hotels = await res.json(); // Pass hotel data to the page via props
  return { props: { hotels } };
}
