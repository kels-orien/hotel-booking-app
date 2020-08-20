import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Search from "../components/search";
import Slider from "../components/slider";
import Thumbnail from "../components/thumbnail";
import Header from "../components/header";
import Layout from "../components/layout";
import PageBody from "../components/pagebody";

export default function Hotels({ data }) {
  return (
    <div className="container">
      <Layout>
        <Header>
          <Nav />
        </Header>
        <PageBody>
          <Search />
          <Slider />
          {data.map((hotel) => (
            <Thumbnail
              key={hotel._id}
              name={hotel.name}
              city={hotel.city}
              thumb_url={hotel.thumb_url}
            />
          ))}
        </PageBody>
        <Footer />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  // params contains the hotel `id`.
  // If the route is like /hotel/1, then params.id is 1
  const res = await fetch(`VERCEL_URL` + `/api/hotels`);

  const data = await res.json();
  return { props: { data } };
}
