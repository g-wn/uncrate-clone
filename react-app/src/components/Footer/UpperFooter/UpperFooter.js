import React from "react";
import "./UpperFooter.css";

export default function UpperFooter() {
  return (
    <div className="upper-footer-container">
      <div className="footer-module-container">
        <div className="subscribe-module">
          <h1 className="subscribe-module-title">Get on the Black List.</h1>
          <p>
            Be the first to know about the newest gear, automobiles, and
            apparel.
          </p>
          <input type="text" placeholder="YOUR EMAIL" />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
      </div>
      <div className="footer-module-container">
        <div className="quote-module">
          <div className="quote-module-left">
            <h2>
              “If James Bond were to make an app for the stuff he wanted to buy,
              this would be the app.”
            </h2>
            <p>— DOUG STEPHENS, RETAIL FUTURIST</p>
          </div>
          <div className="quote-module-right">
            <div className="quote-module-right-left">
              <img src="https://uncrate.com/img/app-devices.png" alt="devices" />
            </div>
            <div className="quote-module-right-right">
              <img
                alt="app store"
                className="app-store-icon"
                src="https://uncrate.com/img/app-store.jpg"
              />
              <img src="https://uncrate.com/img/google-play.jpg" alt="google play" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
