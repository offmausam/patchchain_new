import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import Client from "components/Client";
import SectionHeader from "components/SectionHeader";

import "./Clients.scss";

const Clients = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, clients } = frontmatter;

  return (
    <PageSection className={clsx("bg-white", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} className="mb-5" />
      </Row>
      <Row>
        {clients.map(({ href, imageFileName }) => (
          <Col md={3} sm={6} className="p-3 mb-3" key={imageFileName}>
            <div className="client-icon">
              <Client href={href} imageFileName={imageFileName} />
            </div>
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Clients.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Clients.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Clients;
