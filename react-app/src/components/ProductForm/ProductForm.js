import './ProductForm.css';

const ProductForm = ({
  createForm,
  handleSubmit,
  title,
  setTitle,
  description,
  setDescription,
  detailed_description,
  set_detailed_description,
  category_id,
  set_category_id,
  price,
  setPrice,
  preview_img_url,
  set_preview_img_url,
  errors,
  setErrors
}) => {
  return (
    <>
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
            {createForm && (
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
            )}
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
