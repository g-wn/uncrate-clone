import React, { useState } from "react";
import "./Carousel.css";
import CarouselCard from "./CarouselCard";

export default function Carousel() {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    let newCurrentCard = currentCard + 1;

    setCurrentCard({ currentCard: newCurrentCard }, () => {
      const carousel = document.querySelector(".carousel");
      carousel.style.transitionDuration = "0.5s";
      carousel.style.transform = `translate(-${960 * currentCard}px)`;
    });
  };

  return (
    <div className="carousel">
      <CarouselCard cardNumber={0} />
      <CarouselCard cardNumber={1} />
      <CarouselCard cardNumber={2} />
      <CarouselCard cardNumber={3} />
      <CarouselCard cardNumber={4} />
    </div>
  );
}
