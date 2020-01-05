import React, { useEffect } from "react";

import {
  Container,
  CommonHeader,
  Divider,
  ErrorBlock,
  SuccessBlock
} from "../stateless";

import { PrimaryButton } from "../stateless/Buttons";
import { Spinner } from "react-bootstrap";
import {
  onUserInputChange,
  onUserSubmit,
  fetchShippingDetails
} from "../../actions";

import { useDispatch, useSelector } from "react-redux";

const ShippingDetails = props => {
  const dispatch = useDispatch();
  const formState = useSelector(state => state.user.shippingDetails);
  
  const isFetching = useSelector(
    state => state.requestStatus.fetchShippingDetails
  );
  
  const isSubmitting = useSelector(state => state.requestStatus.onUserSubmit);

  const onChange = ({ name, value }) => {
    dispatch(onUserInputChange("shippingDetails", { [name]: value }));
  };

  const onSubmit = _ => {
    dispatch(onUserSubmit("shippingDetails", "/user/shipping-details"));
  };

  const renderResponse = _ => {
    return (
      <div className="block-center mt-4">
        {formState.status && formState.status !== 200 ? (
          <ErrorBlock message={`${formState.message}`.toUpperCase(122)} />
        ) : null}
        {formState.status && formState.status === 200 ? (
          <SuccessBlock message={`${formState.message}`.toUpperCase()} />
        ) : null}
      </div>
    );
  };

  useEffect(
    _ => {
      if( typeof isSubmitting !== "undefined" && !isSubmitting){
        window.scrollTo(0,400);
      }
    },
    [isSubmitting]
  );

  useEffect(_ => {
    if(!isFetching || !isSubmitting){
      window.scrollTo(0,250);
    }
  }, [isSubmitting, isFetching])

  useEffect(_ => {
    dispatch(fetchShippingDetails());
  }, []);

  if(typeof isFetching === 'undefined' || isFetching){
    return (<div className="bg-white pt-3 pb-3">
      <Spinner className="block-center" animation="border" />
    </div>);
  }

  if (formState) {
    return (
      <div className="bg-white pb-3">
        <div className="pt-4">
          <Container className="">
            {renderResponse()}
            <input
              className="primary-input mb-4 w-100"
              placeholder="RECEIVER'S NAME"
              name="name"
              onChange={({ target }) => onChange(target)}
              value={formState.name || ""}
            />
            <input
              className="primary-input mb-4 w-100"
              placeholder="PHONE NUMBER"
              name="phone"
              type="tel"
              onChange={({ target }) => onChange(target)}
              value={formState.phone || ""}
            />
          </Container>
        </div>
        <div className="secondary-background-color pt-4 pb-4 mt-4 mb-4">
          <CommonHeader
            className=""
            header="ADDRESS"
            subheader="FILL IN THE DETAILS"
          />
          <Divider className="mb-4 mt-4" />
        </div>
        <div className="pt-4 mb-4 pb-4">
          <Container>
            <form>
              <input
                name="address"
                className="primary-input mb-4 w-100"
                placeholder="ADDRESS"
                onChange={({ target }) => onChange(target)}
                value={formState.address || ""}
              />
              <input
                name="locality"
                className="primary-input mb-4 w-100"
                placeholder="LOCALITY"
                onChange={({ target }) => onChange(target)}
                value={formState.locality || ""}
              />
              <input
                name="landmark"
                className="primary-input mb-4 w-100"
                placeholder="LANDMARK"
                onChange={({ target }) => onChange(target)}
                value={formState.landmark || ""}
              />
              <input
                name="city"
                className="primary-input mb-4 w-100"
                placeholder="CITY"
                onChange={({ target }) => onChange(target)}
                value={formState.city || ""}
              />
              <input
                name="pin"
                className="primary-input mb-4 w-100"
                placeholder="PIN CODE"
                onChange={({ target }) => onChange(target)}
                value={formState.pin || ""}
              />
              <input
                name="state"
                className="primary-input mb-4 w-100"
                placeholder="STATE"
                onChange={({ target }) => onChange(target)}
                value={formState.state || ""}
              />
            </form>
          </Container>
        </div>
        <Container className="">
          <PrimaryButton
            onClick={onSubmit}
            title="SUBMIT"
            className={`w-100 mb-4 w-md-40 d-block mx-auto ${isSubmitting?"status-running":""}`}
          />
        </Container>
      </div>
    );
  } else {
    return null;
  }
};

export default ShippingDetails;
