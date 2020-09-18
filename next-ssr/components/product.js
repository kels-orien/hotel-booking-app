import React from "react";
import Link from "next/link";

const Product = ({ prod }) => {
  console.log("prod id:", prod);
  return (
    <div>
      {prod.map((pro) => (
        <div>{pro.url}</div>
      ))}
      <Link href="/">
        <a className="header__container__in__-1" href="/">
          Home
        </a>
      </Link>
    </div>
  );
};

export default Product;
