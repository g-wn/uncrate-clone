import React from 'react';
import { NavLink } from 'react-router-dom';
import './SuggestedProducts.css';

export default function SuggestedProduct({ product }) {
  return (
    <>
      <NavLink to={`${product.url}`}>
        <img
          src={product.img}
          alt='Example'
        />
        <span className='suggested-products-label'>
          {product.title} &nbsp;/&nbsp; ${product.price}
        </span>
      </NavLink>
    </>
  );
}
