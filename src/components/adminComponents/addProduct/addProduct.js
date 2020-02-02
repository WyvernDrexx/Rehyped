import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../../stateless/Buttons";
import { Container, ErrorBlock, SuccessBlock } from "../../stateless";
import { useDispatch, useSelector } from "react-redux";
import {
  onInputChange,
  onFormSubmit,
  clearForm,
  fetchProduct
} from "../../../actions";
import { useParams } from "react-router-dom";
import { Spinner, InputGroup, FormControl } from "react-bootstrap";

export default props => {
  const dispatch = useDispatch();
  const productForm = useSelector(state => state.form);
  const selectedProduct = useSelector(state => state.selectedProduct);
  const [renderResponseView, setRenderResponseView] = useState(false);
  const { uniqueUrl } = useParams();

  useEffect(
    _ => {
      return _ => {
        dispatch(clearForm());
      };
    },
    [dispatch]
  );

  useEffect(
    _ => {
      if (uniqueUrl) {
        dispatch(fetchProduct(uniqueUrl));
        if (selectedProduct) {
          dispatch(onInputChange(selectedProduct));
        }
      }
    },
    [uniqueUrl, selectedProduct._id, dispatch]
  );

  const onChange = ({ name, value }) => {
    dispatch(onInputChange({ [name]: value }));
  };

  const onSubmit = _ => {
    setRenderResponseView(true);
    dispatch(onInputChange({ message: "", status: null }));
    if (uniqueUrl) {
      dispatch(onFormSubmit(`/products/${uniqueUrl}`));
    } else {
      dispatch(onFormSubmit("/products"));
    }
  };
  const { isAdmin } = useSelector(state => state.token);
  if (!isAdmin) {
    return null;
  }
  const renderResponse = _ => {
    if (!renderResponseView) return null;
    setTimeout(_ => {
      setRenderResponseView(false);
    },3000);
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

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="mt-5 pt-5 pb-5">
      <Container>
        <form>
          <input
            className="primary-input w-100 d-block mx-auto"
            placeholder="PRODUCT NAME"
            type="text"
            name="name"
            value={productForm.name}
            onChange={({ target }) => onChange(target)}
          />
          <div className="input-group mt-4 mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text">₹</span>
            </div>
            <input
              type="text"
              name="price"
              className="form-control primary-input"
              placeholder="PRICE"
              value={productForm.price}
              onChange={({ target }) => onChange(target)}
            />
          </div>
          <div className="input-group mt-4 mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text text-danger">₹</span>
            </div>
            <input
              type="text"
              name="discount"
              className="form-control primary-input"
              placeholder="DISCOUNT PRICE"
              value={productForm.discount}
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
          <div>
            <p className="header mt-2 mb-3">Available Sizes:</p>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Radio
                  name="S"
                  onChange={({ target }) =>
                    onChange({ name: target.name, value: "S" })
                  }
                  aria-label="Radio button for following text input"
                />
              </InputGroup.Prepend>
              <FormControl value="S" />
            </InputGroup>
            <InputGroup className="mt-3">
              <InputGroup.Prepend>
                <InputGroup.Radio
                  name="M"
                  aria-label="Radio button for following text input"
                  onChange={({ target }) =>
                    onChange({ name: target.name, value: "M" })
                  }
                />
              </InputGroup.Prepend>
              <FormControl value="M" />
            </InputGroup>
            <InputGroup className="mt-3">
              <InputGroup.Prepend>
                <InputGroup.Radio
                  name="L"
                  aria-label="Radio button for following text input"
                  onChange={({ target }) =>
                    onChange({ name: target.name, value: "L" })
                  }
                />
              </InputGroup.Prepend>
              <FormControl value="L" />
            </InputGroup>
            <InputGroup className="mt-3">
              <InputGroup.Prepend>
                <InputGroup.Radio
                  name="XL"
                  aria-label="Radio button for following text input"
                  onChange={({ target }) =>
                    onChange({ name: target.name, value: "XL" })
                  }
                />
              </InputGroup.Prepend>
              <FormControl value="XL" />
            </InputGroup>
            <InputGroup className="mt-3">
              <InputGroup.Prepend>
                <InputGroup.Radio
                  name="XXL"
                  aria-label="Radio button for following text input"
                  onChange={({ target }) =>
                    onChange({ name: target.name, value: "XXL" })
                  }
                />
              </InputGroup.Prepend>
              <FormControl value="XXL" />
            </InputGroup>
          </div>

          {/*  */}
          <div>
            <p className="header mt-2 mb-3">Available Colors:</p>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Radio
                  name="white"
                  onChange={({ target }) =>
                    onChange({ name: target.name, value: "#ffffff" })
                  }
                  aria-label="Radio button for following text input"
                />
              </InputGroup.Prepend>
              <FormControl value="WHITE" />
            </InputGroup>
            <InputGroup className="mt-3">
              <InputGroup.Prepend>
                <InputGroup.Radio
                  name="wine"
                  aria-label="Radio button for following text input"
                  onChange={({ target }) =>
                    onChange({ name: target.name, value: "#520d24" })
                  }
                />
              </InputGroup.Prepend>
              <FormControl value="WINE" />
            </InputGroup>
            <InputGroup className="mt-3">
              <InputGroup.Prepend>
                <InputGroup.Radio
                  name="black"
                  aria-label="Radio button for following text input"
                  onChange={({ target }) =>
                    onChange({ name: target.name, value: "#000000" })
                  }
                />
              </InputGroup.Prepend>
              <FormControl value="BLACK" />
            </InputGroup>
          </div>
          <div className="input-group mb-4 mt-4">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
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
          <input
            className="primary-input w-100 d-block mx-auto"
            placeholder="PRODUCT TAG (default aesthetics)"
            type="text"
            name="tag"
            value={productForm.tag}
            onChange={({ target }) => onChange(target)}
          />
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
          {renderResponse()}
        </form>
      </Container>
    </div>
  );
};
