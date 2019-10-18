import React from "react";
import { LightButton, PrimaryButton } from "../stateless/Buttons";
import CommonHeader from "../stateless/CommonHeader";
import ItemSizes from "../stateless/ItemSizes";
import ItemColors from "../stateless/ItemColors";
import QuadShowcase from "../QuadShowcase";
import { Row, Col } from "react-bootstrap";

import "./Item.scss";

const Featured = props => {
  return (
    <>
      <CommonHeader
        className="mt-6"
        header="FEATURED"
        subheader="BEST SELLING DESIGNS OF THE WEEK"
      />
      <Row className="mt-5 mb-6 item-root">
        <Col className='px-0 flex-center'>
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
            <h4 className="sub-header mb-1 text-left font-weight-bold">SIZE</h4>
            <ItemSizes className="mt-2 mb-3" />
            <h4 className="sub-header mt-2 text-left font-weight-bold">
              COLOURS
            </h4>
            <ItemColors className="" />
            <Row className='mt-4'>
              <Col md={true}>
                <LightButton
                  title="ADD TO CART"
                  className="w-100"
                />
              </Col>
              <Col className='px-lg-0 mt-2 mt-md-0' md={true}>
                <PrimaryButton title="BUY IT NOW" className="w-100" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Featured;
