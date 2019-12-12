import React from "react";
import Container from "../stateless/Container";
import CommonHeader from "../stateless/CommonHeader";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactUs = props => {
  return (
    <>
      <div className="pt-6">
      <CommonHeader
        header="CONTACT US"
        subheader="HIT US UP WITH YOUR QUERIES"
        className="mb-5"
      />
      <div className="secondary-background-color pt-5 pb-5 mb-5">
        <Container>
          <Col className="px-0">
            <Row>
              <Col md={true}>
                <input
                  className="placeholder-left primary-input w-100 mb-4 mb-md-0"
                  placeholder="NAME"
                />
              </Col>
              <Col md={true}>
                <input
                  className="placeholder-left primary-input w-100 mb-4 mb-md-0"
                  placeholder="EMAIL"
                />
              </Col>
              <Col md={true}>
                <input
                  className="placeholder-left primary-input w-100 mb-4"
                  placeholder="PHONE NUMBER"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea
                  style={{
                    height: "60vh"
                  }}
                  className="primary-input w-100"
                  placeholder="YOUR MESSAGE"
                ></textarea>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
      <Container className="mb-5 ">
        <PrimaryButton title="SEND" className="w-100 w-md-40  d-block" />
        <Link to="/products">
          <DarkButton
            title="BACK TO STORE"
            className="w-100 w-md-40 d-block mt-3"
          />
        </Link>
      </Container>
    </div>
    </>
  );
};

export default ContactUs;
