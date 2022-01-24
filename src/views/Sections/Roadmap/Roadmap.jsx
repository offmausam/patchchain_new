import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import TimelineItem from "components/TimelineItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import nl2br from "utils/nl2br";

import "./Roadmap.scss";

const Roadmap = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, timeline } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader
          header={rootHeader}
          subheader={rootSubHeader}
          className="text-center mb-5 d-flex justify-content-center"
        />
      </Row>
      <Row>
        <Col lg={12}>
          <ul className="timeline">
            {timeline.map(({ content, header, imageContent, imageFileName, subheader }, ind) => (
              <TimelineItem
                invert={ind % 2 === 1}
                key={header}
                imageFileName={imageFileName}
                header={header}
                subheader={subheader}
                content={content}
                imageContent={
                  imageContent ? (
                    <div dangerouslySetInnerHTML={{ __html: `<h4>${nl2br(imageContent)}</h4>` }} />
                  ) : null
                }
              />
            ))}
          </ul>
        </Col>
      </Row>
    </PageSection>
  );
};

Roadmap.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Roadmap.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Roadmap;
