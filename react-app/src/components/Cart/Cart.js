import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../../store/cart';
import { editCartItem, removeCartItem } from '../../store/cart_items';
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const [item, setItem] = useState(null)
    const [quantity, setQuantity] = useState(1);
    const [errors, setErrors] = useState([]);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        console.log(quantity)
        await dispatch(editCartItem(item, quantity))
        // .catch(async res => {
        //     const data = await res.json();
        //     if (data && data.errors) setErrors(Object.values(data.errors))
        // });
        dispatch(getCart())
    }

    let cartItems;
    if (cart && cart.cartItems) cartItems = Object.values(cart.cartItems)

    if (!cart || !cartItems) return null;

    return (
        <div className='cart-container'>
            <h1 className='cart-title'>YOUR CRATE</h1>
            <div>
                {cartItems.map(item => (
                    <div className='cart-item-container' key={item.id}>
                        <img
                            className='cart-item-image'
                            src={item.product.productImages[item.product.previewImgId].url}
                            alt='cart item'
                        />
                        <div className='cart-item-title-and-remove'>
                            {item.product.title}
                            <button className='cart-remove-button' onClick={async (e) => {
                                e.preventDefault()
                                await dispatch(removeCartItem(item.id))
                                dispatch(getCart())
                            }}
                            >
                                REMOVE
                            </button>
                        </div>
                        <div className='cart-quantity-and-price'>
                            <div className='cart-quantity-container'>
                                <form onSubmit={handleSubmit}>
                                    {errors.length > 0 && (
                                        <ul>
                                            {errors.map((error, idx) => (
                                                <li key={idx}>{error}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <label htmlFor='quantity-input'></label>
                                    <select
                                        required
                                        // onFocus={() => setItem(item)}
                                        onChange={e => {
                                            setQuantity(e.target.value)
                                            // handleSubmit(e)
                                        }}
                                        name='quantity-input'
                                        value={quantity}
                                    >
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                        <option value='7'>7</option>
                                        <option value='8'>8</option>
                                        <option value='9'>9</option>
                                        <option value='10'>10</option>
                                    </select>
                                    <br />
                                    <button type='submit' onClick={() => setItem(item)}>Update</button>
                                </form>
                            </div>
                            <div className='cart-price'>
                                ${item.product.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart;
