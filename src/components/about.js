import "../style/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export function About() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="about-whole-container"
    >
      <div className="about-container">
        <FontAwesomeIcon className="about-icon" icon={faUserGroup} />
        <div className="about-header">About us</div>
        <div className="about-sub">
          Find out how we started, what drives us, and how we’re reimagining how
          the world moves.
        </div>
        <a className="about-link">Learn more about Uber</a>
      </div>

      <div className="newsroom-container">
        <FontAwesomeIcon className="news-icon" icon={faNewspaper} />
        <div className="news-header">Newsroom</div>
        <div className="news-sub">
          See announcements about our latest releases, initiatives, and
          partnerships.
        </div>
        <a className="news-link">Go to Newsroom</a>
      </div>
      <div className="global-container">
        <FontAwesomeIcon className="global-icon" icon={faHouse} />
        <div className="global-header">Global citizenship</div>
        <div className="global-sub">
          Read about our commitment to making a positive impact in the cities we
          serve.
        </div>
        <a className="global-link">See our partnerships</a>
      </div>
    </div>
  );
}
