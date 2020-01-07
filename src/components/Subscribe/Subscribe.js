import React, { useState } from "react";

import { PrimaryButton } from "../stateless/Buttons";
import {
  CommonHeader,
  Container,
  ErrorBlock,
  SuccessBlock
} from "../stateless";
import { Spinner } from "react-bootstrap";
import api from "../../api";
import "./Subscribe.scss";

const Subscribe = props => {
  const [email, setEmail] = useState(null);
  const [response, setResponse] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  const onSubscribe = async _ => {
    setShowSpinner(true);
    await api
      .post("/subscribe", { email })
      .then(resp => {
        setShowSpinner(false);
        if (resp.data.status && resp.data.message) {
          setResponse(resp.data);
        }
      })
      .catch(err => {
        setShowSpinner(false);
      });
  };

  const onChange = ({ value }) => {
    setEmail(value);
  };

  const renderResponse = _ => {
    return response ? (
      response.status === 200 ? (
        <SuccessBlock message={response.message} />
      ) : (
        <ErrorBlock message={response.message} />
      )
    ) : null;
  };


  return (
    <div className="secondary-background-color pt-5 pb-5 subscribe">
      <Container className="">
        <CommonHeader
          className="mb-5"
          header="NEWS LETTER"
          subheader=" SIGN UP TO GET DISCOUNTS ON
          PREMIUM PRODUCTS"
        />
        <div className="w-md-40 mb-3 mx-auto">{renderResponse()}</div>

        <input
          className="placeholder-center primary-input"
          placeholder="ENTER YOUR EMAIL"
          value={email}
          type="email"
          onChange={({ target }) => onChange(target)}
        />
        <PrimaryButton
          className={`mt-4 mx-auto d-block font-weight-bold ${showSpinner?"pointer-disabled progress-bar-striped progress-bar-animated":""}`}
          onClick={() => onSubscribe()}
          title="SUBSCRIBE"
        >
        </PrimaryButton>
      </Container>
    </div>
  );
};

export default Subscribe;
