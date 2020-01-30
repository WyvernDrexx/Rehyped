import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import history from "../../history";
import Loader from "../Loader";
import "./ProductsList.scss";
import ComingSoon from "./ComingSoon";

const ListItem = props => {
  const { index, item } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const divIsLoaded = _ => {
    setIsLoaded(true);
  };

  const imagesSrc = process.env.REACT_APP_IMAGES_SRC;

  if (item.isComingSoon) {
    return (
      <Col
        key={index}
        xs={6}
        sm={4}
        lg={3}
        className="product-item product-coming-soon user-select-none cursor-pointer mb-2"
        onLoad={divIsLoaded}
      >
        {isLoaded ? null : <Loader className="absolute-center" />}

        <Row
          className={`image-row mx-2 ${isLoaded ? "" : "visibility-hidden"}`}
        >
          <img
            alt="This is null"
            src={item.image ? `${imagesSrc + item.image}` : `${imagesSrc + ""}`}
          />
          <ComingSoon />
        </Row>
        <Row
          className={`mx-2 product-details ${
            isLoaded ? "" : "visibility-hidden"
          }`}
        >
          <div className="w-100 mt-4">
            <p className="sub-header text-transform-uppercase font-weight-bold text-left">
              {item.name.length > 23
                ? item.name.slice(0, 23) + "..."
                : item.name}
            </p>
            <p className="mt-4 mr-4">
              <span className="strikethrough sub-header mr-4">
                ₹{item.price}
              </span>
              <span className="sub-header">₹{item.discount}</span>
            </p>
          </div>
        </Row>
      </Col>
    );
  }

  return (
    <Col
      onClick={_ => history.push(`/products/${item._id}`)}
      key={index}
      xs={6}
      sm={4}
      lg={3}
      className="product-item hover cursor-pointer mb-2"
      onLoad={divIsLoaded}
    >
      {isLoaded ? null : <Loader className="absolute-center" />}
      <Row className={`image-row mx-2 ${isLoaded ? "" : "visibility-hidden"}`}>
        <img
          alt="This is null"
          src={item.image ? `${imagesSrc + item.image}` : `${imagesSrc + ""}`}
        />
      </Row>
      <Row
        className={`mx-2 product-details ${
          isLoaded ? "" : "visibility-hidden"
        }`}
      >
        <div className="w-100 mt-4">
          <p className="sub-header text-transform-uppercase font-weight-bold text-left">
            {item.name.length > 23 ? item.name.slice(0, 23) + "..." : item.name}
          </p>
          <p className="mt-4 mr-4">
            <span className="strikethrough sub-header mr-4">₹{item.price}</span>
            <span className="sub-header">₹{item.discount}</span>
          </p>
        </div>
      </Row>
    </Col>
  );
};

export default ListItem;
