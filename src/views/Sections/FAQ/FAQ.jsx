import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Card, Button, Accordion } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";

import "./FAQ.scss";

const FAQ = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, faq } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} className="mb-5" />
      </Row>
      <Row>
        <Col md={12}>
          <Accordion defaultActiveKey="1" className="w-100">
            {faq.map(({ title, detail }) => (
              <Card key={title} className="mb-2 bg-gradient">
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={title}>
                    {title}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={title}>
                  <Card.Body>{detail}</Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Col>
      </Row>
    </PageSection>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

FAQ.defaultProps = {
  className: null,
  frontmatter: null,
};

export default FAQ;
