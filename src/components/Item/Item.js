import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LightButton, PrimaryButton } from "../stateless/Buttons";
import { Row, Col, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  addToCart,
  clearSelected,
  setSelected,
  buyNow
} from "../../actions";
import QuadShowcase from "../QuadShowcase";
import Instructions from "../Media";
import { CommonHeader, Container } from "../stateless";
import ItemColors from "./ItemColors";
import ItemSizes from "./ItemSizes";

import "./Item.scss";
import Loader from "../Loader";

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
      if (product.uniqueUrl !== productIdRef.current) {
        dispatch(fetchProduct(productIdRef.current));
        if (productIdRef.current !== "featured") {
          window.scrollTo({
            top: 55,
            left: 0
          });
        }
      }
      if (productIdRef.current === "featured") {
        productIdRef.current = product.uniqueUrl;
      }
    },
    [dispatch, product.uniqueUrl]
  );

  useEffect(
    _ => {
      return _ => dispatch(clearSelected());
    },
    [dispatch]
  );

  useEffect(
    _ => {
      if (cartItems.some(item => item.uniqueUrl === productIdRef.current)) {
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

  const renderItem = _ => {
    if (Object.values(product).length === 0) {
      return (
        <>
          <Loader />
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
        <Row className="mx-0 item-root">
          <Col className="px-0 flex-center">
            <QuadShowcase
              image={product.image}
              secondaryImages={product.secondaryImages}
            />
          </Col>
          <Col className="px-0" lg={true}>
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

            <div className="position-lg-absolute bottom-0 mt-4 w-100">
              <h4 className="sub-header mb-1 text-left font-weight-bold">
                SIZE
              </h4>
              <ItemSizes sizes={product.sizes} className="mt-2 mb-3" />
              <h4 className="sub-header mt-2 text-left font-weight-bold">
                COLOURS
              </h4>
              <ItemColors
                selectColor={(name, value) =>
                  dispatch(setSelected({ [name]: value }))
                }
                selectedColor={selectedColor}
                colors={product.colors}
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
        </>
      );
    }
  };

  return (
    <>
      <Container>
        <div className="item-wrapper mt-4">{renderItem()}</div>
        <div className="mb-5 mt-5">
          <h4 className="sub-header mb-4 text-left font-weight-bold">
            Est. delivery in 7-10 business days via preferred courier.
          </h4>
          <p className="sub-header text-left">
            *Depending on the courier partner available at your pincode.
          </p>
        </div>
      </Container>
      {props.instructions ? (
        <div className="secondary-background-color mt-5">
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
};

export default Featured;
