import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Image, ProgressBar } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import TokenProgress from "components/TokenProgress";

const Tokenomics = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, progress } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        <Col md={12}>
          {progress.map(({ title, value }) => (
            <TokenProgress key={value} header={title} imageFileName={value} />
          ))}
        </Col>
      </Row>
    </PageSection>
  );
};

Tokenomics.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Tokenomics.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Tokenomics;
