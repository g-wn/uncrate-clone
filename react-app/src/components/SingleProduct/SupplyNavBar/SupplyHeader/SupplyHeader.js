import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SupplyHeader.css";
import { Modal } from "../../../../context/Modal";
import Cart from "../../../Cart/Cart";

export default function SupplyHeader() {
    const [showCartModal, setShowCartModal] = useState(false);

    return (
        <div className="supply-header">
            <div className="supply-header-title">
                <h1>
                    REDUNCRATE SUPPLY<sup>™</sup>
                </h1>
                <p>
                    OBJECTS OF DESIRE & TOOLS OF THE TRADE, STOCKED & SHIPPED BY
                    REDUNCRATE.
                </p>
                <div className="header-icons">
                    <NavLink to='/search'><i className="fa-solid fa-magnifying-glass"></i></NavLink>
                    <button className="supply-header-crate-button" onClick={() => setShowCartModal(true)}>
                        <i className="fa-solid fa-box crate-icon"></i>
                    </button>
                    {showCartModal && (
                        <Modal onClose={() => setShowCartModal(false)}>
                            <Cart setShowCartModal={setShowCartModal} />
                        </Modal>
                    )}
                    <span className="cart-badge"></span>
                </div>
            </div>
            <div className="supply-header-categories">
                <div className="categorybar-top">
                    <ul>
                        <li>NEW ITEMS &nbsp;&nbsp;</li>/
                        <li>&nbsp;&nbsp; TOP PICKS &nbsp;&nbsp;</li>/
                        <li>&nbsp;&nbsp; BACK IN STOCK &nbsp;&nbsp;</li>/
                        <li>&nbsp;&nbsp; BRANDS &nbsp;&nbsp;</li>/
                        <li className="nav-surplus">&nbsp;&nbsp; SURPLUS</li>
                    </ul>
                </div>
                <div className="categorybar-bottom">
                    <ul>
                        <li>APPAREL &nbsp;&nbsp;/</li>
                        <li>&nbsp;&nbsp; HOME &nbsp;&nbsp;</li>/
                        <li>&nbsp;&nbsp; ART &nbsp;&nbsp;/</li>
                        <li>&nbsp;&nbsp; BOOKS &nbsp;&nbsp;/</li>
                        <li>&nbsp;&nbsp; BAGS &nbsp;&nbsp;/</li>
                        <li>&nbsp;&nbsp; GROOMING &nbsp;&nbsp;/</li>
                        <li>&nbsp;&nbsp; WATCHES &nbsp;&nbsp;/</li>
                        <li>&nbsp;&nbsp; GEAR &nbsp;&nbsp;/</li>
                        <li>&nbsp;&nbsp; TECH &nbsp;&nbsp;/</li>
                        <li>&nbsp;&nbsp; TOYS &nbsp;&nbsp;/</li>
                        <li>&nbsp;&nbsp; SPORT &nbsp;&nbsp;/</li>
                        <li>&nbsp;&nbsp; VINTAGE &nbsp;&nbsp;/</li>
                        <li>&nbsp;&nbsp; VEHICLES</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
