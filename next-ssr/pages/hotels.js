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
          {data.map((thumb) => (
            <Thumbnail
              key={thumb._id}
              name={thumb.name}
              city={thumb.city}
              thumb_url={thumb.thumb_url}
            />
          ))}
        </PageBody>
        <Footer />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  // params contains the thumb `id`.
  // If the route is like /thumb/1, then params.id is 1
  const res = await fetch('hotel-booking-app.vercel.app/api/hotels');

  const data = await res.json();
  return { props: { data } };
}
