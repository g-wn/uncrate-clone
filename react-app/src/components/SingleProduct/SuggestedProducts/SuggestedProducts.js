import React from "react";
import "./SuggestedProducts.css";
import SuggestedProduct from "./SuggestedProduct";

export default function SuggestedProducts({ productList }) {
  const products = [];

  products.push(<SuggestedProduct products={productList} />);

  return <div className="suggested-products">{products}</div>;
}
