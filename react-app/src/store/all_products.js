/* ------------------------- ACTIONS ------------------------- */

const LOAD_PRODUCTS = "products/LOAD";
const CREATE_PRODUCT = "products/NEW";
const DELETE_PRODUCT = "products/DELETE";

export const loadProducts = (products) => {
  return {
    type: LOAD_PRODUCTS,
    products,
  };
};

export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product,
  };
};

export const removeProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    productId,
  };
};

/* ------------------------- THUNKS -------------------------- */

export const getProducts = () => async (dispatch) => {
  const response = await fetch("/api/products");

  if (response.ok) {
    const products = await response.json();
    dispatch(loadProducts(products));
    return products;
  }
};

export const postProduct = (payload) => async (dispatch) => {
  const {
    title,
    description,
    detailed_description,
    category_id,
    price,
    preview_img_url,
  } = payload;

  const response = await fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      description,
      detailed_description,
      category_id,
      price,
      preview_img_url,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(createProduct(data));
    return data;
  }
  return response;
};

export const deleteProduct = (productId) => async (dispatch) => {
  console.log("product id -->", productId);
  const response = await fetch(`/api/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const deletedMsg = await response.json();
    dispatch(removeProduct(productId));
    return deletedMsg;
  }
};

/* ------------------------- GETTERS ------------------------- */

export const getAllProducts = (state) => Object.values(state.products);

/* ------------------------- REDUCER ------------------------- */

const initialState = {};

const allProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return action.products.Products.reduce((products, product) => {
                products[product.id] = product;
                return products;
            }, {});
        case CREATE_PRODUCT:
            return { ...state, [action.product.id]: action.product };
        default:
            return state;
        case DELETE_PRODUCT:
            const newState = { ...state };
            delete newState[action.productId];
            return newState;
    };
};

export default allProductsReducer;
