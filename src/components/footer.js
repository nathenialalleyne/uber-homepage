import "../style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  const helpCenter = document.querySelector(".footer-sub");

  return (
    <footer className="footer-container">
      <div className="disclaimer-container">
        <a className="sell foot-link">
          Do not sell or share my personal information
        </a>
        <a className="google-disc foot-link">Google Data Policy</a>
      </div>
      <div className="footer-logo-sub">
        <div className="footer-logo">Uber</div>
        <div
          onMouseOver={(e) => {
            const helpCenter = e.target;
            const line = helpCenter.querySelector(".footer-line-anim");
            line.style.visibility = "visible";
            line.style.width = "100%";
          }}
          onMouseLeave={(e) => {
            const helpCenter = e.target;
            const line = helpCenter.querySelector(".footer-line-anim");
            line.style.width = "0";
          }}
          className="footer-sub"
        >
          View Help Center
          <div className="footer-line-anim"></div>
        </div>
      </div>
      <div className="footer-links">
        <div className="company-container">
          <div className="company-header foot-header">Company</div>
          <div className="company-links link-container">
            <div className="foot-link">About Us</div>
            <div className="foot-link">Our Offerings</div>
            <div className="foot-link">Newsroom</div>
            <div className="foot-link">Investors</div>
            <div className="foot-link">Blog</div>
            <div className="foot-link">Careers</div>
            <div className="foot-link">AI</div>
            <div className="foot-link">Gift Cards</div>
          </div>
        </div>

        <div className="product-container">
          <div className="product-header foot-header">Products</div>
          <div className="product-links link-container">
            <div className="foot-link">Ride</div>
            <div className="foot-link">Drive</div>
            <div className="foot-link">Deliver</div>
            <div className="foot-link">Eat</div>
            <div className="foot-link">Uber for Business</div>
            <div className="foot-link">Uber Freight</div>
          </div>
        </div>

        <div className="global-foot-container">
          <div className="global-foot-header foot-header">
            Global citizenship
          </div>
          <div className="global-foot-links link-container">
            <div className="foot-link">Saftey</div>
            <div className="foot-link">Diversity and Inclusion</div>
          </div>
        </div>

        <div className="travel-container">
          <div className="travel-header foot-header">Travel</div>
          <div className="travel-links link-container">
            <div className="foot-link">Airports</div>
            <div className="foot-link">Cities</div>
          </div>
        </div>
      </div>

      <div className="socials">
        <img
          className="social-icon"
          src={require("../assets/facebook.png")}
        ></img>
        <img
          src={require("../assets/twitter.png")}
          className="social-icon"
        ></img>
        <img
          src={require("../assets/youtube.png")}
          className="social-icon"
        ></img>
        <img
          src={require("../assets/linkedin.png")}
          className="social-icon"
        ></img>
        <img
          src={require("../assets/instagram.png")}
          className="social-icon"
        ></img>
      </div>
      <div className="download">
        <img
          className="playstore store"
          src={require("../assets/playstore.png")}
        ></img>
        <img
          className="appstore store"
          src={require("../assets/appstore.png")}
        ></img>
      </div>

      <div className="copyright">
        <div className="copyright-left">© 2022 Uber Technologies Inc.</div>
        <div className="copyright-right">
          <div className="privacy">Privacy</div>
          <div className="accessibility">Accessibility</div>
          <div className="terms">Terms</div>
        </div>
      </div>
    </footer>
  );
}
