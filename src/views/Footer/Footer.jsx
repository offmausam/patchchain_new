import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";

import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "components/Image";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { copyright, privacyHref, privacyText, termsHref, termsText, imageFileName, imageAlt } =
    frontmatter;

  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrap">
          <Row>
            <Col md={4} className="py-5">
              <div className="footer-widget footer-logo-newsletter">
                <div className="footer-logo mb-5">
                  <Image className="img-fluid" fileName={imageFileName} alt={imageAlt} />
                </div>
                <div className="newsletter-form">
                  <h5 className="text-white mb-3">Subscribe to out Newsletter!</h5>
                  <form action="">
                    <div className="form-group mb-0">
                      <input type="email" placeholder="Enter your Email" />
                      <input type="submit" value="Subscribe" className="btn btn-primary" />
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col md={{ size: 3, offset: 1 }} className="py-5">
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
            <Col md={4} className="py-5 bg">
              <div className="footer-menu">
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
          <Row className="align-items-center text-center d-flex justify-content-between py-3 footer-bottom-text">
            <Col lg={5} className="text-lg-left text-white">
              {copyright}
            </Col>
            <Col lg={4} className="text-sm-right">
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
