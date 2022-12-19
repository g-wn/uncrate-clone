import React from "react";
import { NavLink } from "react-router-dom";
import "./SuggestedProducts.css";

export default function SuggestedProduct({ product }) {

  return (
    <div className="suggested-product-item">
      <NavLink to={`/products/${product.id}`}>
        <img src={product.cartImgUrl} alt="Example" />
        <span className="suggested-products-label">
          {product.title} &nbsp;/&nbsp; ${product.price}
        </span>
      </NavLink>
    </div>
  );
}
