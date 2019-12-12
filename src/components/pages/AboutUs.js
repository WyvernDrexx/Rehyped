import React from "react";
import Container from "../stateless/Container";
import CommonHeader from "../stateless/CommonHeader";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import Header from "../Header";
const AboutUs = props => {
  return (
    <>
    <Header />
      <Container className="mt-6">
        <CommonHeader
          header="ABOUT US"
          subheader="WANNA KNOW MORE?"
          className="mb-5"
        />
      </Container>
      <div className="secondary-background-color pt-3 pb-3">
        <Container>
          <p className="header text-left pb-1">HELLO,</p>
          <p className="sub-header text-left default-line-height">
            WE ARE REHYPED, THE NEXT BIG CLOTHING LINEUP. WE STARTED THIS
            BECAUSE WHAT A HUMAN VISION SHOULD BE TO ENHANCE THEIR LIVES. AND
            WANT TO CHANGE WHOLE EXPERIENCE BY WHICH YOU CAN LOOK YOUR BEST
            BECAUSE YOU DESERVE TO BE.
          </p>
        </Container>
      </div>
      <Container className="pt-5">
        <p className="text-left sub-header default-line-height">
          THANK YOU SO MUCH FOR YOUR TIME IF YOU ARE READING THIS, IT MEANS A
          LOT TO US.
        </p>
        <div>
          <PrimaryButton
            title="SEND US A DM"
            className="w-100 w-md-40 mx-auto d-block mt-5"
          />
          <DarkButton 
            className="w-100 w-md-40 mx-auto d-block mt-5 mb-5"
          title="STORE" />
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
