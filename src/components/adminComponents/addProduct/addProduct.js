import React, { useEffect } from "react";
import { PrimaryButton } from "../../stateless/Buttons";
import { Container, ErrorBlock, SuccessBlock } from "../../stateless";
import { useDispatch, useSelector } from "react-redux";
import { onInputChange, onFormSubmit, clearForm } from "../../../actions";
import { Spinner } from "react-bootstrap";

export default props => {
  const dispatch = useDispatch();
  const productForm = useSelector(state => state.form);

  useEffect(_ => {
    dispatch(clearForm());
  }, []);

  const onChange = ({ name, value }) => {
    console.log(name, value);
    dispatch(onInputChange({ [name]: value }));
  };

  const onSubmit = _ => {
    console.log(productForm);
    dispatch(onFormSubmit("/products"));
  };

  const renderResponse = _ => {
    return (
      <div className="block-center mt-4">
        {productForm.status && productForm.status !== 200 ? (
          <ErrorBlock message={`${productForm.message}`.toUpperCase()} />
        ) : null}
        {productForm.status && productForm.status === 200 ? (
          <SuccessBlock message={`${productForm.message}`.toUpperCase()} />
        ) : null}
      </div>
    );
  };

  return (
    <div className="mt-5 pt-5 pb-5">
      <Container>
        {renderResponse()}
        <form>
          <input
            className="primary-input w-100 d-block mx-auto"
            placeholder="PRODUCT NAME"
            type="text"
            name="name"
            value={productForm.productName}
            onChange={({ target }) => onChange(target)}
          />
          <div className="input-group mt-4 mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text">₹</span>
            </div>
            <input
              type="number"
              name="price"
              className="form-control primary-input"
              placeholder="PRICE"
              value={productForm.price}
              onChange={({ target }) => onChange(target)}
            />
          </div>
          <input
            className="primary-input mt-4 mb-3 w-100 d-block mx-auto"
            placeholder="STOCK"
            type="number"
            value={productForm.stock}
            onChange={({ target }) => onChange(target)}
            name="stock"
          />
          <div className="input-group mb-4 mt-4">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">
                CATEGORY
              </label>
            </div>
            <select
              name="category"
              onChange={({ target }) => onChange(target)}
              className="custom-select"
              id="inputGroupSelect01"
            >
              <option value="shirt">SHIRT</option>
              <option value="half-sleeves">HALF-SLEEVES</option>
              <option value="full-sleeves">FULL-SLEEVES</option>
              <option value="hoodies">HOODIES</option>
              <option value="t-shirt">T-SHIRT</option>
            </select>
          </div>
          <PrimaryButton
            className="mt-4 mx-auto d-block w-100 font-weight-bold"
            title="ADD PRODUCT"
            onClick={onSubmit}
          >
            {productForm.requestStatus &&
            productForm.requestStatus === "running" ? (
              <Spinner className="ml-2" animation="border" size="sm" />
            ) : null}
          </PrimaryButton>
        </form>
      </Container>
    </div>
  );
};
