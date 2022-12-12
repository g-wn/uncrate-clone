import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSingleProduct } from "../../store/one_product";
import { deleteProduct, deleteProductImage } from "../../store/one_product";
import "./SingleProduct.css";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import SuggestedProducts from "./SuggestedProducts/SuggestedProducts";
import SupplyNavBar from "./SupplyNavBar/SupplyNavBar";
import Carousel from "./ImageCarousel/Carousel";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector(state => state.session.user)
    const singleProduct = useSelector((state) => state.product[id]);
    console.log('single product -->', singleProduct)
    const history = useHistory()

    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [dispatch, id]);

    if (!singleProduct) return null;

    return (
        <div className="single-product-page">
            <SupplyNavBar />
            <div className="single-product">
                <ImageCarousel
                    previewImg={singleProduct.productImages[singleProduct.previewImgId].url}
                />
                <div className="single-product-details">
                    <h1>
                        {singleProduct.title.toUpperCase()} / ${singleProduct.price}
                    </h1>
                    <p className="single-product-detailed-description">
                        {singleProduct.detailedDescription}
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

                        {user && user.id === singleProduct.productOwner.id && (
                        <button className="delete-product-btn" onClick={(e) => {
                            e.preventDefault()
                            dispatch(deleteProduct(singleProduct.id))
                            history.push('/')
                        }}>
                            REMOVE MY LISTING
                        </button>
                        )}

                        {/* {user && user.id === singleProduct.productOwner.id && (
                            <button className="delete-product-img-btn" onClick={(e) => {
                                console.log('hello from component')
                                e.preventDefault()
                                dispatch(deleteProductImage(singleProduct.previewImgId))
                                history.push('/')
                            }}>
                                REMOVE LISTING IMAGE
                            </button>
                        )} */}
                    </div>
                </div>
                <SuggestedProducts productImages={singleProduct.productImages[singleProduct.previewImgId].url} />
            </div>
        </div>
    );
};

export default SingleProduct;
