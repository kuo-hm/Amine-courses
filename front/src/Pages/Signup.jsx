/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../features/auth/registerSlice";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    if (password === "" || username === "" || email === "") {
      return setError(
        "Please fill all the required fields that are marked with *"
      );
    }
    if (password !== repassword) {
      setPassword("");
      setRePassword("");
      return setError("Password doesn't match");
    }

    const user = {
      email: email,
      password: password,
      username: username,
      first_name: first_name,
      last_name: last_name,
      password2: repassword,
    };
    await dispatch(postRegister(user));
    const err = localStorage.getItem("errorRegister");
    if (err !== null) {
      setError(err);
    } else {
      return navigate("/login");
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
            <h1 className="uk-letter-spacing-small">Create an Account</h1>
          </div>

          <form onSubmit={register}>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="name">
                Username*
              </label>
              <input
                id="username"
                className="uk-input uk-form-large"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                isrequired="true"
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="name">
                First Name
              </label>
              <input
                id="first_name"
                className="uk-input uk-form-large"
                type="text"
                placeholder="Tom"
                onChange={(e) => setFirst_name(e.target.value)}
                value={first_name}
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="name">
                Last Name
              </label>
              <input
                id="last_name"
                className="uk-input uk-form-large"
                type="text"
                placeholder="Thomson"
                onChange={(e) => setLast_name(e.target.value)}
                value={last_name}
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="email">
                Email*
              </label>
              <input
                id="email"
                className="uk-input uk-form-large"
                type="email"
                placeholder="tom@company.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                isrequired="true"
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="password">
                Password*
              </label>
              <input
                id="password"
                className="uk-input uk-form-large"
                type="password"
                placeholder="Min 8 characters"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                isrequired="true"
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="password">
                Confirm Password*
              </label>
              <input
                id="password2"
                className="uk-input uk-form-large"
                type="password"
                placeholder="Min 8 characters"
                onChange={(e) => setRePassword(e.target.value)}
                value={repassword}
                isrequired="true"
              />
            </div>

            <p style={{ color: "red" }}>{error}</p>

            <div className="uk-width-1-1 uk-text-center">
              <button
                className="uk-button uk-button-primary uk-button-large"
                type="submit">
                Sign Up
              </button>
            </div>
            <div className="uk-width-1-1 uk-margin uk-text-center">
              <p className="uk-text-small uk-margin-remove">
                You have account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
