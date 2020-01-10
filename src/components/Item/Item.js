import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LightButton, PrimaryButton } from "../stateless/Buttons";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  addToCart,
  clearSelected,
  setSelected,
  showAlert,
  buyNow
} from "../../actions";
import QuadShowcase from "../QuadShowcase";
import Instructions from "../Media";
import { CommonHeader, Container } from "../stateless";
import ItemColors from "./ItemColors";
import ItemSizes from "./ItemSizes";

import "./Item.scss";

const Featured = props => {
  let { productId } = useParams();
  productId = productId || props.productId;
  const productIdRef = React.useRef();
  productIdRef.current = productId;
  const product = useSelector(state => state.selectedProduct);
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [itemOnCart, setItemOnCart] = useState(false);
  const isRunning = useSelector(state => state.requestStatus.addToCart);
  const { selectedColor } = useSelector(state => ({
    selectedColor: state.selectedProduct.color
  }));

  useEffect(
    _ => {
      if (product._id !== productIdRef.current) {
        dispatch(fetchProduct(productIdRef.current));
      }
      if (productIdRef.current === "featured") {
        productIdRef.current = product._id;
      }
    },
    [dispatch, product._id]
  );

  useEffect(
    _ => {
      return _ => dispatch(clearSelected());
    },
    [dispatch]
  );

  useEffect(
    _ => {
      if (cartItems.some(item => item._id === productIdRef.current)) {
        setItemOnCart(true);
      } else {
        setItemOnCart(false);
      }
    },
    [cartItems, productId]
  );

  const onAddToCartClick = _ => {
    dispatch(addToCart(product));
  };

  const onBuyItNowClick = _ => {
    dispatch(buyNow(product));
  };

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
        <Container>
          <Alert variant="danger">{product.error}</Alert>
        </Container>
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

        <Container>
          <Row className="mt-5 mx-0 mb-5 item-root">
            <Col className="px-0 flex-center">
              <QuadShowcase image={product.image} />
            </Col>

            <Col className="mt-5  mt-lg-0 px-0" lg={true}>
              <div className="">
                <p className="item-name font-weight-bold text-left">
                  {product.name}
                </p>
                <p className="mt-4 mr-4">
                  <span className="strikethrough item-price mr-4">
                    ₹{product.price}
                  </span>
                  <span className="sub-header">₹{product.discount}</span>
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

                <ItemColors
                  onClickFunc={(name, value) =>
                    dispatch(setSelected({ [name]: value }))
                  }
                  selectedColor={selectedColor}
                  className=""
                />

                <Row className="mt-4">
                  {itemOnCart ? (
                    <Col className="pr-3 pr-md-2" md={true}>
                      <LightButton
                        title="ON CART"
                        className="w-100 disabled cursor-auto"
                      />
                    </Col>
                  ) : (
                    <Col className="pr-3 pr-md-2" md={true}>
                      <LightButton
                        onClick={onAddToCartClick}
                        title="ADD TO CART"
                        className={`w-100 ${isRunning ? "status-running" : ""}`}
                      />
                    </Col>
                  )}
                  <Col className="px-lg-0 pr-3 pr-md-0 mt-4 mt-md-0" md={true}>
                    <PrimaryButton
                      onClick={onBuyItNowClick}
                      title="BUY IT NOW"
                      className="w-100"
                    />
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
        </Container>
        {props.instructions ? (
          <div className="secondary-background-color mt-6">
            <CommonHeader
              className="pt-6"
              header="DETAILS"
              subheader="PRODUCT INSTRUCTION"
            />

            <div className="px-0">
              <Instructions className="mx-0" />
            </div>
          </div>
        ) : null}
      </>
    );
  }
};

export default Featured;
