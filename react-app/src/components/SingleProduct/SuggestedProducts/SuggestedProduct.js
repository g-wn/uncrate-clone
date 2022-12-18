import React from "react";
import { NavLink } from "react-router-dom";
import "./SuggestedProducts.css";

export default function SuggestedProduct({ product }) {
  for (let [key, img] of Object.entries(product.productImages)) {
    if (img.url.includes("shopify")) {
      product.suggestedImg = img.url;
    }
  }

  return (
    <div className="suggested-product-item">
      <NavLink to={`/products/${product.id}`}>
        <img src={product.suggestedImg} alt="Example" />
        <span className="suggested-products-label">
          {product.title} &nbsp;/&nbsp; ${product.price}
        </span>
      </NavLink>
    </div>
  );
}
