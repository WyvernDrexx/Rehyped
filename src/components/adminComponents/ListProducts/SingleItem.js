import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Button, Spinner } from "react-bootstrap";
import { removeProduct } from "../../../actions";
import AddImages from "../AddImages";

import "./ListProducts.scss";

const SingleItem = props => {
  const dispatch = useDispatch();
  const [showConfirmation, setshowConfirmation] = useState(false);
  const [showAddImages, setShowAddImages] = useState(false);

  const [showSpinner, setShowSpinner] = useState(false);

  const toggleConfirmation = _ => {
    setshowConfirmation(!showConfirmation);
  };

  const onRemove = _ => {
    setShowSpinner(true);
    dispatch(removeProduct(_id));
  };

  const { name, _id, image } = props.item;

  const renderConfirmation = _ => {
    return showConfirmation ? (
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
    ) : null;
  };

  const renderAddImages = _ => {
    if (showAddImages) {
      return (
        <AddImages
          id={_id}
          name={name}
          onClose={_ => setShowAddImages(!showAddImages)}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <Card
      className="mb-5 mr-3 m-auto d-sm-inline-block m-sm-3"
      style={{ width: "15rem" }}
    >
      <Card.Img
        variant="top"
        src={
          image
            ? `http://localhost:8000/images/products/${image}`
            : "http://localhost:8000/images/products/IMAGE-1577517957411.jpg"
        }
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button onClick={toggleConfirmation} className="mt-3" variant="danger">
          Remove
        </Button>
        <Button
          onClick={_ => setShowAddImages(!showAddImages)}
          className="mt-3"
          variant="info"
        >
          {!showAddImages ? "Add Images" : "Close"}
        </Button>
        {renderConfirmation()}
        {renderAddImages()}
      </Card.Body>
    </Card>
  );
};

export default SingleItem;
