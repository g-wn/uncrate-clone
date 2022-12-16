import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartHistory } from '../../store/cart';
import Navigation from '../Navigation/Navigation';
import ProfileNav from '../ProfileNav/ProfileNav';
import './OrderHistory.css';

const OrderHistory = () => {
    const dispatch = useDispatch();
    const purchasedCarts = useSelector(state => state.cart.orderHistory)
    const user = useSelector(state => state.session.user)
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        dispatch(getCartHistory());
    }, [dispatch]);

    const usDollar = Intl.NumberFormat("en-US");

    if (!purchasedCarts) return null;

    return (
        <>
            <Navigation isHovering={isHovering} setIsHovering={setIsHovering} />
            <ProfileNav />
            <div className="checkout-page">
                <h1 className='checkout-title'>{user.first_name}'S ORDER HISTORY</h1>
                <div className='order-history-grid'>
                    {purchasedCarts.map(cart => (
                        <div className="checkout-items-container">
                            <div className="checkout-items">
                                {Object.values(cart.cartItems).map(item => (
                                    <div className="one-checkout-item">
                                        <NavLink to={`/products/${item.product.id}`}>
                                            <img
                                                className='cart-item-image'
                                                src={item.product.productImages[item.product.previewImgId].url}
                                                alt='cart item'
                                            />
                                        </NavLink>
                                        <div className='checkout-item-title'>
                                            {item.product.title}
                                        </div>
                                        <div className="checkout-item-quantity-and-price">
                                            <div className='checkout-item-price'>
                                                ${usDollar.format(item.product.price * item.quantity)}.00
                                            </div>
                                            <div className='checkout-item-quantity'>
                                                QTY: <span className="checkout-quantity">{item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="checkout-total-container">
                                <span className="checkout-total">TOTAL</span>
                                <span className="checkout-price">USD ${cart.total}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default OrderHistory;
