/** @format */

import React from "react";
import video from "../Assets/video/header.mp4";
const Home = () => {
  return (
    <div>
      <header
        class="uk-cover-container uk-background-cover uk-background-norepeat uk-background-center-center"
        style={{
          backgroundImage: "url(https://via.placeholder.com/1600x900)",
        }}>
        <video src="" data-uk-cover></video>
        <div class="uk-overlay uk-position-cover uk-overlay-video"></div>

        <div
          class="uk-container uk-container-large uk-light"
          data-uk-height-viewport="offset-top: true">
          <div data-uk-grid data-uk-height-viewport="offset-top: true">
            <div class="uk-header-left uk-section uk-visible@m uk-flex uk-flex-bottom">
              <div class="uk-text-xsmall uk-text-bold">
                <a class="hvr-back" href="#about" data-uk-scroll="offset: 80">
                  <span
                    class="uk-margin-small-right"
                    data-uk-icon="arrow-left"></span>
                  Scroll down
                </a>
              </div>
            </div>
            <div class="uk-width-expand@m uk-section uk-flex uk-flex-column">
              <div class="uk-margin-auto-top uk-margin-auto-bottom header-text-ar">
                <h4
                  class="uk-heading-medium uk-margin-remove-top uk-letter-spacing-xl"
                  data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
                  Frame <mark> by</mark>Frame
                </h4>
              </div>
              <div
                class="uk-margin-auto-top"
                data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 400; repeat: true">
                <div
                  class="uk-child-width-1-2@s uk-grid-large uk-margin-medium-top"
                  data-uk-grid></div>
              </div>
            </div>
            <div class="uk-header-right uk-section uk-visible@m uk-flex uk-flex-right uk-flex-bottom">
              <div>
                <ul class="uk-subnav uk-text-xsmall uk-text-bold">
                  <li>
                    <a class="uk-link-border" href="#" target="_blank">
                      facebook
                    </a>
                  </li>
                  <li>
                    <a class="uk-link-border" href="#" target="_blank">
                      twitter
                    </a>
                  </li>
                  <li>
                    <a class="uk-link-border" href="#" target="_blank">
                      instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="uk-section uk-section-large">
        <div className="uk-container">
          <h4
            class="uk-heading-medium uk-margin-remove-top uk-letter-spacing-xl"
            dir="rtl"
            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
            فراسك هاد الصورة خديتها بالتلفون ماشي<mark> بالكاميرا؟ </mark>
          </h4>
          <h4
            class="uk-heading-medium uk-margin-remove-top uk-letter-spacing-xl"
            dir="rtl"
            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
            بغيتي تعلم حتا نتا كيفاش تاخد تصاور خطيرين و كايشهيو غير
            <mark> بالتلفون</mark> ديالك؟
          </h4>
          <h4
            class="uk-heading-medium uk-margin-remove-top uk-letter-spacing-xl"
            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true"
            dir="rtl">
            غادي نشارك معاكم تجربتي فال <mark>photographie culinaire</mark> و
            خبرة ديال 10 سنين
          </h4>
          <h4
            class="uk-heading-medium uk-margin-remove-top uk-letter-spacing-xl"
            dir="rtl"
            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
            أول <mark>formation en ligne</mark> ديال{" "}
            <mark>photographie culinaire</mark> بالتلفون فالمغرب
          </h4>
          <h2 className="uk-heading-small" dir="rtl">
            انظم إلينا و تعلم من <mark> الافضل</mark>
          </h2>
          <video src={video} controls></video>
        </div>
      </div>

      <div className="uk-section uk-section-muted uk-section-large">
        <div className="uk-container uk-container-expand">
          <div className="uk-child-width-1-2@s uk-grid-large" data-uk-grid>
            <div>
              <div
                className="uk-child-width-1-3 uk-grid-small"
                data-uk-grid="parallax: 150">
                <div>
                  <img
                    src="https://via.placeholder.com/400x400"
                    alt="Tow Sawyer"
                  />
                </div>
                <div>
                  <img
                    src="https://via.placeholder.com/400x400"
                    alt="Tow Sawyer"
                  />
                </div>
                <div>
                  <img
                    src="https://via.placeholder.com/400x400"
                    alt="Tow Sawyer"
                  />
                </div>
                <div>
                  <img
                    src="https://via.placeholder.com/400x400"
                    alt="Tow Sawyer"
                  />
                </div>
                <div>
                  <img
                    src="https://via.placeholder.com/400x400"
                    alt="Tow Sawyer"
                  />
                </div>
                <div>
                  <img
                    src="https://via.placeholder.com/400x400"
                    alt="Tow Sawyer"
                  />
                </div>
              </div>
            </div>
            <div className="uk-flex uk-flex-middle">
              <div className="uk-width-3-4@m">
                <h2 className="uk-heading-small">
                  What is <mark>Frame by Frame</mark>
                </h2>
                <ul className="uk-list uk-list-large uk-text-large uk-margin-medium-top">
                  <li>
                    Frame by Frame est une agence créative de production
                    audiovisuelle et de stratégie marketing qui offre une
                    communication digital en 360.
                  </li>
                  <li>
                    On propose un encadrement ALL IN ONE, de la création de
                    concept et du contenu à la gestion des réseaux sociaux.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-muted uk-section-large uk-padding-remove-bottom">
        <div className="uk-container uk-container-small uk-text-center">
          <h2 className="uk-heading-small">
            <mark>Join</mark> the thousands and learn something new{" "}
            <mark>today</mark>
          </h2>
          <a
            href="sign-up.html"
            className="uk-button uk-button-primary uk-button-large uk-margin-medium-top">
            Signup for free
          </a>
        </div>
      </div>

      <div
        className="uk-section uk-section-large uk-background-cover uk-background-norepeat 
  uk-background-center-center uk-background-blend-soft-light uk-light uk-background-primary"
        style={{ backgroundImage: "url(https://via.placeholder.com/;)" }}>
        <div className="uk-container uk-container-large">
          <div className="uk-width-1-2@m">
            <h2 className="uk-heading-small uk-margin-remove" dir="rtl">
              هاد الدورة غادي تعاونك باش تعلم كل ماتحتاج
            </h2>
          </div>
        </div>
        <div className="uk-container uk-container-large uk-margin-large-top">
          <div
            className="uk-grid-large"
            data-uk-grid
            style={{ flexDirection: "row-reverse" }}>
            <div className="uk-width-1-3@m">
              <p className="uk-text-large" dir="rtl">
                ف <mark>photographie culinaire</mark> و المهم اكثر انها غير ب
                التلفون
                <br />و من بين المحاور لي غادي تعلم
              </p>
              <a
                href="courses.html"
                className="uk-button uk-button-success-outline uk-button-large uk-margin-medium-top">
                Join our course
              </a>
            </div>
            <div className="uk-width-expand@m">
              <div data-uk-slider="sets: true">
                <div
                  className="uk-position-relative uk-visible-toggle uk-light"
                  tabIndex="-1">
                  <div className="uk-slider-container">
                    <div className="uk-position-absolute uk-slidenav-above">
                      <a
                        className="uk-slidenav-large uk-visible@m uk-text-success uk-margin-right"
                        href="#"
                        data-uk-slidenav-previous
                        data-uk-slider-item="previous"></a>
                      <a
                        className="uk-slidenav-large uk-visible@m uk-text-success"
                        href="#"
                        data-uk-slidenav-next
                        data-uk-slider-item="next"></a>
                    </div>
                    <ul className="uk-slider-items uk-child-width-1-3@s uk-grid-large">
                      <li>
                        <div className="uk-card uk-border-light-hover uk-card-small uk-height-small uk-inline uk-border-light-xlarge uk-flex uk-flex-column">
                          <div className="uk-card-body uk-margin-auto-top centring">
                            <h3 className="uk-card-title uk-margin-remove">
                              Stylisme culinaire et photographie de base
                            </h3>
                          </div>
                          <a
                            href="courses.html"
                            className="uk-position-cover"></a>
                        </div>
                      </li>
                      <li>
                        <div className="uk-card uk-border-light-hover uk-card-small uk-height-small uk-inline uk-border-light-xlarge uk-flex uk-flex-column">
                          <div className="uk-card-body uk-margin-auto-top centring">
                            <h3 className="uk-card-title uk-margin-remove">
                              Process et Pratique photographique pour Instagram
                            </h3>
                          </div>
                          <a
                            href="courses.html"
                            className="uk-position-cover"></a>
                        </div>
                      </li>
                      <li>
                        <div className="uk-card uk-border-light-hover uk-card-small uk-height-small uk-inline uk-border-light-xlarge uk-flex uk-flex-column">
                          <div className="uk-card-body uk-margin-auto-top centring">
                            <h3 className="uk-card-title uk-margin-remove">
                              retouche photo et Instagram
                            </h3>
                          </div>
                          <a
                            href="courses.html"
                            className="uk-position-cover"></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="uk-position-center-left uk-position-small uk-hidden@m"
                    href="#"
                    data-uk-slidenav-previous
                    data-uk-slider-item="previous"></a>
                  <a
                    className="uk-position-center-right uk-position-small uk-hidden@m"
                    href="#"
                    data-uk-slidenav-next
                    data-uk-slider-item="next"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-secondary">
        <div className="uk-container">
          <div
            className="uk-child-width-1-2@m uk-grid-large uk-flex uk-flex-middle"
            data-uk-grid>
            <div>
              <h3>
                Subscribe to our newsletter to receive product updates and
                offers.
              </h3>
            </div>
            <div>
              <div className="uk-grid-collapse" data-uk-grid>
                <div className="uk-width-expand">
                  <input
                    className="uk-input uk-form-large uk-border-remove-right"
                    type="email"
                    placeholder="Your email address"
                  />
                </div>
                <div className="uk-width-auto">
                  <button className="uk-button uk-button-large uk-button-success-outline">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
