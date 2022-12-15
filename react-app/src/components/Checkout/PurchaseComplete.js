import { useState } from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const PurchaseComplete = () => {
    const history = useHistory();
    const [isHovering, setIsHovering] = useState(false);
    return (
        <>
            <Navigation isHovering={isHovering} setIsHovering={setIsHovering} />
            <div className="checkout-page">
                <h1 className='checkout-title'>PURCHASE COMPLETE!</h1>
                <div className="cart-checkout-button-container">
                    <button className="cart-checkout-button" onClick={() => {
                        history.push('/');
                    }}>RETURN HOME</button>
                </div>
                <div className="cart-checkout-button-container">
                    <button className="cart-checkout-button" onClick={() => {
                        history.push('/profile');
                    }}>GO TO PROFILE</button>
                </div>
                {/* <div className="checkout-items-container">
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
                                        {(totalPrice += item.product.price * item.quantity) && false}
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
                        <span className="checkout-price">USD ${usDollar.format(totalPrice)}</span>
                    </div>
                    <div className="cart-checkout-button-container">
                        <button className="cart-checkout-button" onClick={() => {
                            dispatch(purchaseCart(totalPrice));
                            history.push('/checkout/complete');
                        }}>PURCHASE</button>
                    </div>
                    {showPurchaseComplete && (
                        <Modal onClose={() => setShowPurchaseComplete(false)}>
                            <PurchaseComplete setShowPurchaseComplete={setShowPurchaseComplete} />
                        </Modal>
                    )}
                </div> */}
            </div>
        </>
    )
}

export default PurchaseComplete;
