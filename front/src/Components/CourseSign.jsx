/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCode } from "../features/courses/codeSlice";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const CourseSign = ({ error, setError }) => {
  const [code, setCode] = useState("");
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const applyCode = async () => {
    const codee = {
      codee: code,
    };
    const response = await dispatch(fetchCode(codee));
    setError(response.payload);
  };

  return (
    <header
      id="header"
      className="uk-background-cover uk-background-norepeat uk-background-center-center uk-background-blend-soft-light 
		uk-background-primary"
      style={{
        backgroundImage: "url(https://via.placeholder.com/1600x800)",
      }}>
      <div
        className="uk-container uk-container-large uk-light"
        data-uk-height-viewport="offset-top: true">
        <div data-uk-grid data-uk-height-viewport="offset-top: true">
          <div className="uk-header-left uk-section uk-visible@m uk-flex uk-flex-bottom">
            <div className="uk-text-xsmall uk-text-bold">
              <a
                className="hvr-back"
                href="#course"
                data-uk-scroll="offset: 80">
                <span
                  className="uk-margin-small-right"
                  data-uk-icon="arrow-left"></span>
                Scroll down
              </a>
            </div>
          </div>

          <div className="uk-width-expand@m uk-section">
            <div className="uk-margin-top">
              <div
                className="uk-grid-large"
                data-uk-grid
                data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 200; repeat: true">
                <div className="uk-width-1-2@m">
                  <h1 className="uk-heading-medium uk-margin-remove-top uk-letter-spacing-xl">
                    UX Design Fundamentals
                  </h1>
                  <a
                    href="#"
                    onClick={handleOpen}
                    className="uk-button uk-button-large uk-button-success-outline">
                    Join now
                  </a>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2">
                        How to pay
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Payment Info
                      </Typography>
                    </Box>
                  </Modal>
                </div>
                <div className="uk-width-1-2@m uk-text-large uk-flex uk-flex-middle">
                  <div>
                    <p>
                      Completely mesh interactive web-readiness via
                      mission-critical growth strategies. Seamlessly maintain
                      granular communities through cross-platform niches.{" "}
                    </p>
                    <p>
                      Holisticly unleash end-to-end users after long-term
                      high-impact channels. Globally synthesize proactive
                      bandwidth with interactive content.
                    </p>
                  </div>
                </div>
                <div className="uk-width-1-2@m uk-text-large uk-flex uk-flex-middle">
                  <div>
                    <p style={{ color: "red" }}>{error}</p>
                  </div>
                </div>
                <div
                  className="uk-grid-collapse uk-width-3-4@m uk-margin-medium-top"
                  data-uk-grid
                  data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 200; repeat: true">
                  <div className="uk-width-expand">
                    <input
                      className="uk-input uk-form-large uk-border-remove-right"
                      type="text"
                      placeholder="xxxxxxxx"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                  <div className="uk-width-auto">
                    <button
                      className="uk-button uk-button-large uk-button-success-outline"
                      onClick={applyCode}>
                      Apply your code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="uk-header-right uk-section uk-visible@m uk-flex uk-flex-right uk-flex-bottom">
            <div>
              <ul className="uk-subnav uk-text-xsmall uk-text-bold">
                <li>
                  <a className="uk-link-border" href="#" target="_blank">
                    facebook
                  </a>
                </li>
                <li>
                  <a className="uk-link-border" href="#" target="_blank">
                    twitter
                  </a>
                </li>
                <li>
                  <a className="uk-link-border" href="#" target="_blank">
                    instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CourseSign;
