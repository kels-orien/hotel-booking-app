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
import Cities from "../components/Thumbnail/cities";
import TopDeals from "../components/Thumbnail/topDeals";
import Picture from "../components/Thumbnail/picture";

export default function Home({ topdata }) {
  return (
    <div className="container">
      <Layout>
        <Header>
          <Nav />
        </Header>
        <PageBody>
          <Search />
          <Slider />

         

          <div></div>
        </PageBody>
        <Footer />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  // params contains the thumb `id`.
  // If the route is like /thumb/1, then params.id is
  const VERCEL_URL = process.env.VERCEL_URL;
  const res = await axios.get(`https://${VERCEL_URL}/api/top`);
  const topdata = res.data;
  console.log("topdata: ", topdata);
  return { props: { topdata } };
}
