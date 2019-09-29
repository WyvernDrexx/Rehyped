import React from "react";
import { push as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./styles/Sidebar.scss";

const Sidebar = props => {
  return (
    <Menu {...props}>
      <Link to="/" className="menu-item" href="/">
        My Account
      </Link>

      <Link to="/products" className="menu-item">
        Products
      </Link>

      <Link to="/" className="menu-item">
        Latest Design
      </Link>

      <Link to="/" className="menu-item">
        Rehyped Original
      </Link>
      <Link to="/" className="menu-item">
        Anime
      </Link>
      <Link to="/" className="menu-item">
        Merch
      </Link>
      <Link to="/" className="menu-item">
        Rehyped Original
      </Link>
      <Link to="/" className="menu-item">
        Return Policy
      </Link>
      <Link to="/" className="menu-item">
        Contact Us
      </Link>
      <div className="social-platforms">
        <h4>FOLLOW US ON</h4>
        <Link to="/">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
    </Menu>
  );
};

export default Sidebar;
