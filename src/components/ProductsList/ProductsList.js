import React, { useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";
import { fetchProducts } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import ListItem from './ListItem'
import "./ProductsList.scss";

const ProductsList = props => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(
    _ => {
      if (Object.values(products).length === 0) dispatch(fetchProducts());
    },
    [products, dispatch]
  );

  useEffect(_ => {
    window.onload = _ => {
      if (window.pageYOffset > 1650) {
        window.scrollTo(0, 0);
      }
    };
  }, []);

  const renderList = (list = []) => {
    return list.map((item, index) => {
      return <ListItem key={index} item={item} index={index} />
    })
  }

  if (Object.values(products).length === 0) {
    return (
      <>
        <div className="mt-4 mb-4">
          <Spinner
            variant="dark"
            animation="border"
            className="d-block mx-auto"
          />
        </div>
      </>
    );
  }

  return (
    <div className="flex-center">
      <Row className="products-list justify-content-center">
        {renderList(products)}
      </Row>
    </div>
  );
};

export default ProductsList;
