import { useCart } from "./../providers/CartProvider";
import { addQuantityByProduct, addToCart } from "./../actions";
import { useDispatchCart } from "../providers/CartProvider";
import Product from "../components/product"
import axios from "axios";
import TopDeals from "../components/Thumbnail/topDeals";
function homepage({topdata }) {
 

  
  return (
    <div className="b-color">
      <h1>Hello World!</h1>
      
      {topdata
              ? topdata.map((topdeal) => (
                  <TopDeals
                    key={topdeal._id}
                    name_of_hotel={topdeal.name_of_hotel}
                    name_of_city={topdeal.name_of_city}
                    percentage_off={topdeal.percentage_off}
                    image_url={topdeal.image_url}
                    slug={topdeal.slug}
                  />
                ))
              : "No topdeal data"}
    </div>
  );
}
export async function getServerSideProps() {
  
  //const topdata = await axios.get(`http://localhost:3000/api/top`);
  let topdata;
  fetch(`http://localhost:3000/api/top`)
            .then(response => console.log(response))
            .then(result => {
                topdata = result
            })
            .catch(e => {
                console.log(e);
            });

  return { props: { topdata } };
}
export default homepage;
