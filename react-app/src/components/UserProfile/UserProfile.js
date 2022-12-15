import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { getProducts, deleteProduct } from '../../store/all_products';
import Navigation from '../Navigation/Navigation';
import './UserProfile.css';

const UserProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user);
    const [isHovering, setIsHovering] = useState(false);

    const allProducts = useSelector(state => Object.values(state.products));

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    if (!allProducts || allProducts.length === 0) return null;

    return (
        <>
            <Navigation isHovering={isHovering} setIsHovering={setIsHovering} />
            <div className='my-listings'>
                <div className="hidden-spacer"></div>
                <span className='my-listings-title'>{`${user.first_name}'s Listings`}</span>
                <NavLink
                    className='add-product-btn'
                    to={'/products/new'}
                >
                    <AiOutlinePlusCircle size={30} />
                </NavLink>
            </div>
            <div className='user-products'>
                {allProducts.map(
                    (product, idx) =>
                        product.productOwner.id === user.id && (
                            <div
                                key={idx}
                                className='product-details'
                            >
                                <NavLink
                                    className='image'
                                    to={`/products/${product.id}`}
                                >
                                    <img
                                        alt="product-main-img"
                                        className="product-preview-img"
                                        src={product.productImages[product.previewImgId].url}
                                    ></img>
                                </NavLink>
                                {product.title}
                                <button
                                    className="edit-listing"
                                    onClick={() => {
                                        history.push(`/products/${product.id}/update`);
                                    }}
                                >
                                    Edit Product Details
                                </button>
                                <button
                                    className='edit-listing'
                                    onClick={() => {
                                        history.push(`/${product.id}/images/add-edit`);
                                    }}
                                >
                                    Add/Edit Images
                                </button>
                                <button
                                    className='delete-listing'
                                    onClick={async e => {
                                        e.preventDefault();
                                        await dispatch(deleteProduct(product.id));
                                        dispatch(getProducts());
                                    }}
                                >
                                    Delete From Reduncrate
                                </button>
                            </div>
                        )
                )}
            </div>
        </>
    );
};

export default UserProfile;
