import React, { useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import history from "../../history";
import Loader from '../Loader';
import './ProductsList.scss';
const ListItem = props => {
  const { index, item } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const divIsLoaded = _ => {
    setIsLoaded(true);
  };

  const imagesSrc = process.env.REACT_APP_IMAGES_SRC;;

  return (
    <Col
      onClick={_ => history.push(`/products/${item._id}`)}
      key={index}
      xs={6}
      sm={4}
      lg={3}
      className="product-item mb-4 px-2"
      onLoad={divIsLoaded}
    >
      {isLoaded ? null : (
        <Loader
          className="absolute-center"
        />
      )}

      <Row className={`image-row ${isLoaded ? "" : "visibility-hidden"}`}>
        <img alt="This is null" src={
          item.image
          ? `${imagesSrc + item.image}`
          : `${imagesSrc + ""}`
        } />
      </Row>
      <Row className={`${isLoaded ? "" : "visibility-hidden"}`}>
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
