import "../style/saftey.css";

export function Saftey() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="saftey-container"
    >
      <div className="saftey-size-container">
        <div className="saftey-header">Focused on safety, wherever you go</div>
        <div className="saftey-city-container">
          <div className="saftey-right-container">
            <img
              className="saftey-img"
              src={require("../assets/driver-with-pass.jpg")}
            ></img>
            <div className="right-text-head">Our commitment to your safety</div>
            <div className="right-text-sub">
              With every safety feature and every standard in our Community
              Guidelines, we're committed to helping to create a safe
              environment for our users.
            </div>
            <div className="right-link-container">
              <a>Read about our Community Guidelines</a>
              <a>See all safety features</a>
            </div>
          </div>
          <div className="saftey-left-container">
            <img
              className="saftey-img"
              src={require("../assets/intersection.jpg")}
            ></img>
            <div className="left-text-head">
              Setting 10,000+ cities in motion
            </div>
            <div className="left-text-sub">
              The app is available in thousands of cities worldwide, so you can
              request a ride even when you’re far from home.
            </div>
            <div className="left-link">
              <a>View all cities</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
