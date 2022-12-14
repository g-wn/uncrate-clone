import React from "react";
import { NavLink } from "react-router-dom";
import "./SuggestedProducts.css";

export default function SuggestedProduct({ products }) {
  console.log(products);
  return (
    <>
      {products.map((product) => (
        <NavLink to={`${product.url}`}>
          <img src={product.img} alt="Example" />
          <span className="suggested-products-label">
            {product.title} &nbsp;/&nbsp; ${product.price}
          </span>
        </NavLink>
      ))}
    </>
  );
}
