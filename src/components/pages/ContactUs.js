import React from "react";
import { Container, CommonHeader, ErrorBlock, SuccessBlock } from "../stateless";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { onFormSubmit, onInputChange } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const ContactUs = props => {
  const { isVerified } = useSelector(state => state.token);
  const formState = useSelector(state => state.form);
  const dispatch = useDispatch();
  
  const onSubmit = _ => {
    dispatch(onFormSubmit("/contact-us"));
  };
  
  const onChange = ({name, value}) => {
    dispatch(onInputChange({[name]: value}));
  }

  if (!isVerified) {
    return (
      <div className="pt-6 pb-5">
        <Container>
          <ErrorBlock message="Please login to continue." />
        </Container>
      </div>
    );
  }

  const renderResponse = _ => {
    return (
      <div className="block-center mt-4">
        {formState.status && formState.status !== 200 ? (
          <ErrorBlock message={`${formState.message}`.toUpperCase()} />
        ) : null}
        {formState.status && formState.status === 200 ? (
          <SuccessBlock message={`${formState.message}`.toUpperCase()} />
        ) : null}
      </div>
    );
  };

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
            {renderResponse()}
            <Col className="px-0">
              <Row>
                <Col>
                  <textarea
                    style={{
                      height: "60vh"
                    }}
                    className="primary-input w-100"
                    placeholder="YOUR MESSAGE"
                    name="contactMessage"
                    value={formState.contactMessage}
                    onChange={({target}) => onChange(target)}
                  ></textarea>
                </Col>
              </Row>
            </Col>
          </Container>
        </div>
        <Container className="mb-5 ">
          <PrimaryButton
            onClick={onSubmit}
            title="SEND"
            className="w-100 w-md-40  d-block"
          />
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
