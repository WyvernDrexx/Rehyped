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
import Featured from "../Featured";

const Home = props => {
  return (
    <>
      <SlideCarousel
        images={[
          "https://images.unsplash.com/photo-1532785450622-09a9fa83193a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc5d893956adcb5c46271e26c4a11008&auto=format&fit=crop&w=2250&q=80",
          "https://images.unsplash.com/photo-1502790671504-542ad42d5189?ixlib=rb-0.3.5&s=da4d3b0a41041f60ee409664746ca2d6&auto=format&fit=crop&w=2250&q=80",
          "https://images.unsplash.com/photo-1518242340236-fd1dd715ba89?ixlib=rb-0.3.5&s=e71132ec1e8da8b1c33d8075b91dad88&auto=format&fit=crop&w=934&q=80"
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
            <img className="w-100" src="/imgs/square.jpg" />
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
              className="d-block mx-auto mx-md-0 pt-3 pb-3 mb-3 mb-md-0 position-md-absolute mt-3 bottom-0 text-center text-md-left"
              title="GO TO STORE"
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
      <Container className="pr-0">
        {/* <Carousel /> */}
      </Container>
      <Container>
      <Featured />
      </Container>
      <Container>
        <h4 className="sub-header mb-4 text-center font-weight-bold">
          Est. delivery in 7-10 business days via preferred courier.
        </h4>
        <p className="sub-header text-center">
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
      <Container className="secondary-background-color pt-5 pb-5">
        <CommonHeader
          className="mb-3"
          header="NEWS LETTER"
          subheader=" SIGN UP TO GET DISCOUNTS ON
          PREMIUM PRODUCTS"
        />
        <input
          className="placeholder-center primary-input w-100 mt-5"
          placeholder="ENTER YOUR EMAIL"
        />
        <PrimaryButton
          className="mt-4 pt-3 pb-3 mx-auto d-block font-weight-bold w-100"
          onClick={() => console.log("Clicked subscribe button!")}
          title="SUBSCRIBE"
        />
      </Container>
    </>
  );
};

export default Home;
