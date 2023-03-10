import "../style/business.css";

export function Business() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      role="img"
      aria-label="New York City Skyline"
      className="business-part"
    >
      <div className="business-size-container">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="animation-container"
        >
          <div className="business-header">Uber for Business</div>
          <div className="business-sub">
            Transform the way your company moves and feeds its people.
          </div>
          <button className="business-button">See how</button>
        </div>
      </div>
    </div>
  );
}
