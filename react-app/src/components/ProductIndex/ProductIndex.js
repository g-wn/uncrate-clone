import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from '../../store/all_products';
import './ProductIndex.css';

const ProductIndex = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => Object.values(state.products));

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    if (!products) return null;

    return (
        <div className='product-index'>
            {products.map((product) => (
                <div key={product.id} className='one-product'>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductIndex;
