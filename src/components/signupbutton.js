import "../style/signupbutton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function SignUpButtons() {
  return (
    <div className="sign-up-container">
      <div className="sign-up-size-container">
        <div
          onMouseOver={(e) => {
            // let arrow = e.target.querySelector(".sign-icon");
            // arrow.style.transform = "translateX(50px)";
          }}
          onMouseLeave={(e) => {
            // let arrow = e.target.querySelector(".sign-icon");
            // arrow.style.transform = "translateX(0)";
          }}
          className="sign-drive"
        >
          <div className="hide-l"></div>
          <div className="sign-text">Sign up to drive</div>
          <FontAwesomeIcon className="sign-icon-l" icon={faArrowRight} />
          <FontAwesomeIcon className="sign-icon-l" icon={faArrowRight} />
        </div>
        <div className="sign-ride">
          <div className="sign-text">Sign up to ride</div>
          <div className="hide"></div>
          <FontAwesomeIcon className="sign-icon-r" icon={faArrowRight} />
          <FontAwesomeIcon className="sign-icon-r" icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
}
