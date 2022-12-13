import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProducts } from "../../store/all_products";
import Navigation  from '../Navigation/Navigation'
import './UserProfile.css'


const UserProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user);

    const allProducts = useSelector((state) => Object.values(state.products))
    console.log('all products -->', allProducts)


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    if (!allProducts || allProducts.length === 0) return null;

    return (
        <>
        <Navigation />
        <div className="user-products">
           <div className="my-listings">
           My Listings
            </div>
           {allProducts.map(product => (
            product.productOwner.id === user.id &&
                <div className="product-details">
                <img
                    alt='product-main-img'
                    className="product-preview-img"
                    src={product.productImages[product.previewImgId].url}
                ></img>
                {product.title}
                <button className="edit-listing" onClick={() => {
                    {history.push(`/products/${product.id}/update`)}
                }}>
                    Edit Product Details
                    </button>
                <button className="delete-listing">Yeet From Reduncrate</button>
                </div>
           ))}
        </div>


        </>
    )
}

export default UserProfile;
