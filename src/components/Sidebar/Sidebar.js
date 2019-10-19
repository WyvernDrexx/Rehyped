import React from "react";
import { push as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = props => {
  return (
    <Menu {...props}>
      <Link onClick={props.toggleMenu} to="/" className="menu-item">
        Home
      </Link>
      <Link onClick={props.toggleMenu} to="/my-account" className="menu-item" href="/">
        My Account
      </Link>
      <Link onClick={props.toggleMenu} to="/products" className="menu-item">
        Products
      </Link>
      <Link onClick={props.toggleMenu} to="/product" className="menu-item">
        Single Product
      </Link>
      <Link onClick={props.toggleMenu} to="/mycart" className="menu-item">
        My Cart
      </Link>
      <Link onClick={props.toggleMenu} to="/about-us" className="menu-item">
        About Us
      </Link>
      <Link onClick={props.toggleMenu} to="/change-password" className="menu-item">
        Change Password
      </Link>
      <Link onClick={props.toggleMenu} to="/contact-us" className="menu-item">
        Contact Us
      </Link>
      <Link onClick={props.toggleMenu} to="/sign-up" className="menu-item">
        CREATE AN ACCOUNT
      </Link>
      <div className="social-platforms">
        <h4>FOLLOW US ON</h4>
        <Link  to="/">
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
