/** @format */

import React, { useState } from "react";
import { postLogin } from "../features/auth/loginSlice";
import { isLogged } from "../features/logged/loggedSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    await dispatch(postLogin(user));
    if (localStorage.getItem("error")) {
      localStorage.removeItem("error");
    } else {
      dispatch(isLogged(true));
      navigate("/courses");
      return window.location.reload(false);
    }
  };

  return (
    <div className="uk-grid-collapse" data-uk-grid>
      <div
        className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center"
        data-uk-height-viewport>
        <div className="uk-width-3-4@s">
          <div className="uk-text-center uk-margin-bottom">
            <a
              className="uk-logo uk-text-success uk-text-bold"
              href="index.html">
              Beyond
            </a>
          </div>
          <div className="uk-text-center uk-margin-medium-bottom">
            <h1 className="uk-letter-spacing-small">Sign In to Beyond</h1>
          </div>

          <form onSubmit={Login}>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="uk-input uk-form-large"
                type="text"
                placeholder="tom@company.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="uk-input uk-form-large"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Min 8 characters"
              />
            </div>
            <div className="uk-width-1-1 uk-margin uk-text-center">
              <Link className="uk-text-small uk-link-muted" to="/signup">
                You don't have account ?
              </Link>
            </div>
            <div className="uk-width-1-1 uk-text-center">
              <button
                className="uk-button uk-button-primary uk-button-large"
                type="submit">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
