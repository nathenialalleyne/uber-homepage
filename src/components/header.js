import "../style/header.css";

export function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-right">
          <a href=".." className="header-logo">
            Uber
          </a>
          <button className="header-options">Company</button>
          <button className="header-options">Safety</button>
          <button className="header-options">Help</button>
        </div>
        <div className="header-left">
          <button className="header-options">EN</button>
          <button className="header-options">Products</button>

          <div className="button-div">
            <button id="login">Log in</button>
            <button id="signup">Sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
}
