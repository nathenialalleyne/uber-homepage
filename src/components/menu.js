import "../style/menu.css";
import "../selectiveReset.css";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faGlobe } from "@fortawesome/free-solid-svg-icons";

export function Menu(props) {
  let setVisible = props.vis;
  let setDisplay = props.dis;
  let show = false;
  let optionDrop = useRef(null);
  let styles = { transform: "translateY(0)" };

  return (
    <div className="menu-container" style={styles}>
      <div className="option-container">
        <button
          onClick={() => {
            if (show == false) {
              show = true;
              optionDrop.current.style.visibility = "visible";
              optionDrop.current.style.position = "static";
            } else {
              show = false;
              optionDrop.current.style.visibility = "hidden";
              optionDrop.current.style.position = "absolute";
            }
          }}
          className=" head company-option"
        >
          Company ▼
        </button>

        <ul ref={optionDrop} className="company-options">
          <li className="option-selector">About us</li>
          <li className="option-selector">Our offerings</li>
          <li className="option-selector">How Uber works</li>
          <li className="option-selector">Global citizenship</li>
          <li className="option-selector">Newsroom</li>
          <li className="option-selector">Investor relations</li>
          <li className="option-selector">Blog</li>
          <li className="option-selector">Careers</li>
        </ul>

        <a className="head saftey-option">Saftey</a>
        <a className="head help-option">Help</a>
      </div>
      <button className="menu-product-button">
        <FontAwesomeIcon icon={faGrip} />
        <div className="product-menu-text">Products</div>
      </button>

      <button onClick={() => {}} className="en-button-menu">
        <FontAwesomeIcon icon={faGlobe} />
        <div className="en-text-menu">EN</div>
      </button>
    </div>
  );
}
