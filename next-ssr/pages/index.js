import Head from "next/head";
import Form  from "../components/Form";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import Search from "../components/Search";
import Slider from "../components/Slider";
import Thumbnail from "../components/Thumbnail";


export default function Home() {
  return (
    <div className="container">
      <Nav/>
      <Search/>
      <Slider/>
      <Form />
      <Thumbnail/>
      <Footer/>
    </div>
  );
}
