import React, { useState, useEffect } from "react";
import "./TopBanner.scss";

import Container from "../stateless/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

import Cookies from "../../utils/Cookies";

const TopBanner = props => {
  const [bannerDisplay, setBannerDisplay] = useState("disabled");
  const onCrossClick = _ => {
    setBannerDisplay("disabled");
    Cookies.set("banner", true, {}, 10080);
  };

  useEffect(_ => {
    const banner = Cookies.get("banner");
    if (banner !== true) {
      setBannerDisplay("enabled");
    }
  }, []);

  if (bannerDisplay === "enabled") {
    return (
      <div className="banner-box">
        <Container>
          <Row>
            <Col className={`${bannerDisplay}`} onClick={onCrossClick} xs={1}>
              <FontAwesomeIcon icon={faTimes} />
            </Col>
            <Col>
              <p className={`user-select-none sub-header text-center ${bannerDisplay}`}>
                EXTRA 50% OFF!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return null;
  }
};

export default TopBanner;
