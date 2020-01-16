import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { PrimaryButton } from "../../stateless/Buttons";
import { Divider } from "../../stateless";
import { Button } from "react-bootstrap";
import "./ListOrders.scss";

const OrderItem = props => {
  const imgSrc = process.env.REACT_APP_IMAGES_SRC;
  const {
    item: {
      product,
      user,
      user: { shippingDetails }
    }
  } = props;
  const [showDetails, setShowDetails] = useState(false);

  const onShowDetailsClick = _ => {
    setShowDetails(!showDetails);
  };

  const renderDetails = _ => {
    if (showDetails) {
      return (
        <div className="order-details">
          <Button
            onClick={onShowDetailsClick}
            className="bg-dark float-right"
          >
            {" "}
            x
          </Button>
          <p className="details-head">USER DETAILS</p>
          <Divider className="mt-2 mb-3 divider-dark" />
          <p className="details">
            Full Name: <span>{user.fullName}</span>
          </p>
          <p className="details">
            Email: <span>{user.email}</span>
          </p>
          <p className="details-head mt-4">SHIPPING DETAILS</p>
          <Divider className="mt-3 mb-3 divider-dark" />
          <p className="details">
            Name: <span>{shippingDetails.name}</span>
          </p>
          <p className="details">
            Phone: <span>{shippingDetails.phone}</span>
          </p>
          <p className="details">
            Address: <span>{shippingDetails.address}</span>
          </p>
          <p className="details">
            State: <span>{shippingDetails.state}</span>
          </p>
          <p className="details">
            City: <span>{shippingDetails.city}</span>
          </p>
          <p className="details">
            ZIP Code: <span>{shippingDetails.pin}</span>
          </p>
          <p className="details">
            Landmark: <span>{shippingDetails.landmark}</span>
          </p>
          <p className="details">
            Locality: <span>{shippingDetails.locality}</span>
          </p>
          <PrimaryButton className="block-center w-100 mt-4 w-md-40" title="IS THE PRODUCT DELIVERED?" />
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="d-inline-block mx-3 mb-3" style={{ width: "15.2rem" }}>
      <Card.Img variant="top" src={`${imgSrc}/${product.image}`} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        {product.isDelivered ? (
          <div className="text-center  bg-light text-success mt-3 p-3">
            DELIVERED
          </div>
        ) : (
          <div className="text-center  bg-info text-white mt-3 p-3">
            UNDELIVERED
          </div>
        )}
        <PrimaryButton
          onClick={onShowDetailsClick}
          className="mt-3 w-100"
          title="DETAILS"
        />
        <div className="">{renderDetails()}</div>
      </Card.Body>
    </Card>
  );
};

export default OrderItem;
