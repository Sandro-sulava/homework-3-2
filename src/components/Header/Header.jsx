import "./Header.css";
import Navigation from "./Navigation/Navigation.jsx";

function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <h1 className="header-startup">Startup 3</h1>
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
