const LOAD_PRODUCTS = 'products/LOAD';

export const loadProducts = (products) => {
    return {
        type: LOAD_PRODUCTS,
        products
    };
};

export const getProducts = () => async dispatch => {
    const response = await fetch('/api/products');

    if (response.ok) {
        const products = await response.json();
        dispatch(loadProducts(products));
        return products;
    };
};

export const getAllProducts = (state) => Object.values(state.products);

const initialState = {};

const allProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return action.products.Products.reduce((products, product) => {
                products[product.id] = product;
                return products;
            }, {});
        default:
            return state;
    };
};

export default allProductsReducer;
