import React from "react";

import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Container, CommonHeader, Divider } from "../stateless";
import { DarkButton } from "../stateless/Buttons";

import Carousel from "../Carousel";
import Media from "../Media";
import ProductItem from "../Item";
import Subscribe from "../Subscribe";
import SlideShow from "../SlideShow";

import "./Home.scss";

const Home = props => {
  return (
    <div className="mt-5">
      <SlideShow />
      <Container className="mt-5 mb-4">
        <CommonHeader
          header="NEW ARRIVALS"
          subheader="CHECKOUT OUR LATEST CREATIONS"
        />
        <Divider className="mt-4" />
        <Row className="mt-5">
          <Col md>
            <div className="new-arrival-img-wrapper">
              <img
                alt="This is null"
                className="w-100 w-md-75"
                src="/imgs/500x600.jpeg"
              />
            </div>
          </Col>
          <Col className="position-relative" md>
            <div>
              <Divider className="mt-5 d-md-none mb-5" />
              <p className="sub-header mb-3 text-md-left">
                THE LATEST HANDICRAFT <br /> DESIGNS TO ENHANCE THE <br /> INNER
                YOU
              </p>
              <p className="sub-header text-md-left mb-5">
                KNOW EACH ONE OF THE <br /> ASPECTS OF YOUR LIFE, GET <br /> THE{" "}
                <span className="primary-color">HYPE</span> WITHOUT <br /> EVEN
                CHASING FOR IT
              </p>
            </div>
            <Link to="/products">
              <DarkButton
                className="d-block pt-3 pb-3 mx-auto mx-md-0 mb-3 mb-md-0 position-md-absolute mt-3 bottom-0 text-center text-md-left"
                title="GO TO STORE"
              />
            </Link>
          </Col>
        </Row>
      </Container>
      <CommonHeader
        className="mt-5"
        header="MERCH"
        subheader="REHYPED ORIGINALS"
      />
      <Divider className="mt-4 mb-4" />
      <div>
        <Carousel />
      </div>
      <Container className="mt-5 px-0">
      <CommonHeader
          header="FEATURED"
          subheader="BEST SELLING DESIGN OF THE WEEK"
          className="mb-4"
        />
        <ProductItem productId={"featured"} instructions={false} />
      </Container>
      <CommonHeader
          className="mt-5"
          header="ABILITIES"
          subheader="WHAT MAKES US UNIQUE"
        />
        <Divider className="mt-4 mb-4" />
      <Media className="mx-auto" />
      <Subscribe />
    </div>
  );
};

export default Home;
