import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../store/all_products';
import { putProductImage } from '../../store/one_product';

const ImageForm = ({ modalData, setShowModal, formType }) => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');
  console.log(modalData)

  const handleEdit = async e => {
    e.preventDefault();
    await dispatch(putProductImage(modalData, url));
    dispatch(getProducts());
    setShowModal(false);
  };

  const handleCreate = async e => {
    e.preventDefault();
    await dispatch()
    dispatch(getProducts())
    setShowModal(false)
  }

  return (
    <form
      className='image-form'
      onSubmit={formType === 'create' ? handleCreate : handleEdit}
    >
      {formType === 'create' ? (
        <header className='image-form-header'>Enter an image URL</header>
      ): (
      <header className='image-form-header'>Enter a new image URL</header>
      )}
      <div className='url-container'>
        <label htmlFor='url-input'>URL</label>
        <input
          className='url-input'
          onChange={e => setUrl(e.target.value)}
          name='url-input'
          placeholder='Enter a new image URL...'
          type='url'
          value={url}
        />
      </div>
      <button
        className='image-submit-btn'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
};

export default ImageForm;
