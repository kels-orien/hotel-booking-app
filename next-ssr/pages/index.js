import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Search from "../components/search";
import Slider from "../components/slider";
import Thumbnail from "../components/Thumbnail";
import Header from "../components/header";
import Layout from "../components/Layout";
import PageBody from "../components/pagebody";

export default function Home() {
  return (
    <div className="container">
      <Layout>
        <Header>
          <Nav />
        </Header>
        <PageBody>
          <Search />
          <Slider />
          <Thumbnail />
        </PageBody>
        <Footer />
      </Layout>
    </div>
  );
}
