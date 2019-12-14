import React, { useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import history from "../../history";

const ListItem = props => {
  const { index, item } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const divIsLoaded = _ => {
    setIsLoaded(true);
  };

  return (
    <Col
      onClick={_ => history.push(`/products/${item.productId}`)}
      key={index}
      xs={6}
      sm={4}
      lg={3}
      className="product-item mb-5"
      onLoad={divIsLoaded}
    >
      {isLoaded ? null : (
        <Spinner
          className="absolute-center"
          animation="border"
        />
      )}

      <Row className={`${isLoaded ? "" : "visibility-hidden"}`}>
        <img alt="This is null" src={item.image} />
      </Row>
      <Row className={`${isLoaded ? "" : "d-none"}`}>
        <div className="mt-4">
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
