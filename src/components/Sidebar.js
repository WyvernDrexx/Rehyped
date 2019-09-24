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
      <Link to='/' className="menu-item" href="/">
        My Account
      </Link>

      <Link to='/' className="menu-item" href="/burgers">
        Track Orders
      </Link>

      <Link to='/' className="menu-item" href="/pizzas">
        Latest Design
      </Link>

      <Link to='/' className="menu-item" href="/desserts">
        Rehyped Original
      </Link>
      <Link to='/' className="menu-item" href="/desserts">
        Anime
      </Link>
      <Link to='/' className="menu-item" href="/desserts">
        Merch
      </Link>
      <Link to='/' className="menu-item" href="/desserts">
        Rehyped Original
      </Link>
      <Link to='/' className="menu-item" href="/desserts">
        Return Policy
      </Link>
      <Link to='/' className="menu-item" href="/desserts">
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
