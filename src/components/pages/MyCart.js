import React from "react";
import CommonHeader from "../stateless/CommonHeader";
import Container from "../stateless/Container";
import Divider from "../stateless/Divider";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import CartList from "../CartList";
import { Row, Col, Button } from "react-bootstrap";

const MyCart = props => {
  return (
    <>
      <Container className="pt-5 pb-5">
        <CommonHeader
          header="ITEMS"
          subheader="TOTAL PRODUCTS"
          className="mb-3"
        />
        <Divider />
        <div className="pt-5">
          <CartList />
        </div>
      </Container>
      <div className="secondary-background-color pt-4 pb-4 mt-5">
        <Container>
          <CommonHeader
            header="COUPON"
            subheader="USE THE CODE TO GET DISCOUNTS"
          />
          <div>
            <input
              className="placeholder-center d-block mx-auto primary-input mt-5 w-100 w-md-40"
              placeholder="ENTER YOUR EMAIL"
            />
            <DarkButton
              className="mt-4 d-block mx-auto font-weight-bold w-100 w-md-40"
              onClick={() => console.log("Clicked subscribe button!")}
              title="CHECK"
            />
          </div>
        </Container>
      </div>
      <Container className="pt-5 pb-5">
        <CommonHeader header="ORDER" subheader="SUMMARY" />
        <Divider className="mt-3 mb-5" />
        <Row className="mx-0">
          <Col>
            <Row className="mb-3">
              <Col className="px-0" xs={8}>
                <h5 className="sub-header font-weight-bolder text-left">
                  TOTAL MRP
                </h5>
                <p className="sub-header small text-left">
                  (Inclusive of all taxes)
                </p>
              </Col>
              <Col className="px-0">
                <p className="sub-header">$199</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={8} className="px-0">
                <p className="sub-header text-left">Shipping Charges</p>
              </Col>
              <Col className="px-0">
                <p className="sub-header text-success font-weight-bold">FREE</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={8} className="px-0">
                <p className="sub-header text-left">Discount</p>
              </Col>
              <Col className="px-0">
                <p className="sub-header text-success font-weight-bold">-$30</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={8} className="px-0">
                <p className="sub-header font-weight-bold text-left">
                  PAYABLE AMOUNT
                </p>
              </Col>
              <Col className="px-0">
                <p className="sub-header font-weight-bold">$159</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <PrimaryButton
          title="CHECKOUT"
          className="w-100 w-md-40 mx-auto d-block mt-5"
        />
      </Container>
    </>
  );
};

export default MyCart;
