import React, { useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import history from "../../history";
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
      className="product-item mb-5 px-2"
      onLoad={divIsLoaded}
    >
      {isLoaded ? null : (
        <Spinner
          className="absolute-center"
          animation="border"
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
          <p className="sub-header font-weight-bold text-left">
            {item.name.length > 23 ? item.name.slice(0, 23) + "..." : item.name}
          </p>
          <p className="mt-4 mr-4">
            <span className="strikethrough sub-header mr-4">${item.price}</span>
            <span className="sub-header">$1500</span>
          </p>
        </div>
      </Row>
    </Col>
  );
};

export default ListItem;
