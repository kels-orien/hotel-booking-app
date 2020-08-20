import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Search from "../components/search";
import Slider from "../components/slider";
import Thumbnail from "../components/thumbnail";
import Header from "../components/header";
import Layout from "../components/layout";
import PageBody from "../components/pagebody";
import Hotel from "../components/hotel";
export default function Home({ data }) {
  return (
    <div className="container">
      <Layout>
        <Header>
          <Nav />
        </Header>
        <PageBody>
          <Search />
          <Slider />

          {data ? <Header /> : <Hotel />}
        </PageBody>
        <Footer />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  // params contains the thumb `id`.
  // If the route is like /thumb/1, then params.id is 1
  const res = await fetch(`VERCEL_URL` + `/api/hotels`);

  const data = await res.json();
  return { props: { data } };
}
