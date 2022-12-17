import React from "react";
import { NavLink } from "react-router-dom";
import "./LowerFooter.css";

export default function LowerFooter() {
  function shuffle(arr) {
    let curr = arr.length;
    let randomNum;

    while (curr > 0) {
      randomNum = Math.floor(Math.random() * curr);
      curr--;
      [arr[curr], arr[randomNum]] = [arr[randomNum], arr[curr]];
    }

    return arr;
  }

  const devs = [
    {
      name: "CHRIS COHEN",
      gitHub: "https://github.com/cmcohen89",
      linkedIn: "https://www.linkedin.com/in/christopher-cohen-94ab06236/",
    },
    {
      name: "SARA DUNLOP",
      gitHub: "https://github.com/Risclover",
      linkedIn: "https://www.linkedin.com/in/sara-dunlop-66375a146/",
    },
    {
      name: "MIKE MILLER",
      gitHub: "https://github.com/mikemillercodes",
      linkedIn: "https://www.linkedin.com/in/mike-miller-546a1832/",
    },
    {
      name: "GRAY NANCE",
      gitHub: "https://github.com/g-wn",
      linkedIn: "https://www.linkedin.com/in/gray-nance/",
    },
  ];

  shuffle(devs);
  return (
    <div className="lower-footer-container">
      <div className="lower-footer-link-list">
        <p className="lower-footer-link-list-title">reduncrate.com</p>
        <ul>
          <NavLink to={`/category/gear`}>
            <li>Gear</li>
          </NavLink>
          <span className="lower-footer-link-list-divider">
            &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
          </span>
          <NavLink to={`/category/style`}>
            <li>Style</li>
          </NavLink>
          <span className="lower-footer-link-list-divider">
            &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
          </span>
          <NavLink to={`/category/cars`}>
            <li>Cars</li>
          </NavLink>
          <span className="lower-footer-link-list-divider">
            &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
          </span>
          <NavLink to={`/category/shelter`}>
            <li>Shelter</li>
          </NavLink>
          <span className="lower-footer-link-list-divider">
            &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
          </span>
          <NavLink to={`/category/vices`}>
            <li>Vices</li>
          </NavLink>
          <span className="lower-footer-link-list-divider">
            &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
          </span>
          <NavLink to={`/category/etc`}>
            <li>Etc.</li>
          </NavLink>
        </ul>
      </div>
      <div className="lower-footer-link-list">
        <p className="lower-footer-link-list-title">Meet the team</p>
        <ul className="meet-team-ul">
          {devs.map((dev, i) =>
            i !== devs.length - 1 ? (
              <>
                <li>
                  {dev.name}{" "}
                  <div className="dev-links">
                    <a href={dev.gitHub} className="dev-link" target="_blank">
                      <i className="fa-brands fa-github"></i>
                    </a>{" "}
                    <a href={dev.linkedIn} className="dev-link" target="_blank">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </li>{" "}
                <span className="lower-footer-link-list-divider">
                  &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
                </span>
              </>
            ) : (
              <>
                <li>
                  {dev.name}{" "}
                  <div className="dev-links">
                    <a href={dev.gitHub} className="dev-link">
                      <i className="fa-brands fa-github"></i>
                    </a>{" "}
                    <a href={dev.linkedIn} className="dev-link">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </li>
              </>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
