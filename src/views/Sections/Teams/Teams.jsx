import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import Team from "components/Team";
import SectionHeader from "components/SectionHeader";

import "./Teams.scss";

const Teams = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, teams } = frontmatter;

  return (
    <PageSection className={clsx(className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} className="mb-5" />
      </Row>
      <Row>
        {teams.map(({ href, imageFileName, name, position }) => (
          <Col className="p-3 mb-3 col-6 col-md-3" key={imageFileName}>
            <div className="client-icon">
              <Team href={href} imageFileName={imageFileName} />
              <h5 className="mt-3 text-white">{name}</h5>
              <p className="mt-2 text-white-50">{position}</p>
            </div>
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Teams.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Teams.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Teams;
