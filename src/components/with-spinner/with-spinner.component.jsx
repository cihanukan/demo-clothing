import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

//Defining HOC
//It will get a component as a props and will pass to the another component to check loading status
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
