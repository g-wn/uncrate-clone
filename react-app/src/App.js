import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ImageForm from './components/ImageForm/ImageForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import ProductIndex from './components/ProductIndex/ProductIndex';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';
import ProductUpdateForm from './components/ProductForm/UpdateProduct';
import ProductCreateForm from './components/ProductForm/CreateProduct';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path='/'
                >
                    <ProductIndex />
                </Route>
                <ProtectedRoute path='/products/new'>
                    <ProductCreateForm />
                </ProtectedRoute>
                <ProtectedRoute path='/products/:id/update'>
                    <ProductUpdateForm />
                </ProtectedRoute>
                <Route path='/products/:id'>
                    <SingleProduct />
                </Route>
                <ProtectedRoute
                    path='/:userId/profile'
                    exact={true}
                >
                    <UserProfile />
                </ProtectedRoute>
                <ProtectedRoute path='/:id/images/add-edit'>
                    <ImageForm />
                </ProtectedRoute>
                <Route
                    path='/login'
                    exact={true}
                >
                    <LoginForm />
                </Route>
                <Route
                    path='/sign-up'
                    exact={true}
                >
                    <SignUpForm />
                </Route>
                <Route
                    path='/cart'
                    exact={true}
                >
                    <Cart />
                </Route>
                <ProtectedRoute
                    path='/users'
                    exact={true}
                >
                    <UsersList />
                </ProtectedRoute>
                <ProtectedRoute
                    path='/users/:userId'
                    exact={true}
                >
                    <User />
                </ProtectedRoute>
                <Route
                    path='/'
                    exact={true}
                >
                    <h1>My Home Page</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
