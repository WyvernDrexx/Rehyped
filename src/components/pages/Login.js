import React, { useEffect } from "react";
import {
  Container,
  CommonHeader,
  ErrorBlock,
  SuccessBlock,
  UnauthorizedError
} from "../stateless";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import { Link } from "react-router-dom";
import {
  onFormSubmit,
  onInputChange,
  setToken,
  clearForm
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const Login = props => {
  const dispatch = useDispatch();
  const formState = useSelector(state => state.form);
  const isRunning = useSelector(state => state.requestStatus.onFormSubmit);
  const onChange = ({ name, value }) => {
    dispatch(onInputChange({ [name]: value }));
  };

  const isVerified = useSelector(state => state.token.isVerified);

  const onSubmit = _ => {
    dispatch(onFormSubmit("/login"));
  };

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

  const renderForm = _ => {
    return (
      <form>
        <input
          className="primary-input w-100 d-block mx-auto"
          placeholder="EMAIL"
          type="email"
          name="email"
          value={formState.email}
          onChange={({ target }) => onChange(target)}
        />
        <input
          className="primary-input mt-4 mb-3 w-100 d-block mx-auto"
          placeholder="PASSWORD"
          type="password"
          name="password"
          value={formState.password}
          onChange={({ target }) => onChange(target)}
        />
        <PrimaryButton
          className={`mt-4 mx-auto d-block w-100 font-weight-bold ${
            isRunning ? "status-running" : ""
          }`}
          title="LOGIN"
          onClick={onSubmit}
        ></PrimaryButton>
        <Link
          className="sub-header text-left  d-block mt-3"
          to="/forgot-password"
        >
          FORGOT PASSWORD?
        </Link>
      </form>
    );
  };

  useEffect(
    _ => {
      if (formState.token) {
        dispatch(setToken(formState.token));
      }
    },
    [formState.token]
  );

  useEffect(_ => {
    return _ => dispatch(clearForm());
  }, []);

  if (isVerified) {
    return <UnauthorizedError to="/products" isVerified={isVerified} />;
  }

  return (
    <>
      <div className="text-center mt-6">
        <CommonHeader
          header="LOGIN"
          subheader="WELCOME BACK"
          className="mb-5"
        />

        <div className="secondary-background-color pt-5 pb-5 mb-5">
          <Container className="w-md-40">
            {renderResponse()}
            {renderForm()}
          </Container>
        </div>
        <Container className="mb-5 w-md-40">
          <DarkButton
            className="mt-4 mx-auto d-block w-100  font-weight-bold"
            title="FIRST TIME HERE?"
          />
        </Container>
      </div>
    </>
  );
};

export default Login;
