import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCart } from "../../store/cart";
import './Checkout.css';

const Checkout = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch])

    const usDollar = Intl.NumberFormat("en-US");

    let cartItems;
    if (cart && cart.cartItems) cartItems = Object.values(cart.cartItems)

    if (!cart || !cartItems) return null;

    return (
        <div className="checkout-page">
            <h1 className='checkout-title'>CHECKOUT</h1>
            <div className="checkout-items-container">
                <div className="checkout-items">
                    {cartItems.map(item => (
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
                    <span className="checkout-price">USD ${usDollar.format(cart.total)}</span>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
