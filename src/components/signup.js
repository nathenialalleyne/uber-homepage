import "../style/signup.css";
import { useState } from "react";

export function SignUp() {
  const [mainText, setMainText] = useState(
    "Get in the driver's seat and get paid"
  );
  const [subText, setSubText] = useState(
    "Drive on the platform with the largest network of active riders."
  );

  const [learnText, setLearnText] = useState(
    "Learn more about driving and delivering"
  );
  const [mainButton, setMainButton] = useState("Sign up to drive");

  const change = (e) => {
    const slider = document.getElementById("slider");
    const current = document.getElementsByClassName("selected")[0];
    const background = document.getElementsByClassName("responsive-img")[0];
    const bottom = document.getElementsByClassName("bottom-container")[0];
    const sub = document.getElementsByClassName("sub-content")[0];
    const learn = document.getElementsByClassName("learn")[0];
    const inputContainer =
      document.getElementsByClassName("input-container")[0];

    const button = document.getElementsByClassName("schedule")[0];

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
      button.style.position = "absolute";
      button.style.visibility = "hidden";
      setMainText("Get in the driver's seat and get paid");
      setSubText(
        "Drive on the platform with the largest network of active riders."
      );
      setMainButton("Sign up to drive");
      setLearnText("Learn more about driving and delivering");
      bottom.style.flexDirection = "column";
      bottom.style.alignItems = "flex-start";
      bottom.style.gap = "0";

      sub.style.position = "static";
      sub.style.visibility = "visible";

      learn.style.visibility = "visible";
      learn.style.position = "static";

      inputContainer.style.position = "absolute";
      inputContainer.style.visibility = "hidden";

      background.src = require("../assets/driving-background.jpg");
    }

    if (e.innerText === "Eat") {
      if (window.innerWidth <= 1150) {
        if (current.innerText === "Drive or deliver") {
          slider.style.transform = "translateX(100px)";
          current.classList = "main-option";
          e.classList.add("selected");
        }
        if (current.innerText === "Ride") {
          slider.style.transform = "translateX(100px)";
          current.classList = "main-option";
          e.classList.add("selected");
        }
        setMainText("Discover delicious eats");
        setSubText("Order delivery from restaurants you love.");
        setLearnText("Own a restaurant? Partner with Uber Eats");
        setMainButton("Order now");

        sub.style.position = "static";
        sub.style.visibility = "visible";

        inputContainer.style.position = "absolute";
        inputContainer.style.visibility = "hidden";

        button.style.position = "absolute";
        button.style.visibility = "hidden";

        learn.style.visibility = "visible";
        learn.style.position = "static";

        bottom.style.flexDirection = "row";
        bottom.style.alignItems = "center";
        bottom.style.gap = "32px";
        background.src = require("../assets/food-delivery.jpg");
      } else {
        if (current.innerText === "Drive or deliver") {
          slider.style.transform = "translateX(200px)";
          current.classList = "main-option";
          e.classList.add("selected");
        }
        if (current.innerText === "Ride") {
          slider.style.transform = "translateX(200px)";
          current.classList = "main-option";
          e.classList.add("selected");
        }
        setMainText("Discover delicious eats");
        setSubText("Order delivery from restaurants you love.");
        setLearnText("Own a restaurant? Partner with Uber Eats");
        setMainButton("Order now");

        sub.style.position = "static";
        sub.style.visibility = "visible";

        inputContainer.style.position = "absolute";
        inputContainer.style.visibility = "hidden";

        button.style.position = "absolute";
        button.style.visibility = "hidden";

        learn.style.visibility = "visible";
        learn.style.position = "static";

        bottom.style.flexDirection = "row";
        bottom.style.alignItems = "center";
        bottom.style.gap = "32px";
        background.src = require("../assets/food-delivery.jpg");
      }
    }

    if (e.innerText === "Ride") {
      if (window.innerWidth <= 1150) {
        if (current.innerText === "Drive or deliver") {
          slider.style.transform = "translateX(205px)";
          current.classList = "main-option";
          e.classList.add("selected");
        }
        if (current.innerText === "Eat") {
          slider.style.transform = "translateX(205px)";
          current.classList = "main-option";
          e.classList.add("selected");
        }
        setMainText("Request a ride now");
        sub.style.position = "absolute";
        sub.style.visibility = "hidden";

        inputContainer.style.position = "static";
        inputContainer.style.visibility = "visible";

        button.style.position = "static";
        button.style.visibility = "visible";

        learn.style.visibility = "hidden";
        learn.style.position = "absolute";

        background.src = require("../assets/car-ride.jpg");
      } else {
        if (current.innerText === "Drive or deliver") {
          slider.style.transform = "translateX(400px)";
          current.classList = "main-option";
          e.classList.add("selected");
        }
        if (current.innerText === "Eat") {
          slider.style.transform = "translateX(400px)";
          current.classList = "main-option";
          e.classList.add("selected");
        }
        setMainText("Request a ride now");
        setMainButton("Request now");
        sub.style.position = "absolute";
        sub.style.visibility = "hidden";

        inputContainer.style.position = "static";
        inputContainer.style.visibility = "visible";

        button.style.position = "static";
        button.style.visibility = "visible";

        learn.style.visibility = "hidden";
        learn.style.position = "absolute";

        background.src = require("../assets/car-ride.jpg");
      }
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="signup-container"
    >
      <div className="main-container">
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

            <div className="input-container">
              <div className="shape-container">
                <div className="circle">
                  <div className="line"></div>
                </div>
                <input
                  className="request-input"
                  placeholder="Enter pickup location"
                ></input>
              </div>
              <div className="shape-container">
                <div className="square"></div>
                <input
                  className="request-input"
                  placeholder="Enter destination"
                ></input>
              </div>
            </div>

            <div className="bottom-container">
              <div className="bottom-button-container">
                <button className="main-button">{mainButton}</button>
                <button className="schedule">Schedule for Later</button>
              </div>
              <a className="learn">{learnText}</a>
            </div>
          </div>
        </div>
      </div>
      <img
        className="responsive-img"
        src={require("../assets/driving-background.jpg")}
      ></img>
    </div>
  );
}
