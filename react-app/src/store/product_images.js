const LOAD_PRODUCT_IMAGES = "product_images/LOAD";

export const loadProductImages = (product_images) => {
  return {
    type: LOAD_PRODUCT_IMAGES,
    product_images,
  };
};

export const getProductImages = () => async (dispatch) => {
  const response = await fetch("/api/products/product_images");

  if (response.ok) {
    const product_images = await response.json();
    dispatch(loadProductImages(product_images));
    return product_images;
  }
};

export const getAllProductImages = (state) =>
  Object.values(state.product_images);

const initialState = {};

const productImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT_IMAGES:
      return action.product_images.Product_Images.reduce(
        (product_images, product_image) => {
          product_images[product_image.id] = product_image;
          return product_images;
        },
        {}
      );
    default:
      return state;
  }
};

export default productImagesReducer;
