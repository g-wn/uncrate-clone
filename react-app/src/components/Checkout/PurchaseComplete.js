import { useState } from "react";
import { useHistory } from "react-router-dom";
import CategoriesNav from "../Navigation/CategoriesNav";
import Navigation from "../Navigation/Navigation";

const PurchaseComplete = () => {
  const history = useHistory();
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <Navigation isHovering={isHovering} setIsHovering={setIsHovering} />
      <CategoriesNav setIsHovering={setIsHovering} />
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
        <div className="cart-checkout-button-container">
          <button className="cart-checkout-button" onClick={() => {
            history.push('/order-history');
          }}>GO TO ORDER HISTORY</button>
        </div>
      </div>
    </>
  )
}

export default PurchaseComplete;
