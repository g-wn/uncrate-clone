import React, { useState } from "react";
import classes from "./ImageCarousel.module.css";
import "./Carousel.css";

export default function ImageCarousel({ previewImg }) {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    const carousel = document.querySelector(".DisplayFrame");

    if (currentCard < carousel.children.length - 1) {
      setCurrentCard(currentCard + 1);

      carousel.style.transitionDuration = "0.5s";
      carousel.style.transform = `translate(-${960 * currentCard}px)`;
      console.log(currentCard);
    } else {
      return;
    }
  };

  return (
    <div className="image-carousel">
      <div className={classes.container}>
        <div className={classes.LeftArrow}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="DisplayFrame">
          <div className={classes.CarouselItem} id="carouselitem1">
            <img src={previewImg} />
          </div>
          <div className={classes.CarouselItem} id="carouselitem2">
            <img src="https://cdn.shopify.com/s/files/1/0248/6216/products/Pride-and-Groom-Shedder-Shampoo-3_large.jpg" />
          </div>
          <div className={classes.CarouselItem} id="carouselitem3">
            <img
              src="https://cdn.shopify.com/s/files/1/0248/6216/products/klaro-humidor-black-9_large.jpg"
              alt="Product"
            />
          </div>
          <div className={classes.CarouselItem} id="carouselitem4">
            <img src="https://cdn.shopify.com/s/files/1/0248/6216/products/master-dynamic-mw08-black-4_large.jpg" />
          </div>
          <div className={classes.CarouselItem} id="carouselitem5">
            <img src="https://cdn.shopify.com/s/files/1/0248/6216/products/hemingway-custom-book-set-13_large.jpg" />
          </div>
        </div>
        <div className={classes.RightArrow} onClick={handleNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
