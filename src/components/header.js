import "../style/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./menu";
import { useState } from "react";

let check = false;
export function Header(prop) {
  let setVisible = prop.vis;
  let visible = prop.dis;

  const display = () => {
    if (visible == false) {
      setVisible(true);
    } else if (visible == true) {
      setVisible(false);
    }
  };
  return (
    <header>
      <div className="header-container">
        <div className="header-right">
          <a href=".." className="header-logo">
            Uber
          </a>
          <button className="header-options">Company</button>
          <button className="header-options">Safety</button>
          <button className="header-options">Help</button>
        </div>
        <div className="header-left">
          <button onClick={() => {}} className="en-button header-options">
            <FontAwesomeIcon icon={faGlobe} />
            <div className="en-text">EN</div>
          </button>
          <button className="header-options">Products</button>

          <div className="button-div">
            <button id="login">Log in</button>
            <button id="signup">Sign up</button>
          </div>
          <button onClick={display} className="menu-button">
            <div className="menu-button-container">
              <div className="menu-button-dash r"></div>
              <div className="menu-button-dash l"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
