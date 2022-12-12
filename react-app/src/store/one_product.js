/* ------------------------- ACTIONS ------------------------- */

const LOAD_SINGLE_PRODUCT = 'products/LOAD_SINGLE';
const UPDATE_SINGLE_PRODUCT = 'products/UPDATE_SINGLE';
const DELETE_PRODUCT = '/products/delete';

export const loadSingleProduct = product => {
  return {
    type: LOAD_SINGLE_PRODUCT,
    product
  };
};

export const updateSingleProduct = updatedProduct => {
  return {
    type: UPDATE_SINGLE_PRODUCT,
    updatedProduct
  };
};

export const removeProduct = productId => {
  return {
    type: DELETE_PRODUCT,
    productId
  };
};

/* ------------------------- THUNKS -------------------------- */

export const getSingleProduct = productId => async dispatch => {
  const response = await fetch(`/api/products/${productId}`);

  if (response.ok) {
    const product = await response.json();
    dispatch(loadSingleProduct(product));
    return product;
  }
};

export const putSingleProduct = product => async dispatch => {
  const { title, description, detailed_description, category_id, price, preview_img_url } = product;
  const response = await fetch(`/api/products/${product.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, detailed_description, category_id, price, preview_img_url })
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(updateSingleProduct(data));
    return data;
  }
  return response;
};

export const deleteProductImage = productImageId => async dispatch => {
  console.log('console log here');
  const response = await fetch(`/api/products/images/${productImageId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const deletedMsg = await response.json();
    return deletedMsg;
  }
};

export const getProductById = id => state => state.products[id];

export const deleteProduct = productId => async dispatch => {
  const response = await fetch(`/api/products/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const deletedMsg = await response.json();
    dispatch(removeProduct(productId));
    return deletedMsg;
  }
};

/* ------------------------- REDUCER ------------------------- */

const initialState = {};

const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SINGLE_PRODUCT:
      return {
        ...state,
        [action.product.id]: { ...action.product }
      };
    case UPDATE_SINGLE_PRODUCT:
      return {
        ...state,
        [action.updatedProduct.id]: { ...action.updatedProduct }
      };
    case DELETE_PRODUCT:
      const newState = { ...state };
      delete newState[action.productId];
      return newState;
    default:
      return state;
  }
};

export default singleProductReducer;
