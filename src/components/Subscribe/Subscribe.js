import React from 'react';

import {PrimaryButton } from "../stateless/Buttons";
import CommonHeader from '../stateless/CommonHeader';

const Subscribe = props => {
  return (
    
        <div className="secondary-background-color pt-5 pb-5">
        <CommonHeader
          className="mb-3"
          header="NEWS LETTER"
          subheader=" SIGN UP TO GET DISCOUNTS ON
          PREMIUM PRODUCTS"
        />
        <input
          className="placeholder-center d-block mx-auto primary-input w-md-25 mt-5"
          placeholder="ENTER YOUR EMAIL"
        />
        <PrimaryButton
          className="mt-4 mx-auto d-block font-weight-bold w-md-25"
          onClick={() => console.log("Clicked subscribe button!")}
          title="SUBSCRIBE"
        />
      </div>
  );
}

export default Subscribe;