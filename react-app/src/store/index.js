import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import allProductsReducer from './all_products';
import singleProductReducer from './one_product';
import cartReducer from './cart';
import cartItemsReducer from './cart_items';

const rootReducer = combineReducers({
    session,
    products: allProductsReducer,
    product: singleProductReducer,
    cart: cartReducer,
    cartItems: cartItemsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
