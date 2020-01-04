import React, { useEffect } from "react";
import { Container, CommonHeader, Divider } from "../stateless";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { PrimaryButton } from "../stateless/Buttons";
import { placeOrder } from "../../actions";
export default _ => {
  const toBuyProduct = useSelector(state => state.orders.buyNow);
  const isPlaceOrderRunning = useSelector(
    state => state.requestStatus.placeOrder
  );
  const dispatch = useDispatch();

  const onPlacingOrder = _ => {
    dispatch(placeOrder());
  };

  useEffect(_ => {
    window.scrollTo(0, 550);
  }, []);

  if (toBuyProduct && toBuyProduct._id) {
    return (
      <div className="mt-6 mb-5">
        <Container>
          <Card className="block-center" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`http://localhost:8000/images/products/${toBuyProduct.image}`}
            />
            <Card.Body>
              <Card.Title>{toBuyProduct.name}</Card.Title>
            </Card.Body>
          </Card>
          <CommonHeader className="mt-5" header="ORDER" subheader="SUMMARY" />
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
                  <p className="sub-header text-right">{toBuyProduct.price}</p>
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
                    {Number(toBuyProduct.discount - toBuyProduct.price)}
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
                    {toBuyProduct.discount}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <PrimaryButton
            onClick={onPlacingOrder}
            title="CHECKOUT"
            className={`w-100 w-md-40 mx-auto d-block mt-5 ${
              isPlaceOrderRunning ? "status-running" : ""
            }`}
          />
        </Container>
      </div>
    );
  }
  return <div className="mt-6 mb-5">No products to order!</div>;
};
