import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Website logo" />
      </Link>
      <nav>
        <Link to="/">Home</Link> |<Link to="/add">Add Listing</Link>
      </nav>
    </header>
  );
}

export default Header;