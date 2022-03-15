import React, { useState } from "react";
import ReactPlayer from 'react-player'


const Lessons = ({ lesson }) => {

const [videourl, setVideourl] = useState(null)
  const test = (url) => {
  setVideourl("http://127.0.0.1:8000/media/"+url)
}
  return (
    <div>
      {" "}
      {videourl&&<ReactPlayer url={videourl} controls />}
      <h2 className="uk-margin-large-top">Content</h2>
      {/* loop lesson */}
      <ul className="uk-margin-top" data-uk-accordion="multiple: true">
        {lesson.map((lesson, index) => {
          return (
            <li className="" key={lesson.col}>
              <a className="uk-accordion-title" href="#">
                {lesson.col}
                <span className="uk-align-right uk-margin-remove-bottom">
                  28:56
                </span>
              </a>
              <div className="uk-accordion-content">
                <table className="uk-table uk-table-justify uk-table-middle uk-table-divider">
                  <tbody>
                    {lesson.lesson.map((les, index) => {
                      return (
                        <tr className="uk-text-primary" key={les.title}>
                          <td className="uk-table-expand">
                            <span
                              className="uk-margin-small-right"
                              data-uk-icon="play-circle"
                            ></span>
                            <a href="#lesson" onClick={()=>test(les.video)}>
                              {les.title}
                            </a>
                          </td>
                          <td>
                            <span data-uk-icon="unlock"></span>
                          </td>
                          <td className="uk-table-shrink">{les.duration}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Lessons;
