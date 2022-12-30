import "../style/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./menu";
import { useRef, useState } from "react";

let check = false;
export function Header(prop) {
  let setVisible = prop.vis;
  let visible = prop.dis;
  let menu = useRef(null);
  let setClickClose = prop.cc;

  const display = () => {
    if (visible == false) {
      setVisible(true);
      menu.current.querySelector(".r").style.transform = "rotate(45deg)";
      menu.current.querySelector(".r").style.position = "absolute";

      menu.current.querySelector(".l").style.transform = "rotate(-45deg)";
      document.body.style.overflowY = "hidden";
      document.body.style.overflowX = "hidden";
    } else if (visible == true) {
      setTimeout(() => {});
      setVisible(false);
      menu.current.querySelector(".r").style.transform = "rotate(0)";
      menu.current.querySelector(".r").style.position = "static";

      menu.current.querySelector(".l").style.transform = "rotate(0)";
      document.body.style.overflowY = "visible";
      document.body.style.overflowX = "visible";
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
          <button onClick={display} ref={menu} className="menu-button">
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
