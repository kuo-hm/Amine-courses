/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lessons from "../Components/Lessons";

import {
  selectAllCourses,
  fetchCourses,
} from "../features/courses/courseSlice";
import CourseSign from "../Components/CourseSign";

const Courses = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllCourses);
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [payed, setPayed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    //Fetch trending
    setError("");
    if (products[0] !== undefined) {
      setLoading(false);
      if (products[0].payed) {
        setCourses(products[0]);
        setPayed(true);
      }
    }
    if (products[0] === false) {
      setPayed(false);
      setLoading(false);
    } else {
      dispatch(fetchCourses());
    }
  }, [dispatch, products]);

  if (!loading && payed === true) {
    return (
      <div>
        <div id="course" className="uk-section">
          <div className="uk-container uk-margin-pricing-offset">
            <div className="uk-grid-large" data-uk-grid>
              <div className="uk-width-expand@m">
                <div className="uk-article">
                  <h2>Description</h2>
                  <p>{courses.description}</p>

                  <Lessons lesson={courses.lessons} />

                  <h2 className="uk-margin-large-top">Requirements</h2>
                  <p>{courses.requirements}</p>

                  <div className="uk-margin-large-top uk-background-muted uk-padding">
                    <h2>{courses.author}</h2>
                    <div className="uk-margin-medium-bottom" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <img
                          className="uk-border-circle"
                          src="https://via.placeholder.com/80x80"
                          alt="Tom Solender"
                        />
                      </div>
                      <div className="uk-width-expand uk-text-small">
                        <div data-uk-grid data-uk-margin>
                          <div className="uk-width-1-1">
                            <p>{courses.author_title}</p>
                          </div>
                          <div className="uk-width-1-2">
                            <span
                              className="uk-margin-small-right"
                              data-uk-icon="star"></span>
                            4.4 Instructor Rating
                          </div>
                          <div className="uk-width-1-2">
                            <span
                              className="uk-margin-small-right"
                              data-uk-icon="comments"></span>
                            21,201 Reviews
                          </div>
                          <div className="uk-width-1-2">
                            <span
                              className="uk-margin-small-right"
                              data-uk-icon="users"></span>
                            130,451 Students
                          </div>
                          <div className="uk-width-1-2">
                            <span
                              className="uk-margin-small-right"
                              data-uk-icon="file-text"></span>
                            5 Courses
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="uk-text-small uk-margin-remove">
                      {courses.author_quote}
                    </p>
                  </div>

                  <h2 className="uk-margin-large-top">
                    What do <mark>students think</mark> about the course?
                  </h2>
                  <div
                    className="uk-border-secondary-xlarge uk-grid-collapse"
                    data-uk-grid>
                    <div className="uk-width-1-3@s uk-padding">
                      <h5 className="uk-margin-remove">
                        Average rating: <mark>4.75</mark>
                      </h5>
                      <p className="uk-text-small uk-margin-small">
                        Out of 1534 reviews
                      </p>
                      <div className="uk-rating">
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 1.1"></span>
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 1.1"></span>
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 1.1"></span>
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 1.1"></span>
                        <span
                          className="uk-rating-filled"
                          data-uk-icon="icon: star; ratio: 1.1"></span>
                      </div>
                    </div>
                    <div className="uk-width-expand@s uk-padding">
                      <div className="uk-grid-small" data-uk-grid>
                        <div className="uk-width-expand">
                          <div className="uk-rating uk-flex uk-flex-middle">
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                          </div>
                        </div>
                        <div className="uk-width-auto">
                          <h6>68%</h6>
                        </div>
                      </div>
                      <progress
                        className="uk-progress uk-width-1-1"
                        value="68"
                        max="100"></progress>
                      <div className="uk-grid-small" data-uk-grid>
                        <div className="uk-width-expand">
                          <div className="uk-rating uk-flex uk-flex-middle">
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span data-uk-icon="icon: star; ratio: .8"></span>
                          </div>
                        </div>
                        <div className="uk-width-auto">
                          <h6>11%</h6>
                        </div>
                      </div>
                      <progress
                        className="uk-progress uk-width-1-1"
                        value="11"
                        max="100"></progress>
                      <div className="uk-grid-small" data-uk-grid>
                        <div className="uk-width-expand">
                          <div className="uk-rating uk-flex uk-flex-middle">
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span data-uk-icon="icon: star; ratio: .8"></span>
                            <span data-uk-icon="icon: star; ratio: .8"></span>
                          </div>
                        </div>
                        <div className="uk-width-auto">
                          <h6>12%</h6>
                        </div>
                      </div>
                      <progress
                        className="uk-progress uk-width-1-1"
                        value="12"
                        max="100"></progress>
                    </div>
                    <div className="uk-width-expand@s uk-padding">
                      <div className="uk-grid-small" data-uk-grid>
                        <div className="uk-width-expand">
                          <div className="uk-rating uk-flex uk-flex-middle">
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span data-uk-icon="icon: star; ratio: .8"></span>
                            <span data-uk-icon="icon: star; ratio: .8"></span>
                            <span data-uk-icon="icon: star; ratio: .8"></span>
                          </div>
                        </div>
                        <div className="uk-width-auto">
                          <h6>6%</h6>
                        </div>
                      </div>
                      <progress
                        className="uk-progress uk-width-1-1"
                        value="6"
                        max="100"></progress>
                      <div className="uk-grid-small" data-uk-grid>
                        <div className="uk-width-expand">
                          <div className="uk-rating uk-flex uk-flex-middle">
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: .8"></span>
                            <span data-uk-icon="icon: star; ratio: .8"></span>
                            <span data-uk-icon="icon: star; ratio: .8"></span>
                            <span data-uk-icon="icon: star; ratio: .8"></span>
                            <span data-uk-icon="icon: star; ratio: .8"></span>
                          </div>
                        </div>
                        <div className="uk-width-auto">
                          <h6>1%</h6>
                        </div>
                      </div>
                      <progress
                        className="uk-progress uk-width-1-1"
                        value="2"
                        max="100"></progress>
                    </div>
                  </div>
                  <h3 className="uk-margin-large-top">Student reviews</h3>
                  <ul className="uk-comment-list uk-margin-medium-top">
                    <li>
                      <article
                        className="uk-comment uk-visible-toggle"
                        tabIndex="-1">
                        <header className="uk-comment-header uk-position-relative">
                          <div
                            className="uk-grid-medium uk-flex-middle"
                            data-uk-grid>
                            <div className="uk-width-auto">
                              <img
                                className="uk-comment-avatar uk-border-circle"
                                src="https://via.placeholder.com/100x100"
                                width="80"
                                height="80"
                                alt="Alice Thomson"
                              />
                            </div>
                            <div className="uk-width-expand">
                              <h4 className="uk-comment-title uk-margin-remove">
                                <a className="uk-link-reset" href="#">
                                  Alice Jenkins
                                </a>
                              </h4>
                              <p className="uk-comment-meta uk-margin-remove">
                                <a className="uk-link-reset" href="#">
                                  12 days ago
                                </a>
                              </p>
                              <div className="uk-rating">
                                <span
                                  className="uk-rating-filled"
                                  data-uk-icon="icon: star; ratio: 0.8"></span>
                                <span
                                  className="uk-rating-filled"
                                  data-uk-icon="icon: star; ratio: 0.8"></span>
                                <span
                                  className="uk-rating-filled"
                                  data-uk-icon="icon: star; ratio: 0.8"></span>
                                <span
                                  className="uk-rating-filled"
                                  data-uk-icon="icon: star; ratio: 0.8"></span>
                                <span data-uk-icon="icon: star; ratio: 0.8"></span>
                              </div>
                            </div>
                          </div>
                          <div className="uk-position-top-right uk-position-small uk-hidden-hover">
                            <a className="uk-link-muted" href="#">
                              Reply
                            </a>
                          </div>
                        </header>
                        <div className="uk-comment-body">
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </article>
                      <ul>
                        <li>
                          <article
                            className="uk-comment uk-comment-primary uk-visible-toggle"
                            tabIndex="-1">
                            <header className="uk-comment-header uk-position-relative">
                              <div
                                className="uk-grid-medium uk-flex-middle"
                                data-uk-grid>
                                <div className="uk-width-auto">
                                  <img
                                    className="uk-comment-avatar uk-border-circle"
                                    src="https://via.placeholder.com/100x100"
                                    width="80"
                                    height="80"
                                    alt="Tom Solender"
                                  />
                                </div>
                                <div className="uk-width-expand">
                                  <h4 className="uk-comment-title uk-margin-remove">
                                    <a className="uk-link-reset" href="#">
                                      Tom Solender
                                    </a>
                                  </h4>
                                  <p className="uk-comment-meta uk-margin-remove-top">
                                    <a className="uk-link-reset" href="#">
                                      12 days ago
                                    </a>
                                  </p>
                                </div>
                              </div>
                              <div className="uk-position-top-right uk-position-small uk-hidden-hover">
                                <a className="uk-link-muted" href="#">
                                  Reply
                                </a>
                              </div>
                            </header>
                            <div className="uk-comment-body">
                              <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet.
                              </p>
                            </div>
                          </article>
                        </li>
                        <li>
                          <article
                            className="uk-comment uk-visible-toggle"
                            tabIndex="-1">
                            <header className="uk-comment-header uk-position-relative">
                              <div
                                className="uk-grid-medium uk-flex-middle"
                                data-uk-grid>
                                <div className="uk-width-auto">
                                  <img
                                    className="uk-comment-avatar uk-border-circle"
                                    src="https://via.placeholder.com/100x100"
                                    width="80"
                                    height="80"
                                    alt="Alice Thomson"
                                  />
                                </div>
                                <div className="uk-width-expand">
                                  <h4 className="uk-comment-title uk-margin-remove">
                                    <a className="uk-link-reset" href="#">
                                      John Thomson
                                    </a>
                                  </h4>
                                  <p className="uk-comment-meta uk-margin-remove">
                                    <a className="uk-link-reset" href="#">
                                      12 days ago
                                    </a>
                                  </p>
                                  <div className="uk-rating">
                                    <span
                                      className="uk-rating-filled"
                                      data-uk-icon="icon: star; ratio: 0.8"></span>
                                    <span
                                      className="uk-rating-filled"
                                      data-uk-icon="icon: star; ratio: 0.8"></span>
                                    <span
                                      className="uk-rating-filled"
                                      data-uk-icon="icon: star; ratio: 0.8"></span>
                                    <span
                                      className="uk-rating-filled"
                                      data-uk-icon="icon: star; ratio: 0.8"></span>
                                    <span data-uk-icon="icon: star; ratio: 0.8"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="uk-position-top-right uk-position-small uk-hidden-hover">
                                <a className="uk-link-muted" href="#">
                                  Reply
                                </a>
                              </div>
                            </header>
                            <div className="uk-comment-body">
                              <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet.
                              </p>
                            </div>
                          </article>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <h2 className="uk-margin-large-top" id="contact">
                    How do I <mark>contact</mark> you with my questions?
                  </h2>
                  <p>
                    Activity that and the scarfs, for bit of text, never just as
                    our have they of begin to cannot in of ran middle at behind
                    seal that their accustomed. For devotion their to though one
                    small sight escape, little. In so her has I solider, touched
                    the we the past, time, he posterity.
                  </p>
                </div>
              </div>
              <div className="uk-width-1-3@m">
                <div>
                  <div>
                    <h3>This course includes</h3>
                    <ul className="uk-list uk-margin-small-top">
                      <li>
                        <span
                          className="uk-margin-small-right"
                          data-uk-icon="clock"></span>
                        10 hours on-demand video
                      </li>
                      <li>
                        <span
                          className="uk-margin-small-right"
                          data-uk-icon="unlock"></span>
                        Full lifetime access
                      </li>
                      <li>
                        <span
                          className="uk-margin-small-right"
                          data-uk-icon="tablet"></span>
                        Access on mobile
                      </li>
                      <li>
                        <span
                          className="uk-margin-small-right"
                          data-uk-icon="file-text"></span>
                        Certificate of completion
                      </li>
                      <li>
                        <span
                          className="uk-margin-small-right"
                          data-uk-icon="file-pdf"></span>
                        Worksheet downloads
                      </li>
                      <li>
                        <span
                          className="uk-margin-small-right"
                          data-uk-icon="question"></span>
                        Questions answered by tutor
                      </li>
                      <li>
                        <span
                          className="uk-margin-small-right"
                          data-uk-icon="future"></span>
                        Future course updates
                      </li>
                    </ul>
                  </div>
                  <h3 className="uk-margin-large-top">Tags</h3>
                  <div data-uk-margin>
                    <a className="uk-display-inline-block" href="#">
                      <span className="uk-label uk-label-light">UX</span>
                    </a>
                    <a className="uk-display-inline-block" href="#">
                      <span className="uk-label uk-label-light">Design</span>
                    </a>
                    <a className="uk-display-inline-block" href="#">
                      <span className="uk-label uk-label-light">UI</span>
                    </a>
                    <a className="uk-display-inline-block" href="#">
                      <span className="uk-label uk-label-light">
                        Experience
                      </span>
                    </a>
                  </div>
                  <h3 className="uk-margin-large-top">Share Course</h3>
                  <div className="uk-margin">
                    <div
                      data-uk-grid
                      className="uk-child-width-auto uk-grid-small">
                      <div>
                        <a
                          href="#"
                          data-uk-icon="icon: facebook"
                          className="uk-icon-button facebook"
                          target="_blank"></a>
                      </div>
                      <div>
                        <a
                          href="#"
                          data-uk-icon="icon: linkedin"
                          className="uk-icon-button linkedin"
                          target="_blank"></a>
                      </div>
                      <div>
                        <a
                          href="#"
                          data-uk-icon="icon: twitter"
                          className="uk-icon-button twitter"
                          target="_blank"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="lesson"
          className="uk-flex-top uk-modal-container"
          data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-background-muted">
            <button
              className="uk-modal-close-outside"
              type="button"
              data-uk-close></button>
            <h2 className="uk-modal-title">Introduction: a UXD Parable</h2>
            <iframe
              src="https://player.vimeo.com/video/126241629"
              width="1000"
              height="562"
              data-uk-responsive
              data-uk-video></iframe>
            <div className="uk-margin-top uk-article">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="uk-section uk-section-muted">
          <div className="uk-container">
            <h2>Other Courses You May Like</h2>
            <div
              className="uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-large-top"
              data-uk-grid>
              <div>
                <div className="uk-card uk-card-small uk-card-border">
                  <div className="uk-card-media-top uk-position-relative uk-light">
                    <img
                      src="https://via.placeholder.com/640x400"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-overlay-xlight"></div>
                    <div className="uk-position-top-left">
                      <span className="uk-text-bold uk-text-price uk-text-small">
                        $27.00
                      </span>
                    </div>
                    <div className="uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"></a>
                    </div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title uk-margin-small-bottom">
                      Business Presentation Course
                    </h3>
                    <div className="uk-text-muted uk-text-small">
                      Thomas Haller
                    </div>
                    <div className="uk-text-muted uk-text-small uk-rating uk-margin-small-top">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span className="uk-margin-small-left uk-text-bold">
                        5.0
                      </span>
                      <span>(324)</span>
                    </div>
                  </div>
                  <a href="course.html" className="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-small uk-card-border">
                  <div className="uk-card-media-top uk-position-relative uk-light">
                    <img
                      src="https://via.placeholder.com/640x400"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-overlay-xlight"></div>
                    <div className="uk-position-top-left">
                      <span className="uk-text-bold uk-text-price uk-text-small">
                        $17.00
                      </span>
                    </div>
                    <div className="uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"></a>
                    </div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title uk-margin-small-bottom">
                      Outdoor Portrait Photography
                    </h3>
                    <div className="uk-text-muted uk-text-small">
                      Jane Mathews
                    </div>
                    <div className="uk-text-muted uk-text-small uk-rating uk-margin-small-top">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span className="uk-margin-small-left uk-text-bold">
                        5.0
                      </span>
                      <span>(1624)</span>
                    </div>
                  </div>
                  <a href="course.html" className="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-small uk-card-border">
                  <div className="uk-card-media-top uk-position-relative uk-light">
                    <img
                      src="https://via.placeholder.com/640x400"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-overlay-xlight"></div>
                    <div className="uk-position-top-left">
                      <span className="uk-text-bold uk-text-price uk-text-small">
                        $49.00
                      </span>
                    </div>
                    <div className="uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"></a>
                    </div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title uk-margin-small-bottom">
                      Creating Digital Artwork on Tablet
                    </h3>
                    <div className="uk-text-muted uk-text-small">
                      Chris Jenkins
                    </div>
                    <div className="uk-text-muted uk-text-small uk-rating uk-margin-small-top">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span className="uk-margin-small-left uk-text-bold">
                        4.0
                      </span>
                      <span>(724)</span>
                    </div>
                  </div>
                  <a href="course.html" className="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-small uk-card-border">
                  <div className="uk-card-media-top uk-position-relative uk-light">
                    <img
                      src="https://via.placeholder.com/640x400"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-overlay-xlight"></div>
                    <div className="uk-position-top-left">
                      <span className="uk-text-bold uk-text-price uk-text-small">
                        $36.00
                      </span>
                    </div>
                    <div className="uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"></a>
                    </div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title uk-margin-small-bottom">
                      Advanced Portrait Photography
                    </h3>
                    <div className="uk-text-muted uk-text-small">
                      Jannet Wilkins
                    </div>
                    <div className="uk-text-muted uk-text-small uk-rating uk-margin-small-top">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span className="uk-margin-small-left uk-text-bold">
                        5.0
                      </span>
                      <span>(214)</span>
                    </div>
                  </div>
                  <a href="course.html" className="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-small uk-card-border">
                  <div className="uk-card-media-top uk-position-relative uk-light">
                    <img
                      src="https://via.placeholder.com/640x400"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-overlay-xlight"></div>
                    <div className="uk-position-top-left">
                      <span className="uk-text-bold uk-text-price uk-text-small">
                        $45.00
                      </span>
                    </div>
                    <div className="uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"></a>
                    </div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title uk-margin-small-bottom">
                      React Development Environment
                    </h3>
                    <div className="uk-text-muted uk-text-small">Ben Allen</div>
                    <div className="uk-text-muted uk-text-small uk-rating uk-margin-small-top">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span className="uk-margin-small-left uk-text-bold">
                        4.0
                      </span>
                      <span>(324)</span>
                    </div>
                  </div>
                  <a href="course.html" className="uk-position-cover"></a>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-small uk-card-border">
                  <div className="uk-card-media-top uk-position-relative uk-light">
                    <img
                      src="https://via.placeholder.com/640x400"
                      alt="Course Title"
                    />
                    <div className="uk-position-cover uk-overlay-xlight"></div>
                    <div className="uk-position-top-left">
                      <span className="uk-text-bold uk-text-price uk-text-small">
                        $27.00
                      </span>
                    </div>
                    <div className="uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"></a>
                    </div>
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title uk-margin-small-bottom">
                      UI Design for Product Developers
                    </h3>
                    <div className="uk-text-muted uk-text-small">
                      Pete Frances
                    </div>
                    <div className="uk-text-muted uk-text-small uk-rating uk-margin-small-top">
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span
                        className="uk-rating-filled"
                        data-uk-icon="icon: star; ratio: 0.75"></span>
                      <span className="uk-margin-small-left uk-text-bold">
                        4.65
                      </span>
                      <span>(1447)</span>
                    </div>
                  </div>
                  <a href="/buy" className="uk-position-cover"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!payed && !loading) {
    return <CourseSign error={error} setError={setError} />;
  } else {
    return (
      <div className="overlay">
        <div className="overlay__inner">
          <div className="overlay__content">
            <span className="spinner"></span>
          </div>
        </div>
      </div>
    );
  }
};

export default Courses;
