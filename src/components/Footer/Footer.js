import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

import { Row, Col } from "react-bootstrap";

const Header = props => {
  return (
    <div className="bg-black pt-4 pb-4">
      <div className="text-center">
        <Link className="text-center footer-link d-block" to="/">
          CONTACT US
        </Link>
        <Link className="text-center footer-link d-block" to="/">
          ABOUT US
        </Link>
        <Link className="text-center footer-link d-block" to="/">
          TERMS OF SERVICES
        </Link>
        <Link className="text-center footer-link d-block" to="/">
          RETURN POLICY
        </Link>
        <Link className="text-center footer-link d-block" to="/">
          SHIPPING POLICY
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-5 px-2">
        {/* 173.3px width */}
        <Col>
          <Row>
            <Col>
              <div className="logo">
                <img className="w-100" src="/logo.png" alt="Rehyped Logo" />
              </div>
            </Col>
            <Col>
              <div className="social float-right">
                <a href="https://facebook.com/rehypedofficial">
                  <FontAwesomeIcon className="text-white" icon={faFacebook} />
                </a>
                <a href="https://instagram.com/rehypedofficial">
                  <FontAwesomeIcon className="text-white" icon={faInstagram} />
                </a>
                <a href="https://twitter.com/rehypedofficial">
                  <FontAwesomeIcon className="text-white" icon={faTwitter} />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default Header;
