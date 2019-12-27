import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Button, Spinner } from "react-bootstrap";
import { removeProduct } from "../../../actions";
import "./removeProduct.scss";

const SingleItem = props => {
  const dispatch = useDispatch();
  const [showConfirmation, setshowConfirmation] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const toggleConfirmation = _ => {
    setshowConfirmation(!showConfirmation);
  };

  const onRemove = _ => {
    setShowSpinner(true);
    dispatch(removeProduct(_id));
  };

  const { name, _id } = props.item;
  return (
    <Card className="mb-5 d-inline-block mr-3" style={{ width: "15rem" }}>
      <Card.Img variant="top" src="/products/1.jpg" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button onClick={toggleConfirmation} className="mt-3" variant="danger">
          Remove
        </Button>
        {showConfirmation ? (
          <div className="confirm-remove">
            <p className="text-white">Are you sure you want to delete?</p>
            <Button onClick={onRemove} className="mt-3" variant="danger">
              YES
              {showSpinner ? (
                <Spinner className="ml-2" animation="border" size="sm" />
              ) : null}
            </Button>
            <Button
              onClick={toggleConfirmation}
              className="mt-3"
              variant="outline-secondary"
            >
              NO
            </Button>
          </div>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default SingleItem;
