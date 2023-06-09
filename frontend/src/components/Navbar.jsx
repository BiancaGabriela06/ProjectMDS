import React, { useState } from "react";
import logo from "../images/icon.jpeg";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  var auth = localStorage.getItem("currentUser");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/home");
  };

  return auth ? (
    <nav className="nav">
      <Link to="/welcome" className="site-title">
        {" "}
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <div className="options">
        <ul>
          <CustomLink to="/quizList">Interview Questions</CustomLink>
          <CustomLink to="/tipstricks">Tips and Tricks</CustomLink>
          <CustomLink to="/forum">Forum </CustomLink>
        </ul>
      </div>

      <div className="connect">
        <ul>
          <CustomLink to="/profile">Profile</CustomLink>
        </ul>
        <ul>
          <button onClick={logout} className="btn">
            Logout{" "}
          </button>
        </ul>
      </div>
    </nav>
  ) : (
    <div>
      <nav className="nav">
        <Link to="/home" className="site-title">
          {" "}
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </nav>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Navbar;
