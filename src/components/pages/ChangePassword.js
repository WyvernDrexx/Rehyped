import React, { useEffect } from "react";
import {
  Container,
  UnauthorizedError,
  ErrorBlock,
  SuccessBlock
} from "../stateless";
import { PrimaryButton } from "../stateless/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { onInputChange, onFormSubmit, clearForm } from "../../actions";

const ChangePassword = props => {
  const isVerified = useSelector(state => state.token.isVerified);
  const {
    password,
    newPassword,
    confirmPassword,
    message,
    status
  } = useSelector(state => state.form);
  const isRunning = useSelector(state => state.requestStatus.onFormSubmit);
  const dispatch = useDispatch();

  useEffect(_ => {
    return dispatch(clearForm());
  }, [dispatch]);

  if (!isVerified) {
    return <UnauthorizedError />;
  }

  const onChange = ({ name, value }) => {
    dispatch(onInputChange({ [name]: value }));
  };

  const onSubmit = _ => {
    dispatch(onFormSubmit("/change-password"));
  };

  const renderResponse = _ => {
    return (
      <div className="w-100 w-md-40 block-center mt-4">
        {status && status !== 200 ? (
          <ErrorBlock message={`${message}`.toUpperCase()} />
        ) : null}
        {status && status === 200 ? (
          <SuccessBlock message={`${message}`.toUpperCase()} />
        ) : null}
      </div>
    );
  };

  return (
    <>
      <div className="text-center">
        <Container className="mt-6 mb-5">
          <h5 className="default-letter-spacing font-weight-bolder text-left text-md-center">
            CHANGE PASSWORD
          </h5>
          <p className="sub-header text-left text-md-center">
            TYPE THE NEW PASSWORD BELOW
          </p>
        </Container>
        <div className="secondary-background-color pt-5 pb-5 mb-5">
          <Container className="">
            {renderResponse()}

            <input
              className="primary-input w-100 w-md-40 d-block mx-auto"
              placeholder="CURRENT PASSWORD"
              name="password"
              value={password}
              type="password"
              onChange={({ target }) => onChange(target)}
            />
            <input
              className="primary-input mt-4 w-100 w-md-40 d-block mx-auto"
              placeholder="NEW PASSWORD"
              name="newPassword"
              value={newPassword}
              type="password"
              onChange={({ target }) => onChange(target)}
            />
            <input
              className="primary-input mt-2 mb-4 w-100 w-md-40 d-block mx-auto"
              placeholder="CONFIRM PASSWORD"
              name="confirmPassword"
              value={confirmPassword}
              type="password"
              onChange={({ target }) => onChange(target)}
            />
            <PrimaryButton
              className={`mt-4 mx-auto d-block w-100 w-md-40 font-weight-bold ${
                isRunning ? "status-running" : ""
              }`}
              title="CHANGE PASSWORD"
              onClick={onSubmit}
            />
          </Container>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
