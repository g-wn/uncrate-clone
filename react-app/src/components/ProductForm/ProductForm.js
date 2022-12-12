import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { postProduct } from '../../store/all_products';
import SupplyNavBar from '../SingleProduct/SupplyNavBar/SupplyNavBar';

const ProductForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [detailed_description, set_detailed_description] = useState('');
  const [category_id, set_category_id] = useState(0);
  const [price, setPrice] = useState(0);
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
      <header className='product-form-header'>CREATE PRODUCT FORM</header>
      <form
        className='product-form'
        onSubmit={handleSubmit}
      >
        {errors.length > 0 ? (
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        ) : (
          <h2>Provide some details about your product</h2>
        )}

        <div className='inputs-container'>
          <input
            className='title-input'
            onChange={e => setTitle(e.target.value)}
            placeholder='Enter a title'
            required
            type='text'
            value={title}
          />
          <input
            className='description-input'
            onChange={e => setDescription(e.target.value)}
            placeholder='Enter a brief description'
            required
            type='text'
            value={description}
          />
          <textarea
            className='detailed-description-input'
            onChange={e => set_detailed_description(e.target.value)}
            placeholder='Enter a more detailed description'
            value={detailed_description}
          />
          <select
            className='category-input'
            onChange={e => set_category_id(e.target.value)}
            required
            value={category_id}
          >
            <option value='1'>Select a Category</option>
            <option value='1'>Gear</option>
            <option value='2'>Style</option>
            <option value='3'>Cars</option>
            <option value='4'>Tech</option>
            <option value='5'>Shelter</option>
            <option value='6'>Vices</option>
            <option value='7'>Body</option>
            <option value='8'>Etc</option>
          </select>
          <input
            className='price-input'
            onChange={e => setPrice(e.target.value)}
            placeholder='Enter a price'
            required
            type='number'
            value={price}
          />
          <input
            className='preview-img-input'
            onChange={e => set_preview_img_url(e.target.value)}
            placeholder='Enter a an image URL for your product'
            required
            type='url'
            value={preview_img_url}
          />
          <button
            className='products-form-submit'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
