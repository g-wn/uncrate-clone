import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import UserProductsImages from "./components/UserProductsImages/UserProductsImages";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Search from "./components/Search/Search";
import CategoryPage from "./components/CategoryPages/CategoryPage";
import { authenticate } from "./store/session";
import ProductIndex from "./components/ProductIndex/ProductIndex";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./components/Cart/Cart";
import ProductUpdateForm from "./components/ProductForm/UpdateProduct";
import ProductCreateForm from "./components/ProductForm/CreateProduct";
import UserProfile from "./components/UserProfile/UserProfile";
import Favorites from "./components/Favorites/Favorites"

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
                    path='/profile'
                    exact={true}
                >
                    <UserProfile />
                </ProtectedRoute>
                <ProtectedRoute path='/:id/images/add-edit'>
                    <UserProductsImages />
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
                    path='/search'
                    exact={true}
                >
                    <Search />
                </Route>
                <Route
                    path='/cart'
                    exact={true}
                >
                    <Cart />
                </Route>
                <Route
                    path='/category/gear'
                    exact={true}
                >
                    <CategoryPage categoryName='gear' />
                </Route>
                <Route
                    path='/category/style'
                    exact={true}
                >
                    <CategoryPage categoryName='style' />
                </Route>
                <Route
                    path='/category/cars'
                    exact={true}
                >
                    <CategoryPage categoryName='cars' />
                </Route>
                <Route
                    path='/category/vices'
                    exact={true}
                >
                    <CategoryPage categoryName='vices' />
                </Route>
                <Route
                    path='/category/shelter'
                    exact={true}
                >
                    <CategoryPage categoryName='shelter' />
                </Route>
                <Route
                    path='/category/body'
                    exact={true}
                >
                    <CategoryPage categoryName='body' />
                </Route>
                <Route
                    path='/category/etc'
                    exact={true}
                >
                    <CategoryPage categoryName='etc' />
                </Route>
                <Route
                    path='/category/tech'
                    exact={true}
                >
                    <CategoryPage categoryName='tech' />
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
                <ProtectedRoute
                    path='/favorites/:userId'
                    exact={true}
                >
                    <Favorites />
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
