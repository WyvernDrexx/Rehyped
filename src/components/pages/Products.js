import React from 'react';
import Container from '../stateless/Container';
import CommonHeader from "../stateless/CommonHeader";
import Divider from '../stateless/Divider';
import SearchBar from '../SearchBar';
import ProductsList from '../ProductsList';

const Products = props => {
  return (
    <Container className='pt-4 pb-5'>
      <CommonHeader
          className=""
          header="MERCH"
          subheader="ANDROCRUNCH ORIGINALS"
        />
        <SearchBar className='mt-5 mb-6' />
        <ProductsList />
    </Container>
  );
}

export default Products;