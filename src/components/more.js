import "../style/more.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function MoreToLove() {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="app-container">
      <div className="app-header">There’s more to love in the apps</div>
      <div className="app-card-container">
        <div className="app">
          <img src={require("../assets/uber-arrow.jpg")}></img>
          <div className="arrow-text">
            <div className="app-text">Download the Driver app</div>
            <FontAwesomeIcon className="app-arrow" icon={faArrowRight} />
          </div>
        </div>
        <div className="app">
          <img src={require("../assets/uber-logo.jpg")}></img>
          <div className="arrow-text">
            <div className="app-text">Download the Uber app</div>
            <FontAwesomeIcon className="app-arrow" icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
