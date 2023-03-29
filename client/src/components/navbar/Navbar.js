import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking App</span>
        </Link>
        {/* {user ? (
          user.username
        ) : ( */}
        <div className="navItems">
          <Button variant="outline-warning" className="navButton">
            Register
          </Button>
          <Button variant="outline-light" className="navButton">
            Login
          </Button>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
