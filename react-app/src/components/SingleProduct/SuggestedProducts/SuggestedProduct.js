import React from "react";
import "./SuggestedProducts.css";

export default function SuggestedProduct({ imgUrl, productLabel }) {
  return (
    <a href="http://localhost:3000/products/38">
      <img src={imgUrl} alt="Example" />
      <span className="suggested-products-label">
        {productLabel} &nbsp;/&nbsp; $280
      </span>
    </a>
  );
}
