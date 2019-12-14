import React, { useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { fetchProducts } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import history from "../../history";

import "./ProductsList.scss";
import ImgLoader from "../ImgLoader";

const renderList = list => {
  return list.map((item, index) => {
    return (
      <Col
        onClick={_ => history.push(`/products/${item.productId}`)}
        key={index}
        xs={6}
        sm={4}
        lg={3}
        className="product-item mb-5"
      >
        <Row>
          <ImgLoader alt="This is null" src={item.image} />
          {/* <img alt="This is null" src={item.image} /> */}
        </Row>
        <Row>
          <div className="mt-4">
            <p className="sub-header font-weight-bold text-left">
              {item.name.length > 23
                ? item.name.slice(0, 23) + "..."
                : item.name}
            </p>
            <p className="mt-4 mr-4">
              <span className="strikethrough sub-header mr-4">
                ${item.price}
              </span>
              <span className="sub-header">$1500</span>
            </p>
          </div>
        </Row>
      </Col>
    );
  });
};

const ProductsList = props => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(
    _ => {
      if (Object.values(products).length === 0) dispatch(fetchProducts());
    },
    [products, dispatch]
  );

  useEffect(_ => {
    window.onload = _ => {
      if (window.pageYOffset > 1650) {
        window.scrollTo(0, 0);
      }
    };
  }, []);

  if (Object.values(products).length === 0) {
    return (
      <>
        <div className="mt-4 mb-4">
          <Spinner
            variant="dark"
            animation="border"
            className="d-block mx-auto"
          />
        </div>
      </>
    );
  }

  return (
    <div className="flex-center">
      <Row className="products-list justify-content-center">
        {renderList(products)}
      </Row>
    </div>
  );
};

export default ProductsList;
