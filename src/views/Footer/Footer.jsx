import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";

import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { copyright, privacyHref, privacyText, termsHref, termsText } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <div className="footer-wrap pt-5">
          <Row>
            <Col md={6}>
              <div className="footer-widget footer-logo-newsletter">
                <div className="footer-logo">
                  <h4>PatchChain</h4>
                </div>
                <div className="newsletter-form">
                  <form action="">
                    <div className="form-group mb-0">
                      <input type="email" placeholder="Enter your Email" />
                      <input type="submit" value="Subscribe" className="btn btn-primary" />
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-menu">
                <h3 className="footer-title">Patch chain</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="">WhitePaper</a>
                  </li>
                  <li>
                    <a href="">Investor Deck</a>
                  </li>
                  <li>
                    <a href="">Tokenomics</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-menu bg">
                <h3 className="footer-title">Stay in touch</h3>
                <ul className="list-unstyled footer-social">
                  <li>
                    <div className="footer-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>

                    <a href="">test @test.com</a>
                  </li>
                  <li>
                    <div className="footer-icon">
                      <FontAwesomeIcon icon={faTelegram} />
                    </div>
                    <a href="">Join our telegram</a>
                  </li>
                  <li>
                    <div className="footer-icon">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <a href="">Join our twitter</a>
                  </li>
                  <li>
                    <div className="footer-icon">
                      <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <a href="">www.test.com</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center text-center d-flex justify-content-between">
            <Col lg={5} className="text-lg-left text-white">
              {copyright}
            </Col>
            <Col lg={4} className="text-lg-right">
              <a className="mr-3" href={privacyHref}>
                {privacyText}
              </a>
              <a href={termsHref}>{termsText}</a>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
