import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Spinner } from "react-bootstrap";
import { removeProduct, sendRequest, fetchProducts } from "../../../actions";
import { Link } from "react-router-dom";
import AddImages from "../AddImages";

import "./ListProducts.scss";

const SingleItem = props => {
  const dispatch = useDispatch();
  const isActionRunning = useSelector(state => state.requestStatus.productAction);
  const [showConfirmation, setshowConfirmation] = useState(false);
  const [showAddImages, setShowAddImages] = useState(false);
  const [confirmation, setConfirmation] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const imageSrc = process.env.REACT_APP_IMAGES_SRC;

  const toggleConfirmation = _ => {
    setshowConfirmation(!showConfirmation);
  };

  const onRemove = _ => {
    setShowSpinner(true);
    dispatch(removeProduct(_id));
  };


  const { name, _id, image, isPublished } = props.item;

  const onAction = _ => {
    setShowSpinner(true);
    dispatch(sendRequest("GET", `/products/publish/${_id}`));
  }

  useEffect(_ => {
    if(typeof isActionRunning !== 'undefined')
      dispatch(fetchProducts());
  }, [isActionRunning])

  useEffect(
    _ => {
      if (confirmation.message) {
        setshowConfirmation(true);
      }
    },
    [confirmation.message]
  );

  const renderConfirmation = _ => {
    return showConfirmation ? (
      <div className="confirm-remove">
        <p className="text-white">{confirmation.message}</p>
        <Button
          onClick={confirmation.onClickHandler}
          className="mt-3"
          variant="danger"
        >
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

  const setConfirmationData = (message, onClickHandler) => {
    setConfirmation({
      message,
      onClickHandler
    });
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
      <Card.Img variant="top" src={`${imageSrc}/${image}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button
          onClick={_ =>
            setConfirmationData("Are you sure you want to delete?", onRemove)
          }
          className="mt-3"
          variant="danger"
          disabled
        >
          Remove
        </Button>
        <Button
          onClick={_ => setShowAddImages(!showAddImages)}
          className="mt-3"
          variant="info"
        >
          {!showAddImages ? "Add Images" : "Close"}
        </Button>
        <Link to={`/admin-pannexa/add-product/${_id}`}>
          <Button className="mt-3" variant="success">
            Edit
          </Button>
        </Link>
        <Button
          onClick={_ =>
            setConfirmationData(
              `Are you sure you want to ${isPublished?"unpublish":"publish"} this item?`, onAction
            )
          }
          className="mt-3 ml-2 bg-danger"
          variant="info"
        >
          {isPublished ? "UNPUBLISH" : "PUBLISH"}
        </Button>
        {renderConfirmation()}
        {renderAddImages()}
      </Card.Body>
    </Card>
  );
};

export default SingleItem;
