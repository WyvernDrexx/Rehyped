import React from "react";

import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Container, CommonHeader, Divider } from "../stateless";
import { DarkButton } from "../stateless/Buttons";

import Carousel from "../Carousel";
import Media from "../Media";
import TriShowCase from "../TriShowcase";
import SlideCarousel from "../SlideCarousel";
import ProductItem from "../Item";
import Subscribe from "../Subscribe";

const Home = props => {
  return (
    <>
      <SlideCarousel
        images={["/imgs/wide1.jpg", "/imgs/wide2.jpg", "/imgs/wide3.jpg"]}
      />
      <Container className="mt-6 mb-4">
        <CommonHeader
          header="NEW ARRIVALS"
          subheader="CHECKOUT OUR LATEST CREATIONS"
        />
        <Divider className="mt-4 mb-5" />
        <Row className="mt-5">
          <Col md>
            <img
              alt="This is null"
              className="w-100 w-sm-75"
              src="/imgs/500x600.jpeg"
            />
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
        <CommonHeader
          className="mt-6"
          header="MERCH"
          subheader="ANDROCRUNCH ORIGINALS"
        />
        <Divider className="mt-4 mb-4" />
      </Container>
      <div>
        <Carousel />
      </div>
      <Container className="mt-6">
        <ProductItem instructions={false} productId="1" />
      </Container>
      <Container>
        <CommonHeader
          className="mt-6"
          header="ABILITIES"
          subheader="WHAT MAKES US UNIQUE"
        />
        <Divider className="mt-4 mb-4" />
      </Container>
      <Media className="mt-4 mb-6 mx-auto" />
      <Container className="mb-5 pb-3">
        <CommonHeader
          className="mb-3"
          header="INSTAGRAM"
          subheader="FOLLOW US FOR GIVEAWAYS"
        />
        <Divider />
        <TriShowCase className="mt-6" />
      </Container>
      <Subscribe />
    </>
  );
};

export default Home;
