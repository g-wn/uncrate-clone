import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../../store/cart';
import { removeCartItem } from '../../store/cart_items';
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch])

    let cartItems;
    if (cart && cart.cartItems) cartItems = Object.values(cart.cartItems)

    if (!cart || !cartItems) return null;

    return (
        <>
            <h1>This is your current cart!</h1>
            <div>
                {cartItems.map(item => (
                    <div key={item.id}>
                        <img
                            className='cart-item-image'
                            src={item.product.productImages[item.product.previewImgId].url}
                            alt='cart item'
                        />
                        {item.product.title} ${item.product.price} {item.quantity}
                        <button onClick={async (e) => {
                            e.preventDefault()
                            await dispatch(removeCartItem(item.id))
                            dispatch(getCart())
                        }}
                        >Remove From Cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart;
