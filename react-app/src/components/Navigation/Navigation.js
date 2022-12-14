import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Navigation.css";
import { Modal } from "../../context/Modal";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { getCart } from "../../store/cart";

function Navigation() {
    const dispatch = useDispatch()
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);
    const user = useSelector((state) => state.session.user);
    const cart = useSelector((state) => state.cart);
    const history = useHistory();
    let cartItemsNum;
    if (cart.cartItems) cartItemsNum = Object.keys(cart.cartItems).length
    if (cart.cartItems) console.log(cartItemsNum)

    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    return (
        <>
            <header className="splash-page-header">
                <div className="splash-page-top-bar-container">
                    <div className="header-top-bar">
                        <div>
                            <span>FOLLOW @ REDUNCRATE</span>
                        </div>
                        <div className="header-top-bar-center">
                            <a href="#hi">REDUNCRATE.COM</a>
                            <a href="#hi">REDUNCRATE.SUPPLY</a>
                            <a href="#hi">REDUNCRATE.TV</a>
                        </div>
                        {!user ? (
                            <div>
                                <button
                                    className="login-button"
                                    onClick={() => setShowLoginModal(true)}
                                >
                                    LOG IN
                                </button>{" "}
                                |{" "}
                                <button
                                    className="login-button"
                                    onClick={() => setShowSignupModal(true)}
                                >
                                    SIGN UP
                                </button>
                                {showLoginModal && (
                                    <Modal onClose={() => setShowLoginModal(false)}>
                                        <LoginForm setShowLoginModal={setShowLoginModal} />
                                    </Modal>
                                )}
                                {showSignupModal && (
                                    <Modal onClose={() => setShowSignupModal(false)}>
                                        <SignUpForm />
                                    </Modal>
                                )}
                            </div>
                        ) : (
                            <div>
                                <LogoutButton setShowLoginModal={setShowLoginModal} /> |{" "}
                                <button
                                    className="profile-button"
                                    onClick={() => history.push(`/${user.id}/profile`)}
                                >
                                    PROFILE
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="header-bottom-bar">
                    <div></div>
                    <div className="header-logo">
                        <NavLink to="/">
                            <img
                                src="/images/reduncrate-white2.png"
                                className="reduncrate-logo"
                                alt="header-logo"
                            ></img>
                        </NavLink>
                    </div>
                    <div className="splash-header-icons">
                        <i className="fa-solid fa-magnifying-glass header-magnifying-glass"></i>
                        {user ? (
                            <button className="nav-bar-crate-button" onClick={() => setShowCartModal(true)}>
                                <i className="fa-sharp fa-solid fa-box"></i>
                            </button>
                        ) : (
                            <NavLink
                                className="nav-bar-crate"
                                to=""
                                onClick={() => setShowLoginModal(true)}
                            >
                                <i className="fa-sharp fa-solid fa-box"></i>
                            </NavLink>
                        )}
                        {showCartModal && (
                            <Modal onClose={() => setShowCartModal(false)}>
                                <Cart setShowCartModal={setShowCartModal} />
                            </Modal>
                        )}
                    </div>
                </div>
            </header>
            <nav className="nav">
                <div className="nav-bar-categories">
                    <a href="#hi">GEAR</a>
                    <a href="#hi">STYLE</a>
                    <a href="#hi">CARS</a>
                    <a href="#hi">TECH</a>
                    <a href="#hi">SHELTER</a>
                    <a href="#hi">VICES</a>
                    <a href="#hi">BODY</a>
                    <a href="#hi">ETC</a>
                </div>
                <div className="nav-bar-categories-border" />
                <div className="nav-bar-subcategories-border" />
                <div className="nav-bar-subcategories">
                    <a href="#hi">SHOP</a>
                    <a href="#hi">MAGAZINE</a>
                    <a href="#hi">IPHONE APP</a>
                    <a href="#hi">ANDROID APP</a>
                    <a href="#hi">MOST WANTED</a>
                    <a href="#hi">BLACK LIST</a>
                    <a href="#hi">STASH</a>
                </div>
                <div className="nav-bar-subcategories-border" />
            </nav>
        </>
    );
}

export default Navigation;
