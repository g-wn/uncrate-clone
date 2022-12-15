import React from "react";
import "./Footer.css";
import UpperFooter from "./UpperFooter/UpperFooter";
import LowerFooter from "./LowerFooter/LowerFooter";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <UpperFooter />
        <LowerFooter />
      </div>
    </div>
  );
}
