import "../style/signup.css";
import Drive from "../assets/driving-background.jpg";
import Eat from "../assets/food-delivery.jpg";
import Ride from "../assets/car-ride.jpg";
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
    const slider = document.getElementById("slider");
    const current = document.getElementsByClassName("selected")[0];
    const background = document.getElementsByClassName("signup-container")[0];

    if (e.parentNode.getAttribute("class") == "reactive-container") {
      e = e.parentNode.querySelector("button");
    } else {
      if (e.parentNode.getAttribute("class") != "reactive-container") {
        e = e.querySelector("button");
      }
    }

    if (e.innerText === "Drive or deliver") {
      if (current.innerText === "Eat") {
        slider.style.transform = "translateX(0px)";
        current.classList = "main-option";
        e.classList.add("selected");
      }
      if (current.innerText === "Ride") {
        slider.style.transform = "translateX(0px)";
        current.classList = "main-option";
        e.classList.add("selected");
      }
      setMainText("Get in the driver's seat and get paid");
      background.style.backgroundImage =
        background.style.backgroundImage = `url(${Drive})`;
    }

    if (e.innerText === "Eat") {
      if (current.innerText === "Drive or deliver") {
        slider.style.transform = "translateX(142px)";
        current.classList = "main-option";
        e.classList.add("selected");
      }
      if (current.innerText === "Ride") {
        slider.style.transform = "translateX(142px)";
        current.classList = "main-option";
        e.classList.add("selected");
      }
      setMainText("Discover delicious eats");
      background.style.backgroundImage = `url(${Eat})`;
    }

    if (e.innerText === "Ride") {
      if (current.innerText === "Drive or deliver") {
        slider.style.transform = "translateX(286px)";
        current.classList = "main-option";
        e.classList.add("selected");
      }
      if (current.innerText === "Eat") {
        slider.style.transform = "translateX(286px)";
        current.classList = "main-option";
        e.classList.add("selected");
      }
      setMainText("Request a ride now");
      background.style.backgroundImage = `url(${Ride})`;
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="signup-container"
    >
      <div className="main-part">
        <div className="main-top">
          <div
            onClick={(e) => {
              change(e.target);
            }}
            className="reactive-container"
          >
            <img id="icon" src={require("../assets/bar-graph.png")}></img>
            <button className="main-option selected">Drive or deliver</button>
            <div id="slider"></div>
          </div>

          <div
            onClick={(e) => {
              change(e.target);
            }}
            className="reactive-container"
          >
            <img id="icon" src={require("../assets/cutlery.png")}></img>
            <button className="main-option">Eat</button>
          </div>

          <div
            onClick={(e) => {
              change(e.target);
            }}
            className="reactive-container"
          >
            <img id="icon" src={require("../assets/car.png")}></img>
            <button className="main-option">Ride</button>
          </div>
        </div>
        <div className="interactive-container">
          <div className="main-content">{mainText}</div>
          <div className="sub-content">{subText}</div>
          <div className="bottom-container">
            <button className="main-button">{mainButton}</button>
            <a className="learn">Learn more about driving and delivering</a>
          </div>
        </div>
      </div>
    </div>
  );
}
