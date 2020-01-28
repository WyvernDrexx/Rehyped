import React, { useEffect } from "react";

import {
  Container,
  CommonHeader,
  Divider,
  ErrorBlock,
  SuccessBlock
} from "../stateless";

import { PrimaryButton } from "../stateless/Buttons";
import { Spinner, Form } from "react-bootstrap";
import {
  onUserInputChange,
  onUserSubmit,
  fetchShippingDetails
} from "../../actions";

import { useDispatch, useSelector } from "react-redux";
import history from "../../history";

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
    dispatch(
      onUserSubmit("shippingDetails", "/user/shipping-details", () => {
        if (history.location.pathname === "/my-account/shipping-details")
          history.goBack();
      })
    );
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
      if (typeof isSubmitting !== "undefined" && !isSubmitting) {
        window.scrollTo(0, 400);
      }
    },
    [isSubmitting]
  );

  useEffect(
    _ => {
      if (!isFetching || !isSubmitting) {
        window.scrollTo(0, 250);
      }
    },
    [isSubmitting, isFetching]
  );

  useEffect(
    _ => {
      dispatch(fetchShippingDetails());
    },
    [dispatch]
  );

  if (typeof isFetching === "undefined" || isFetching) {
    return (
      <div className="bg-white pt-3 pb-3">
        <Spinner className="block-center" animation="border" />
      </div>
    );
  }

  const renderStatesList = _ => {
    return (
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Control
          value={formState.state || ""}
          onChange={({ target }) => onChange(target)}
          name="state"
          as="select"
        >
          <option value="">------------Select State------------</option>
          <option value="Andaman and Nicobar Islands">
            Andaman and Nicobar Islands
          </option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Orissa">Orissa</option>
          <option value="Pondicherry">Pondicherry</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttaranchal">Uttaranchal</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="West Bengal">West Bengal</option>
        </Form.Control>
      </Form.Group>
    );
  };

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
              {/* <input
                name="state"
                className="primary-input mb-4 w-100"
                placeholder="STATE"
                onChange={({ target }) => onChange(target)}
                value={formState.state || ""}
              /> */}
              {renderStatesList()}
            </form>
          </Container>
        </div>
        <Container className="">
          <PrimaryButton
            onClick={onSubmit}
            title="SUBMIT"
            className={`w-100 mb-4 w-md-40 d-block mx-auto ${
              isSubmitting ? "status-running" : ""
            }`}
          />
        </Container>
      </div>
    );
  } else {
    return null;
  }
};

export default ShippingDetails;
