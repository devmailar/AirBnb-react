import nav_logo from "./img/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={nav_logo} alt="airbnb-logo" className="nav-logo" />
    </nav>
  );
}
