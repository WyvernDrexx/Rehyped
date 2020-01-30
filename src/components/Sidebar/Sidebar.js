import React from "react";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { useSelector } from "react-redux";

const Sidebar = props => {
  const token = useSelector(state => state.token);
  return (
    <Menu {...props}>
      <Link onClick={props.toggleMenu} to="/" className="menu-item">
        Home
      </Link>
      {token.isVerified ? (
        <Link
          onClick={props.toggleMenu}
          to="/my-account"
          className="menu-item"
          href="/"
        >
          My Account
        </Link>
      ) : null}
      {token.isVerified ? (
        <Link onClick={props.toggleMenu} to="/my-account/orders" className="menu-item">
          MY ORDERS
        </Link>
      ) : null}
      {!token.isVerified ? (
        <Link
          onClick={props.toggleMenu}
          to="/login"
          className="menu-item"
          href="/"
        >
          Login
        </Link>
      ) : null}

      <Link onClick={props.toggleMenu} to="/products" className="menu-item">
        Products
      </Link>
      {token.isVerified ? (
        <Link onClick={props.toggleMenu} to="/mycart" className="menu-item">
          My Cart
        </Link>
      ) : null}

      <Link onClick={props.toggleMenu} to="/about-us" className="menu-item">
        About Us
      </Link>
      {token.isVerified ? (
        <Link
          onClick={props.toggleMenu}
          to="/change-password"
          className="menu-item"
        >
          Change Password
        </Link>
      ) : null}

      {!token.isVerified ? (
        <Link onClick={props.toggleMenu} to="/sign-up" className="menu-item">
          CREATE AN ACCOUNT
        </Link>
      ) : null}
      {token.isVerified && token.isAdmin ? (
        <Link
          onClick={props.toggleMenu}
          to="/admin-pannexa"
          className="menu-item"
        >
          ADMIN PANEL
        </Link>
      ) : null}
      {token.isVerified ? (
        <Link onClick={props.toggleMenu} to="/contact-us" className="menu-item">
          Contact Us
        </Link>
      ) : null}
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
