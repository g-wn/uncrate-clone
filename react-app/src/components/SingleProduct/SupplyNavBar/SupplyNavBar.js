import React from "react";
import { NavLink } from "react-router-dom";
import SupplyHeader from "./SupplyHeader/SupplyHeader";
import "./SupplyNavBar.css";

export default function SupplyNavBar() {
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
          <div className="topbar-right">FOLLOW @ UNCRATE</div>
        </div>
      </div>
      <SupplyHeader />
    </div>
  );
}
