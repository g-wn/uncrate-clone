const LOAD_SINGLE_PRODUCT = 'products/LOAD_SINGLE';

export const loadSingleProduct = (product) => {
    return {
        type: LOAD_SINGLE_PRODUCT,
        product
    }
}

export const getSingleProduct = (productId) => async dispatch => {
    const response = await fetch(`/api/products/${productId}`);

    if (response.ok) {
        const product = await response.json();
        dispatch(loadSingleProduct(product));
        return product;
    }
}

export const getProductById = (id) => (state) => state.products[id];

const initialState = {};

const singleProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SINGLE_PRODUCT:
            return {
                ...state,
                [action.product.id]: { ...action.product }
            };
        default:
            return state;
    }
}

export default singleProductReducer;
