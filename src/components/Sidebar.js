import React from "react";
import { slide as Menu } from "react-burger-menu";
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
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
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
