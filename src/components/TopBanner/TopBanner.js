import React, { useState, useEffect } from "react";
import "./TopBanner.scss";

import Container from "../stateless/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import { Cookies } from "react-cookie";

const TopBanner = props => {
  const [bannerDisplay, setBannerDisplay] = useState("show-p-false");
  const cookie = new Cookies();
  const onCrossClick = _ => {
    setBannerDisplay(" show-p-false ");
    cookie.set("bannerClicked", "true");
  };

  useEffect(_ => {
    const bannerClicked = cookie.get("bannerClicked");
    if (bannerClicked !== "true") {
      setBannerDisplay("");
    }
  }, []);

  return (
    <div className="banner-box">
      <Container>
        <Row>
          <Col className={`${bannerDisplay}`} onClick={onCrossClick} xs={1}>
            <FontAwesomeIcon icon={faTimes} />
          </Col>
          <Col>
            <p className={`sub-header text-center ${bannerDisplay}`}>
              EXTRA 50% OFF!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBanner;
