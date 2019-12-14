import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LightButton, PrimaryButton } from "../stateless/Buttons";
import CommonHeader from "../stateless/CommonHeader";
import ItemSizes from "../stateless/ItemSizes";
import ItemColors from "../stateless/ItemColors";
import QuadShowcase from "../QuadShowcase";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Instructions from "../Media";
import Container from "../stateless/Container";

import { fetchProduct } from "../../actions";

import "./Item.scss";

const Featured = props => {
  let { productId } = useParams();
  const product = useSelector(state => state.selectedProduct);
  const dispatch = useDispatch();

  useEffect(_ => {
    if (product.productId !== productId) dispatch(fetchProduct(productId));
  }, []);
  
  if (Object.values(product).length === 0) {
    return (
      <>
        <Spinner
          variant="dark"
          animation="border"
          className="block-center mt-5 mb-5"
        />
      </>
    );
  } else if (product.error) {
    return (
      <>
        <Alert variant="danger">{product.error}</Alert>
      </>
    );
  } else {
    return (
      <>
        <CommonHeader
          className=""
          header="FEATURED"
          subheader="BEST SELLING DESIGNS OF THE WEEK"
        />
        <Row className="mt-5 mx-0 mb-5 item-root">
          <Col className="px-0 flex-center">
            <QuadShowcase image={product.image} />
          </Col>
          <Col className="mt-5  mt-lg-0 px-0" lg={true}>
            <div className="">
              <p className="item-name font-weight-bold text-left">
                TOKYO GHOUL Ken Kaneki - Anime
                <br /> Full Sleeves T-Shirt
              </p>
              <p className="mt-4 mr-4">
                <span className="strikethrough item-price mr-4">$500</span>
                <span className="sub-header">$200</span>
              </p>
            </div>
            <div className="position-lg-absolute bottom-0 mt-4">
              <h4 className="sub-header mb-1 text-left font-weight-bold">
                SIZE
              </h4>
              <ItemSizes className="mt-2 mb-3" />
              <h4 className="sub-header mt-2 text-left font-weight-bold">
                COLOURS
              </h4>
              <ItemColors className="" />
              <Row className="mt-4">
                <Col className="pr-3 pr-md-2" md={true}>
                  <LightButton title="ADD TO CART" className="w-100" />
                </Col>
                <Col className="px-lg-0 pr-3 pr-md-0 mt-4 mt-md-0" md={true}>
                  <PrimaryButton title="BUY IT NOW" className="w-100" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className="mb-6">
          <h4 className="sub-header mb-4 text-left font-weight-bold">
            Est. delivery in 7-10 business days via preferred courier.
          </h4>
          <p className="sub-header text-left">
            *Depending on the courier partner available at your pincode.
          </p>
        </div>
        <div className="secondary-background-color mt-6">
          <CommonHeader header="DETAILS" subheader="PRODUCT INSTRUCTION" />
          <Container className="px-0">
            <Instructions />
          </Container>
        </div>
      </>
    );
  }
};

export default Featured;
