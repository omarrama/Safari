import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} className="logo-icon" alt="website icon" />
        <div className="logo-name">
          <b>DUBAI</b>
          <b>DESERT</b>
          <b>SAFARI</b>
        </div>
      </div>
      <nav
        className="navbar"
        style={{
          clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <ul className="navbar-links">
          <li className="navbar-link" onClick={() => setToggle(!toggle)}>
            <Link to="/">
              <i className="bi bi-house-fill"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="navbar-link" onClick={() => setToggle(!toggle)}>
            <Link to="/about">
              <i className="bi bi-bank2"></i>
              <span>About</span>
            </Link>
          </li>
          <li className="navbar-link" onClick={() => setToggle(!toggle)}>
            <Link to="/login">
              <i className="bi bi-arrow-right-square-fill"></i>
              <span>Login</span>
            </Link>
          </li>
          <li className="navbar-link" onClick={() => setToggle(!toggle)}>
            <Link to="/register">
              <i className="bi bi-person-plus-fill"></i>
              <span>Register</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div onClick={() => setToggle(!toggle)} className="nav-menu">
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
    </header>
  );
};

export default Header;
