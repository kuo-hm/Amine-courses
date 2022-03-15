/** @format */

import React from "react";
import video from "../Assets/video/header.mp4";

const About = () => {
  return (
    <div>
      {" "}
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
      </div>{" "}
      <video src={video} controls autoPlay muted loop></video>{" "}
    </div>
  );
};

export default About;
