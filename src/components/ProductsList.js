import React from "react";
import Container from "./stateless/Container";
import { Row, Col } from "react-bootstrap";

import "./styles/ProductsList.scss";

const renderList = (list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) => {
  return(
    list.map((item, index) => {
      return (
        <Col key={index} xs={6} sm={4} lg={3} className="product-item px-2 mb-5">
        <Row>
          <img src="/imgs/500x600.jpeg" />
        </Row>
        <Row>
          <div className="mt-4">
            <p className="sub-header font-weight-bold text-left">
              TOKYO GHOUL Ken Kaneki - Anime
            </p>
            <p className="mt-4 mr-4">
              <span className="strikethrough sub-header mr-4">$500</span>
              <span className="sub-header">$200</span>
            </p>
          </div>
        </Row>
      </Col>
      );
    })
  );
};

const ProductsList = props => {
  return (
    <Container className='flex-center'>
      <Row className="products-list justify-content-center">
        {renderList()}
      </Row>
    </Container>
  );
};

export default ProductsList;
