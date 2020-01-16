import React, {useEffect} from "react";
import Container from "../stateless/Container";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import { Divider } from "../stateless";
import { Link } from "react-router-dom";

const OrdersComplete = props => {

  useEffect(_ => {
    window.scrollTo(0,0);
  }, [])

  return (
    <>
      <div className="pt-5 mt-6 secondary-background-color">
        <Container>
          <h1 className="header pb-3">THANK YOU</h1>
          <Divider />
          <p className="sub-header pt-3 pb-3 default-line-height">
            CONGRATULATIONS YOUR ORDER HAS BEEN SUCCESSFULLY PLACED, PLEASE
            CHECK YOUR EMAIL FOR MORE DETAILS.
          </p>
        </Container>
      </div>
      <Container className="pt-5">
        <Link to="/products">
          <DarkButton
            title="CONTINUE SHOPPING"
            className="w-100 w-md-40 d-block mx-auto"
          />
        </Link>
        <Link to="/my-account">
          <PrimaryButton
            title="MY ACCOUNT"
            className="w-100 w-md-40 d-block mx-auto mt-3 mb-5"
          />
        </Link>
      </Container>
    </>
  );
};

export default OrdersComplete;
