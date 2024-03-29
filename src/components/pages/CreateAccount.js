import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkButton, PrimaryButton } from "../stateless/Buttons";
import { Container, Checkbox, ErrorBlock, SuccessBlock } from "../stateless";
import { onInputChange, onFormSubmit, clearForm } from "../../actions";
import { Link } from "react-router-dom";

const CreateAccount = (props) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const formState = useSelector((state) => state.form);
  const isRunning = useSelector((state) => state.requestStatus.onFormSubmit);

  const onChange = ({ name, value }) => {
    dispatch(onInputChange({ [name]: value }));
  };

  const onCheckboxChange = (_) => {
    dispatch(onInputChange({ isChecked: !isChecked }));
    setIsChecked(!isChecked);
  };

  const onFormSubmitClick = (_) => {
    dispatch(onFormSubmit("/signup"));
  };

  useEffect(
    (_) => {
      return (_) => {
        dispatch(clearForm());
      };
    },
    [dispatch]
  );

  useEffect(
    (_) => {
      dispatch(onInputChange({ isChecked }));
    },
    [isChecked, dispatch]
  );

  const renderResponse = (_) => {
    return (
      <div className="w-100 w-md-40 block-center mt-4">
        {formState.status && formState.status !== 200 ? (
          <ErrorBlock message={`${formState.message}`.toUpperCase()} />
        ) : null}
        {formState.status && formState.status === 200 ? (
          <SuccessBlock message={`${formState.message}`.toUpperCase()} />
        ) : null}
      </div>
    );
  };

  const renderForm = (_) => {
    if (formState.status !== 200)
      return (
        <form>
          <input
            className="primary-input w-100 w-md-40 d-block mx-auto"
            placeholder="FULL NAME"
            name="fullName"
            value={formState.fullName || ""}
            onChange={({ target }) => {
              onChange(target);
            }}
          />
          <input
            className="primary-input mt-4 mb-3 w-100 w-md-40 d-block mx-auto"
            placeholder="EMAIL"
            type="email"
            name="email"
            value={formState.email || ""}
            onChange={({ target }) => {
              onChange(target);
            }}
          />
          <input
            className="primary-input mt-4 mb-3 w-100 w-md-40 d-block mx-auto"
            placeholder="PASSWORD"
            type="password"
            name="password"
            value={formState.password || ""}
            onChange={({ target }) => {
              onChange(target);
            }}
          />
          <div className="mt-5 w-100 w-md-40 mx-auto">
            <Checkbox
              name="checkbox"
              content="Keep me updated with news and exclusive offers."
              onClick={(_) => onCheckboxChange()}
              defaultChecked
            />
          </div>

          <PrimaryButton
            className={`mt-4 mx-auto d-block w-100 w-md-40 font-weight-bold ${
              isRunning ? "status-running" : ""
            }`}
            title="SIGN UP"
            onClick={onFormSubmitClick}
          ></PrimaryButton>
        </form>
      );
    else {
      return (
        <Link to="/login">
          <DarkButton title="GO TO SIGN IN" className="mt-4" />
        </Link>
      );
    }
  };

  return (
    <>
      <div className="text-center mt-6">
        <h1 className="header mb-5">SIGN UP</h1>
        <div className="secondary-background-color pt-5 pb-5 mb-5 mt-5">
          <Container className="">
            {renderResponse()}
            {renderForm()}
          </Container>
        </div>
        <Container className="mb-5">
          <Link to="login">
            <DarkButton
              className="mt-4 mx-auto d-block w-100 w-md-40 font-weight-bold"
              title="ALREADY HAVE AN ACCOUNT?"
            />
          </Link>
        </Container>
      </div>
    </>
  );
};

export default CreateAccount;
