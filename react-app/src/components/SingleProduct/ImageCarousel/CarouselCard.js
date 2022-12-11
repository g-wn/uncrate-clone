import React from "react";
import "./Carousel.css";
export default function CarouselCard({ cardNumber }) {
  return (
    <div className="carousel-card">
      <img src="https://uncrate.com/p/2022/12/2023-taylormade-p770-irons-1.jpg" />
      {cardNumber}
    </div>
  );
}
