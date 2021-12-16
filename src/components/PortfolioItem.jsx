import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";
import Image from "components/Image";
import Icon from "components/Icon";
import PortfolioDetailDialog from "components/PortfolioDetailDialog";

import "./PortfolioItem.scss";

const PortfolioItem = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  imageFileNameDetail,
  imageAltDetail,
  extraInfo,
}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <Col md={3} sm={6}>
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
  subheader: PropTypes.string,
  content: PropTypes.string,
  imageFileNameDetail: PropTypes.string,
  imageAltDetail: PropTypes.string,
  extraInfo: PropTypes.any,
};

PortfolioItem.defaultProps = {
  imageAlt: "",
  subheader: "",
  content: "",
  imageFileNameDetail: "",
  imageAltDetail: "",
  extraInfo: null,
};

export default PortfolioItem;
