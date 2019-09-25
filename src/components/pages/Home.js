import React from "react";
import Container from "../stateless/Container";
import FullScreenContainer from "../stateless/FullScreenContainer";
import Divider from "../stateless/Divider";
import { DarkButton, LightButton, PrimaryButton } from "../stateless/Buttons";
import Carousel from "../Carousel";
import QuadShowcase from "../QuadShowcase";
import ItemSizes from "../ItemSizes";
import ItemColors from "../ItemColors";
import Media from "../Media";
import TriShowCase from "../TriShowcase";
import CommonHeader from "../stateless/CommonHeader";

const Home = props => {
  return (
    <>
      <div className="mb-5">
        <FullScreenContainer
          style={{ backgroundImage: "url('/imgs/minions.jpg')" }}
        />
      </div>
      <Container className="mt-6 mb-4">
        <CommonHeader
          header="NEW ARRIVALS"
          subheader="CHECKOUT OUR LATEST CREATIONS"
        />
        <Divider className="mt-4 mb-5" />
        <img className="w-100 mt-2 mb-3" src="/imgs/square.jpg" />
        <Divider className="mt-4 mb-5" />
        <p className="sub-header mb-3">
          THE LATEST HANDICRAFT <br /> DESIGNS TO ENHANCE THE <br /> INNER YOU
        </p>
        <p className="sub-header mb-4">
          KNOW EACH ONE OF THE <br /> ASPECTS OF YOUR LIFE, GET <br /> THE{" "}
          <span className="primary-color">HYPE</span> WITHOUT <br /> EVEN
          CHASING FOR IT
        </p>
        <DarkButton
          className="mx-auto d-block pt-3 pb-3 mb-5 mt-3"
          title="GO TO STORE"
        />
        <CommonHeader header="MERCH" subheader="ANDROCRUNCH ORIGINALS" />
        <Divider className="mt-4 mb-4" />
      </Container>
      <Carousel />
      <Container>
        <CommonHeader
          className="mt-6"
          header="FEATURED"
          subheader="BEST SELLING DESIGNS OF THE WEEK"
        />
        <Divider className="mt-4 mb-4" />
        <QuadShowcase />
        <Divider className="mb-4 mt-4" size="full" />
        <h4 className="sub-header mb-4 text-left font-weight-bold">SIZE</h4>
        <ItemSizes className="mt-2 mb-5" />
        <h4 className="sub-header mb-4 text-left font-weight-bold">COLOURS</h4>
        <ItemColors className="mb-6" />
        <LightButton title="ADD TO CART" className="w-100 pt-3 pb-3 mb-3" />
        <PrimaryButton title="BUY IT NOW" className="w-100 pt-3 pb-3 mb-5" />
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
        <Media className="mt-4 mb-6" />
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
        <Divider />
      </Container>
    </>
  );
};

export default Home;
