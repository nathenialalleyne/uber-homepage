import "../style/uberone.css";

export function UberOne() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="uber-one-container"
    >
      <div className="uber-one-size-container">
        <div className="uber-one-text-container">
          <div className="uber-one-header">
            Save on Uber and Uber Eats with Uber One membership
          </div>
          <div className="uber-one-sub-one">
            With $0 Delivery Fee and 5% off eligible rides and eats orders,
            members save an average of $25 per month.*
          </div>
          <div className="uber-one-sub-two">
            *Terms apply. Average savings are based on members in your country
            and do not include subscription price.
          </div>
          <button className="uber-one-button">Sign up to save</button>
        </div>
        <img
          src={require("../assets/uber-one.jpg")}
          alt="Food on table with Uber One logo"
        ></img>
      </div>
    </div>
  );
}
