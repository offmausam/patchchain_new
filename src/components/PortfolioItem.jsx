import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";
import Image from "components/Image";

import "./PortfolioItem.scss";

const PortfolioItem = ({ imageFileName, imageAlt, header, content }) => {
  return (
    <Col md={3} sm={6} className="mb-3">
      <div className="why-p-single">
        <div className="icon-holder">
          <Image className="img-fluid" fileName={imageFileName} alt={imageAlt || header} />
        </div>
        <div className="why-p-content">
          <h5>{header}</h5>
          <p>{content}</p>
        </div>
      </div>
    </Col>
  );
};

PortfolioItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  content: PropTypes.string,
};

PortfolioItem.defaultProps = {
  imageAlt: "",
  content: "",
};

export default PortfolioItem;
