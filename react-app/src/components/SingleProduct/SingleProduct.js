import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../store/one_product';
import './SingleProduct.css';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const singleProduct = useSelector(state => state.product[id])

    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [dispatch, id])

    if (!singleProduct) return null;

    return (
        <div className='single-product'>
            <h1>{singleProduct.title}</h1>
            <p>{singleProduct.detailed_description}</p>
        </div>
    )
};

export default SingleProduct;
