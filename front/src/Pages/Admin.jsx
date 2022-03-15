/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCodegen } from "../features/courses/codegenSlice";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const fetchCode = async (e) => {
    e.preventDefault();

    const response = await dispatch(fetchCodegen(email));
    setPassword(response.payload);
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

          <form onSubmit={fetchCode}>
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
                Code
              </label>
              <input
                id="password"
                className="uk-input uk-form-large"
                type="text"
                value={password}
                placeholder="********"
              />
            </div>

            <div className="uk-width-1-1 uk-text-center">
              <button
                className="uk-button uk-button-primary uk-button-large"
                type="submit">
                Generate The code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
