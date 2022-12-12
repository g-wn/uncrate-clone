import React from "react";
import "./SuggestedProducts.css";
import SuggestedProduct from "./SuggestedProduct";

export default function SuggestedProducts() {
  const randomPicks = [];
  // for (let i = 0; i < 8; i++) {
  //   let randomInt = Math.random(1 * )
  //   randomPicks.push({
  //     url: `/products/${i}`,
  //     img: i,
  //   });
  // }
  const products = [];
  const imgUrls = [
    {
      url: "https://cdn.shopify.com/s/files/1/0248/6216/products/nude-glass-black-double-cigar-tray-21_large.jpg?v=1665409502",
      label: "NUDE ALTRIUST CIGAR ASHTRAY",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0248/6216/products/onsen-bath-robe-4_large.jpg?v=1637166523",
      label: "ONSEN X REDUNCRATE BATH ROBE",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0248/6216/products/seiko-wall-clock-blue-red-2_large.jpg?v=1670429553",
      label: "SEIKO WALL CLOCK",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0248/6216/products/holden-puffy-slides-black-5_large.jpg?v=1670255099",
      label: "HOLDEN PUFFY SLIDES",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0248/6216/products/uturn-orbit-pro-10_large.jpg?v=1604940280",
      label: "U-TURN ORBIT PLUS TURNTABEL",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0248/6216/products/punkt-mp02-4_large.jpg?v=1562592856",
      label: "PUNKT MP 02 GEN II PHONE",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0248/6216/products/vintage-tent-fabric-pet-bed-5_large.jpg?v=1670343945",
      label: "VINTAGE TENT FABRIC PET BED",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0248/6216/products/investing-in-wristwatches-5_large.jpg?v=1638980095",
      label: "INVESTING IN WRISTWATCHES - ROLEX",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0248/6216/products/tinkering-labs-electric-motor-catalyst-21_large.jpg?v=1669066557",
      label: "TINKERING LABS ELECTRIC MOTORS TOY KIT",
    },
  ];
  for (let i = 0; i < 8; i++) {
    products.push(
      <SuggestedProduct
        imgUrl={imgUrls[i].url}
        productLabel={imgUrls[i].label}
      />
    );
  }
  return <div className="suggested-products">{products}</div>;
}
