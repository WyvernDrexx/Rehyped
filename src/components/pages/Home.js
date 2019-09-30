import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "../stateless/Container";
import Divider from "../stateless/Divider";
import { DarkButton, LightButton, PrimaryButton } from "../stateless/Buttons";
import Carousel from "../Carousel";
import Media from "../Media";
import TriShowCase from "../TriShowcase";
import CommonHeader from "../stateless/CommonHeader";
import SlideCarousel from "../SlideCarousel";
import ProductItem from "../Item";
import history from "../../history";
import Subscribe from '../Subscribe';


const Home = props => {
  return (
    <>
      <SlideCarousel
        images={[
          "/imgs/wide1.jpg",
          "/imgs/wide2.jpg",
          "/imgs/wide3.jpg"
        ]}
      />
      <Container className="mt-6 mb-4">
        <CommonHeader
          header="NEW ARRIVALS"
          subheader="CHECKOUT OUR LATEST CREATIONS"
        />
        <Divider className="mt-4 mb-5" />
        <Row className="mt-5">
          <Col md>
            <img className="w-100" src="/imgs/500x600.jpeg" />
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
            <DarkButton
              className="d-block mx-auto mx-md-0 mb-3 mb-md-0 position-md-absolute mt-3 bottom-0 text-center text-md-left"
              title="GO TO STORE"
              onClick={_ => history.push("/products")}
            />
          </Col>
        </Row>

        <CommonHeader
          className="mt-6"
          header="MERCH"
          subheader="ANDROCRUNCH ORIGINALS"
        />
        <Divider className="mt-4 mb-4" />
      </Container>
      <Container className="px-0"><Carousel /></Container>
      <Container>
        <ProductItem />
      </Container>
      <Container>
        <h4 className="sub-header mb-4 text-left font-weight-bold">
          Est. delivery in 7-10 business days via preferred courier.
        </h4>
        <p className="sub-header text-left">
          *Depending on the courier partner available at your pincode.
        </p>
      </Container>
      <Container>
        <CommonHeader
          className="mt-6"
          header="ABILITIES"
          subheader="WHAT MAKES US UNIQUE"
        />
        <Divider className="mt-4 mb-4" />
        <Media className="mt-4 mb-6 w-md-50 mx-auto" />
      </Container>
      <Container className="mb-6">
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
