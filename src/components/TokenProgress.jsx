import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col, Image, ProgressBar } from "react-bootstrap";

import "./TokenProgress.scss";

const TokenProgress = ({ header, imageFileName }) => {
  return (
    <div>
      <div className="d-flex justify-content-between text-white mb-1">
        <div className="d-inline">{header}</div>
        <div className="d-inline">{imageFileName}%</div>
      </div>
      <ProgressBar animated={false} now={imageFileName} className="mb-3" />
    </div>
  );
};

TokenProgress.propTypes = {
  imageFileName: PropTypes.string,
  header: PropTypes.string,
};

TokenProgress.defaultProps = {
  imageFileName: "",
  header: "",
};

export default TokenProgress;
