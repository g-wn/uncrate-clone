import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { postProduct } from '../../store/all_products';
import SupplyNavBar from '../SingleProduct/SupplyNavBar/SupplyNavBar';
import './ProductForm.css';

const ProductForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [detailed_description, set_detailed_description] = useState('');
  const [category_id, set_category_id] = useState(0);
  const [price, setPrice] = useState('');
  const [preview_img_url, set_preview_img_url] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors([]);
    const new_product = await dispatch(
      postProduct({
        title,
        description,
        detailed_description,
        category_id,
        price,
        preview_img_url
      })
    ).catch(async res => {
      const data = await res.json();
      if (data && data.errors) setErrors(Object.values(data.errors));
    });

    if (new_product) history.push(`/products/${new_product.id}`);
  };

  return (
    <>
      <SupplyNavBar />
      <div className='product-form-container'>
        <form
          className='product-form'
          onSubmit={handleSubmit}
        >
          {errors.length > 0 ? (
            <ul className='product-form-header'>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          ) : (
            <h2 className='product-form-header'>Provide some details about your product</h2>
          )}

          <div className='inputs-container'>
            <div className='title-container'>
              <label htmlFor='title-input'>TITLE</label>
              <input
                className='title-input'
                onChange={e => setTitle(e.target.value)}
                name='title-input'
                placeholder='Enter a title'
                required
                type='text'
                value={title}
              />
            </div>
            <div className='description-container'>
              <label htmlFor='desctiption-input'>DESCRIPTION</label>
              <input
                className='description-input'
                onChange={e => setDescription(e.target.value)}
                name='description-input'
                placeholder='Enter a brief description'
                required
                type='text'
                value={description}
              />
            </div>
            <div className='detailed-description-container'>
              <label htmlFor='detailed-description-input'>DETAILS</label>
              <textarea
                className='detailed-description-input'
                onChange={e => set_detailed_description(e.target.value)}
                name='detailed-description-input'
                placeholder='Enter all the details'
                value={detailed_description}
              />
            </div>
            <div className='category-container'>
              <label htmlFor='category-input'>CATEGORY</label>
              <select
                className='category-input'
                onChange={e => set_category_id(e.target.value)}
                name='category-input'
                required
                value={category_id}
              >
                <option
                  value={category_id === 0 ? category_id : ''}
                  disabled
                  hidden
                >
                  Select a Category
                </option>
                <option value='1'>Gear</option>
                <option value='2'>Style</option>
                <option value='3'>Cars</option>
                <option value='4'>Tech</option>
                <option value='5'>Shelter</option>
                <option value='6'>Vices</option>
                <option value='7'>Body</option>
                <option value='8'>Etc</option>
              </select>
            </div>
            <div className='price-container'>
              <label htmlFor='price-input'>PRICE</label>
              <input
                className='price-input'
                min={0}
                onChange={e => setPrice(e.target.value)}
                placeholder='Enter a price'
                required
                type='number'
                value={price}
              />
            </div>
            <div className='preview-img-container'>
              <label htmlFor='preview-img-input'>MAIN IMAGE</label>
              <input
                className='preview-img-input'
                onChange={e => set_preview_img_url(e.target.value)}
                placeholder='Enter a URL'
                required
                type='url'
                value={preview_img_url}
              />
            </div>
            <button
              className='product-form-submit'
              type='submit'
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
