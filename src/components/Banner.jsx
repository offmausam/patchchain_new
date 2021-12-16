import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import {
  Container,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Button,
  Badge,
} from "react-bootstrap";
import "./Banner.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Banner = ({ className, header, subheader }) => {
  return (
    <div className="banner-wrap">
      <Container>
        <div className="banner-text-holder">
          <div className="banner-top-text">
            <Badge bg="info" className="p-1">
              News
            </Badge>
            <p>Patch whitelist is now open</p>
          </div>
          <div className=" banner-mid">
            <h1>{header}</h1>
            <p>{subheader}</p>
          </div>
          <div className="banner-bottom">
            <div className=" button-wrap">
              <Button variant="primary" className="button-reversed px-5 py-3 text-white mr-3">
                White Paper
              </Button>
              <Button variant="primary" className="px-5 py-3 text-white mr-3">
                Light Paper
              </Button>
              <Button variant="primary" className="px-5 py-3 text-white">
                Join our Community
              </Button>
            </div>
          </div>
        </div>
        <div className="banner-social">
          <ul className="list-unstyled">
            <li>
              <Link to="">
                <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
              </Link>
            </li>
            <li>
              <Link to="">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
              </Link>
            </li>
            <li>
              <Link to="">
                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
              </Link>
            </li>
            <li>
              <Link to="">
                <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
              </Link>
            </li>
            <li>
              <Link to="">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
};

Banner.defaultProps = {
  className: null,
  header: "",
  subheader: "",
};

export default Banner;
