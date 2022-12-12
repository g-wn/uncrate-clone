import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getProducts } from "../../store/all_products";


const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const { userId } = useParams();

    const allProducts = useSelector((state) => Object.values(state.products))
    console.log('all products -->', allProducts)


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    if (!allProducts || allProducts.length === 0) return null;
    
    return (
        <>
        <div className="user's products">
           <div className="my-listings">
           My Listings
            </div> 
           {allProducts.map(product => (
            product.productOwner.id === user.id &&
                <div className="product-name">{product.title}
                <img 
                    alt='product-main-img'
                    className="product-preview-img"
                    src={product.productImages[product.previewImgId].url}
                ></img>
                </div>
                
           ))}
        </div>
        
        
        </>
    )
}

export default UserProfile;