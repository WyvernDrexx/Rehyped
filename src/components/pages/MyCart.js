import React from "react";
import {
  CommonHeader,
  Container,
  Divider,
  UnauthorizedError
} from "../stateless";
import { useSelector, useDispatch } from "react-redux";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import { Row, Col, Spinner } from "react-bootstrap";
import { placeOrders } from "../../actions";

import CartList from "../CartList";

const MyCart = props => {
  const cartItems = useSelector(state => state.cart);
  const isRunning = useSelector(state => state.requestStatus.fetchCartItems);
  const isVerified = useSelector(state => state.token.isVerified);
  const dispatch = useDispatch();
  const isPlaceOrdersRunning = useSelector(
    state => state.requestStatus.placeOrders
  );

  let totalMRP = 0;
  let totalDiscount = 0;

  if (cartItems && cartItems.length > 0) {
    cartItems.forEach(item => {
      totalMRP += Number(item.price);
      totalDiscount += Number(item.discount);
    });
  }

  if (typeof isRunning === "undefined" || isRunning) {
    return (
      <div className="mt-6 mb-5">
        <Spinner animation="border" className="block-center" />
      </div>
    );
  } else if (!isVerified) {
    return <UnauthorizedError />;
  }

  const onCheckoutClick = _ => {
    dispatch(placeOrders());
  };

  return (
    <>
      <Container className="pt-5 pb-5">
        <CommonHeader
          header="ITEMS"
          subheader="TOTAL PRODUCTS"
          className="mb-3"
        />
        <Divider />
        <div className="flex-center pt-5">
          <CartList cartItems={cartItems} />
        </div>
      </Container>
      <div className="secondary-background-color pt-5 pb-5 mt-5">
        <Container>
          <CommonHeader
            header="COUPON"
            subheader="USE THE CODE TO GET DISCOUNTS"
          />
          <div>
            <input
              className="d-block mx-auto primary-input mt-5 w-100 w-md-40"
              placeholder="ENTER COUPON CODE"
            />
            <DarkButton
              className="mt-4 d-block mx-auto font-weight-bold w-100 w-md-40"
              title="CHECK"
            />
          </div>
        </Container>
      </div>
      <Container className="pt-5 pb-5 w-md-40">
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
                <p className="sub-header text-right">${totalMRP}</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={8} className="px-0">
                <p className="sub-header text-left">Shipping Charges</p>
              </Col>
              <Col className="px-0">
                <p className="sub-header text-right text-success font-weight-bold">
                  FREE
                </p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={8} className="px-0">
                <p className="sub-header text-left">Discount</p>
              </Col>
              <Col className="px-0">
                <p className="sub-header text-right text-success font-weight-bold">
                  {totalDiscount - totalMRP}
                </p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={8} className="px-0">
                <p className="sub-header  font-weight-bold text-left">
                  PAYABLE AMOUNT
                </p>
              </Col>
              <Col className="px-0">
                <p className="sub-header text-right font-weight-bold">
                  ${totalDiscount}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <PrimaryButton
          title="CHECKOUT"
          className={`w-100 w-md-40 mx-auto d-block mt-5 ${
            isPlaceOrdersRunning ? "status-running" : ""
          }`}
          onClick={onCheckoutClick}
        />
      </Container>
    </>
  );
};

export default MyCart;
