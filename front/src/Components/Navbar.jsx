/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { isLogged } from "../features/logged/loggedSlice";

const Navbar = ({ isAdmin }) => {
  const location = useLocation();
  const [active, setactive] = useState(() => location.pathname);
  const islogged = useSelector((state) => state.logged.islogged);
  const dispatch = useDispatch();
  const [logged, setLogged] = useState(islogged);
  let navigate = useNavigate();

  const handleClick = (e) => {
    setactive(e.target.getAttribute("data-link"));
  };

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setLogged(true);
      dispatch(isLogged(logged));
    } else setLogged(false);
  }, [logged, dispatch]);
  const logout = () => {
    localStorage.clear();
    setLogged(false);
    dispatch(isLogged(false));
    navigate("/login");
  };
  return (
    <div
      data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; 
  cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent ; top: 500">
      <nav className="uk-navbar-container uk-letter-spacing-small uk-text-bold">
        <div className="uk-container uk-container-large">
          <div className="uk-position-z-index" data-uk-navbar>
            <div className="uk-navbar-left">
              <a className="uk-navbar-item uk-logo" href="/">
                Beyond
              </a>
            </div>
            <div className="uk-navbar-center">
              <ul className="uk-navbar-nav uk-visible@m">
                <li
                  className={active === "/" ? "uk-active" : ""}
                  onClick={handleClick}>
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={active === "/courses" ? "uk-active" : ""}
                  onClick={handleClick}>
                  <Link to="courses">Courses</Link>
                </li>
                <li
                  className={active === "/about" ? "uk-active" : ""}
                  onClick={handleClick}>
                  <Link to="about">About</Link>
                </li>
                {isAdmin && (
                  <li
                    className={active === "/admin" ? "uk-active" : ""}
                    onClick={handleClick}>
                    <Link to="admin">Admin</Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="uk-navbar-right">
              <div className="uk-navbar-item">
                <div>
                  {logged ? (
                    <a
                      href="/"
                      onClick={logout}
                      className="uk-button uk-button-default uk-button-small uk-margin-small-right">
                      Logout
                    </a>
                  ) : (
                    <a
                      className="uk-button uk-button-success-outline"
                      href="signup">
                      Sign Up
                    </a>
                  )}
                </div>
              </div>
              <a
                className="uk-navbar-toggle uk-hidden@m"
                href="#offcanvas"
                data-uk-toggle>
                <span data-uk-navbar-toggle-icon></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
