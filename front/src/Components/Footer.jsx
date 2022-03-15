/** @format */

import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="uk-border-dark-top">
        <div className="uk-section uk-section-secondary">
          <div className="uk-container uk-h6 uk-margin-top">
            <div
              className="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-large"
              data-uk-grid>
              <div>
                <a href="#" className="uk-logo">
                  Frame by Frame
                </a>
              </div>
              <div>
                <ul className="uk-list uk-list-large">
                  <li>
                    <a className="uk-link-border" href="#">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a className="uk-link-border" href="#">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a className="uk-link-border" href="#">
                      Workshops
                    </a>
                  </li>
                  <li>
                    <a className="uk-link-border" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="uk-list uk-list-large">
                  <li>
                    <a className="uk-link-border" href="#">
                      Our Initiatives
                    </a>
                  </li>
                  <li>
                    <a className="uk-link-border" href="#">
                      Giving Back
                    </a>
                  </li>
                  <li>
                    <a className="uk-link-border" href="#">
                      Communities
                    </a>
                  </li>
                  <li>
                    <a className="uk-link-border" href="#">
                      Youth Program
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="uk-list uk-list-large">
                  <li>
                    <a className="uk-link-border" href="#">
                      Terms of use
                    </a>
                  </li>
                  <li>
                    <a className="uk-link-border" href="#">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-section uk-section-secondary">
          <div className="uk-container uk-h6">
            <div className="uk-child-width-1-2@m uk-grid-large" data-uk-grid>
              <div className="uk-flex uk-flex-right@m">
                <ul className="uk-subnav">
                  <li>
                    <a className="uk-link-border" href="#" target="_blank">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a className="uk-link-border" href="#" target="_blank">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a className="uk-link-border" href="#" target="_blank">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div className="uk-flex-first@m">
                <p>
                  Made by{" "}
                  <a
                    className="uk-link-border"
                    href="https://beyondexpertise.fr/"
                    target="_blank">
                    Beyond Expertise
                  </a>{" "}
                  in Guatemala City.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
        <div className="uk-offcanvas-bar">
          <a className="uk-logo" href="index.html">
            Frame by Frame
          </a>
          <button
            className="uk-offcanvas-close"
            type="button"
            data-uk-close="ratio: 1.2"
          />
          <ul className="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-medium-top uk-text-center">
            <li className="uk-active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="courses.html">Courses</a>
            </li>
            <li>
              <a href="course.html">Single Course</a>
            </li>
            <li>
              <a href="search.html">Search</a>
            </li>
            <li>
              <a href="sign-in.html">Sign In</a>
            </li>
            <li>
              <a href="sign-up.html">Sign Up</a>
            </li>
          </ul>
          <div className="uk-margin-medium-top">
            <a
              className="uk-button uk-width-1-1 uk-button-default"
              href="sign-up.html">
              Sign Up
            </a>
          </div>
          <div className="uk-margin-medium-top uk-text-center">
            <div
              data-uk-grid
              className="uk-child-width-auto uk-grid-small uk-flex-center">
              <div>
                <a
                  href="https://twitter.com/"
                  data-uk-icon="icon: twitter"
                  className="uk-icon-link"
                  target="_blank"
                />
              </div>
              <div>
                <a
                  href="https://www.facebook.com/"
                  data-uk-icon="icon: facebook"
                  className="uk-icon-link"
                  target="_blank"
                />
              </div>
              <div>
                <a
                  href="https://www.instagram.com/"
                  data-uk-icon="icon: instagram"
                  className="uk-icon-link"
                  target="_blank"
                />
              </div>
              <div>
                <a
                  href="https://vimeo.com/"
                  data-uk-icon="icon: vimeo"
                  className="uk-icon-link"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
