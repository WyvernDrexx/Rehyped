import React from "react";
import { LightButton, PrimaryButton } from "./stateless/Buttons";
import Container from "./stateless/Container";
import CommonHeader from "./stateless/CommonHeader";
import Divider from "./stateless/Divider";
import ItemSizes from "./ItemSizes";
import ItemColors from "./ItemColors";
import QuadShowcase from "./QuadShowcase";
import { Row, Col } from "react-bootstrap";

import "./styles/Featured.scss";

const Featured = props => {
  return (
    <Container>
      <CommonHeader
        className="mt-6"
        header="FEATURED"
        subheader="BEST SELLING DESIGNS OF THE WEEK"
      />
      <Row className="mt-5 mb-6">
        <Col lg={true}>
          <QuadShowcase />
        </Col>
        <Col className="mt-5  mt-lg-0" lg={true}>
          <div className="">
            <p className="sub-header font-weight-bold text-left">
              TOKYO GHOUL Ken Kaneki - Anime
              <br /> Full Sleeves T-Shirt
            </p>
            <p className="mt-4 mr-4">
              <span className="strikethrough sub-header mr-4">$500</span>
              <span className="sub-header">$200</span>
            </p>
          </div>
          <div className="position-lg-absolute bottom-0 mt-4">
            <h4 className="sub-header mb-4 text-left font-weight-bold">SIZE</h4>
            <ItemSizes className="mt-2 mb-2" />
            <h4 className="sub-header mb-4 text-left font-weight-bold">
              COLOURS
            </h4>
            <ItemColors className="" />
            <LightButton title="ADD TO CART" className="w-100 pt-3 pb-3 mb-3 mt-3" />
            <PrimaryButton
              title="BUY IT NOW"
              className="w-100 pt-3 pb-3"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );

  return (
    <Container>
      <Divider className="mt-4 mb-4" />
      <Divider className="mb-4 mt-4" size="full" />
    </Container>
  );
};

export default Featured;
