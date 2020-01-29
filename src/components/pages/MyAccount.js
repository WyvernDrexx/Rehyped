import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { Container, UnauthorizedError } from "../stateless";
import { PrimaryButton, DarkButton } from "../stateless/Buttons";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onLogout, getOrders } from "../../actions";

import history from "../../history";
import OrdersList from "../Orders";
import ShippingDetails from "../ShippingDetails";

import "./MyAccount.scss";
import Loader from "../Loader";

const MyAccount = props => {
  const fullName = useSelector(state => state.token.fullName);
  const isVerified = useSelector(state => state.token.isVerified);
  const orders = useSelector(state => state.orders.list);
  const [ordersVisibility, setOrdersVisibility] = useState(false);
  const [shippingVisibility, setShippingVisibility] = useState(false);
  const isOrderFetching = useSelector(state => state.requestStatus.getOrders);
  const dispatch = useDispatch();
  const { section } = useParams();

  const logout = _ => {
    dispatch(onLogout());
    history.push("/products");
  };

  useEffect(
    _ => {
      if (section && section === "orders") {
        setOrdersVisibility(true);
      } else if (section && section === "shipping-details") {
        setShippingVisibility(true);
      }
    },
    [section]
  );

  useEffect(
    _ => {
      if (isVerified) {
        dispatch(getOrders());
      }
    },
    [isVerified, dispatch]
  );
  const renderCartList = _ => {
    if (ordersVisibility) {
      if (typeof isOrderFetching === "undefined" || isOrderFetching) {
        return (
          <div className="pt-4 pb-4">
            <Loader animation="border" className="block-center" />
          </div>
        );
      }
      return (
        <div className="bg-white pt-2 pb-1">
          <OrdersList orders={orders} className="mt-5" />
        </div>
      );
    } else {
      return null;
    }
  };

  const renderShippingDetails = _ => {
    if (shippingVisibility) {
      return <ShippingDetails />;
    } else {
      return null;
    }
  };

  const onShippingDetailsClick = _ => {
    setOrdersVisibility(false);
    
    setShippingVisibility(!shippingVisibility);
    if(shippingVisibility){
      window.scrollTo(0, 205);
    }
  };

  const onOrdersClick = _ => {
    setShippingVisibility(false);
    setOrdersVisibility(!ordersVisibility);
  };

  const renderArrow = val => {
    if (val) {
      return <FontAwesomeIcon icon={faChevronUp} />;
    } else {
      return <FontAwesomeIcon icon={faChevronDown} />;
    }
  };

  if (!isVerified) {
    return <UnauthorizedError />;
  }

  return (
    <>
      <div>
        <Container className="mt-5 mb-5">
          <h1 className="header text-left">HEY, {fullName}</h1>
          <p className="sub-header text-left">HERE'S ALL THE DETAILS</p>
        </Container>
        <div className="secondary-background-color">
          <div className="my-account pt-2 pb-2">
            <div className=" options">
              <Container>
                <p
                  onClick={onOrdersClick}
                  className="pt-3 pb-3 sub-header font-weight-bolder text-left"
                >
                  ORDERS {renderArrow(ordersVisibility)}
                </p>
              </Container>
              <div className="bg-white">
                <Container className="bg-white">{renderCartList()}</Container>
              </div>
            </div>
            <div className=" options">
              <Container>
                <p
                  onClick={onShippingDetailsClick}
                  className="sub-header font-weight-bolder text-left pt-3 pb-3"
                >
                  SHIPPING DETAILS {renderArrow(shippingVisibility)}
                </p>
              </Container>
              {renderShippingDetails()}
            </div>
            <div className="options">
              <Container>
                  <p onClick={() => history.push("/change-password")} className="pb-3 pt-3 sub-header font-weight-bolder text-left">
                    CHANGE PASSWORD <FontAwesomeIcon icon={faChevronRight} />
                  </p>
              </Container>
            </div>
            <div className="options">
              <Container>
                <p
                  onClick={() => history.push("/mycart")}
                  className="pt-3 pb-3 sub-header font-weight-bolder text-left"
                >
                  TRACK ORDERS <FontAwesomeIcon icon={faChevronRight} />
                </p>
              </Container>
            </div>
          </div>
        </div>
        <Container className="mt-5 mb-5">
          <DarkButton
            className="w-100 mb-5 w-md-40 d-block mx-auto"
            title="LOGOUT"
            onClick={logout}
          />
          <Link className="sub-header d-block mb-2" to="/help">
            NEED HELP?
          </Link>
          <Link to="/contact-us">
            <PrimaryButton
              className="w-100 w-md-40 d-block mx-auto"
              title="CONTACT US"
            />
          </Link>
        </Container>
      </div>
    </>
  );
};

export default MyAccount;
