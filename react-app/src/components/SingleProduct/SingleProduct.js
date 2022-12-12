import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../store/one_product";
import "./SingleProduct.css";
import Carousel from "./ImageCarousel/Carousel";
import SuggestedProducts from "./SuggestedProducts/SuggestedProducts";
import SupplyNavBar from "./SupplyNavBar/SupplyNavBar";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const singleProduct = useSelector((state) => state.product[id]);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  if (!singleProduct) return null;

  return (
    <div className="single-product-page">
      <SupplyNavBar />
      <div className="single-product">
        <Carousel infinite>
          <img
            src={singleProduct.product_images[singleProduct.previewImgId].url}
          />
          <img
            src={singleProduct.product_images[singleProduct.previewImgId].url}
          />
          <img
            src={singleProduct.product_images[singleProduct.previewImgId].url}
          />
          <img
            src={singleProduct.product_images[singleProduct.previewImgId].url}
          />
          <img
            src={singleProduct.product_images[singleProduct.previewImgId].url}
          />
        </Carousel>
        {/* <ImageCarousel
          previewImg={
            singleProduct.product_images[singleProduct.previewImgId].url
          }
        /> */}
        <div className="single-product-details">
          <h1>
            {singleProduct.title.toUpperCase()} / ${singleProduct.price}
          </h1>
          <p className="single-product-detailed-description">
            {singleProduct.detailed_description}
          </p>
          <p className="single-product-details-greentxt">
            IN STOCK AND SHIPS FREE WITH EASY RETURNS.
          </p>
          <div className="single-product-details-btns">
            <button className="single-product-details-btn btn-add-cart">
              ADD TO CART
            </button>
            <button className="single-product-details-btn btn-stash-later">
              STASH FOR LATER
            </button>
          </div>
        </div>
        <SuggestedProducts
          productImages={
            singleProduct.product_images[singleProduct.previewImgId].url
          }
        />
      </div>
    </div>
  );
};

export default SingleProduct;
