import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import SupplyHeader from "./SupplyHeader/SupplyHeader";
import "./SupplyNavBar.css";
import { Modal } from "../../../context/Modal";
import LoginForm from "../../auth/LoginForm";
import SignUpForm from "../../auth/SignUpForm";
import LogoutButton from "../../auth/LogoutButton";

export default function SupplyNavBar() {
    const history = useHistory()
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const user = useSelector((state) => state.session.user);
    return (
        <div className="supply-nav-bar">
            <div className="topbar-wrapper">
                <div className="topbar">
                    <div className="topbar-left">
                        <NavLink to="/">
                            {" "}
                            <img
                                src="/images/reduncrate-white2.png"
                                className="reduncrate-logo-mini"
                                alt="header-logo"
                            ></img>
                        </NavLink>
                    </div>
                    <div className="topbar-middle">
                        <ul>
                            <li>UNCRATE.COM</li>
                            <li>UNCRATE.SUPPLY</li>
                            <li>UNCRATE.TV</li>
                        </ul>
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
                                onClick={() => history.push(`/profile`)}
                            >
                                PROFILE
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <SupplyHeader />
        </div>
    );
}
