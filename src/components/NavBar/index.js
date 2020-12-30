import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const loginState = useSelector((store) => store.loggined);
  const onLogoutEvent = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <Link to="/" className="navbar-brand pointer">
          React Blog
        </Link>

        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link pointer">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link pointer">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pointer">Posts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pointer">Contact</a>
            </li>
            <li className="nav-item">
              {!loginState ? (
                <Link to="/login" className="nav-link pointer">
                  Login
                </Link>
              ) : (
                <a className="nav-link pointer" onClick={onLogoutEvent}>
                  Logout
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
