import React from "react";
import Link from "next/link";

const Product = ({ prod }) => {
  console.log("prod id:", prod);
  return (
    <div>
    
        <div>{prod.name} <div>{prod.quantity}</div></div>
      
      <Link href="/">
        <a  href="/">
          Home
        </a>
      </Link>
    </div>
  );
};

export default Product;
