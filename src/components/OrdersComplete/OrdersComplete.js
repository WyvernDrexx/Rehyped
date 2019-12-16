import React from "react";
import Container from "../stateless/Container";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import { Divider } from "../stateless";

const OrdersComplete = props => {
  return (
    <>
      <div className="pt-5 secondary-background-color">
        <Container>
          <h1 className="header pb-3">THANK YOU</h1>
          <Divider />
          <p className="sub-header pt-3 pb-3 default-line-height">
            CONGRATULATIONS YOUR ORDER HAS BEEN SUCCESSFULLY PLACED, PLEASE
            CHECK YOUR EMAIL FOR MORE DETAILS.
          </p>
        </Container>
      </div>
      <Container className="pt-3">
        <DarkButton
          title="CONTINUE SHOPPING"
          className="w-100 w-md-40 d-block mx-auto"
        />
        <PrimaryButton
          title="MY ORDERS"
          className="w-100 w-md-40 d-block mx-auto mt-3 mb-6"
        />
      </Container>
    </>
  );
};

export default OrdersComplete;
