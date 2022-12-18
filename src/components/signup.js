import "../style/signup.css";
import { useState } from "react";

export function SignUp() {
  const [mainText, setMainText] = useState(
    "Get in the driver's seat and get paid"
  );
  const [subText, setSubText] = useState(
    "Drive on the platform with the largest network of active riders."
  );
  const [mainButton, setMainButton] = useState("Sign up to drive");

  const change = (e) => {
    console.log(e);
  };

  return (
    <div className="signup-container">
      <div className="main-part">
        <div className="main-top">
          <button
            onClick={(e) => {
              change(e.target);
            }}
            className="main-option selected"
          >
            Drive or deliver
          </button>
          <button
            onClick={(e) => {
              change(e.target);
            }}
            className="main-option"
          >
            Eat
          </button>
          <button
            onClick={(e) => {
              change(e.target);
            }}
            className="main-option"
          >
            Ride
          </button>
        </div>
        <div className="interactive-container">
          <div className="main-content">{mainText}</div>
          <div className="sub-content">{subText}</div>
          <button className="main-button">{mainButton}</button>
        </div>
      </div>
    </div>
  );
}
