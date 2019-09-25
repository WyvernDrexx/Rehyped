import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

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
        <div className='text-white default-letter-spacing'>
          R<span className='primary-color font-weight-bolder'>E</span>HYPED™
        </div>
        <div className="social">
          <Link to="/">
            <FontAwesomeIcon className='text-white' icon={faFacebook} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon className='text-white' icon={faInstagram} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon className='text-white' icon={faTwitter} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
