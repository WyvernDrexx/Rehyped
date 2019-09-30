import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faCheckCircle,
  faShippingFast,
  faScroll
} from "@fortawesome/free-solid-svg-icons";

import "./Media.scss";

const CustomMedia = props => {
  const data = [
    {
      faIcon: faLock,
      top: "FULLY SECURED payment",
      bottom: "GURRANTEED"
    },
    {
      faIcon: faCheckCircle,
      top: "Premium Clothing Material",
      bottom: "100% Cotton"
    },
    {
      faIcon: faShippingFast,
      top: "FREE Shipping all over",
      bottom: "India"
    },
    {
      faIcon: faLock,
      top: "7 Day  return policy on",
      bottom: "Every Item You Purchase"
    }
  ];
  return (
    <div className={`w-md-50 ${props.className || ""}`}>
      {data.map((media, index) => {
        return (
          <Row key={index} className={`mt-5 mb-5 ${props.mediaStyle || ""}`}>
            <Col
              className="d-flex justify-content-center align-items-center"
              xs={4}
            >
              <FontAwesomeIcon className="media-icon" icon={media.faIcon} />
            </Col>
            <Col>
              <Row>
                <p className="sub-header text-left font-weight-bold pb-4">
                  {media.top}
                </p>
              </Row>
              <Row>
                <p className="sub-header text-left font-weight-bold">
                  {media.bottom}
                </p>
              </Row>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default CustomMedia;
