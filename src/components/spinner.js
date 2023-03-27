import React, { Component, Fragment } from "react";
import spinner from "./loading.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading" />
    </Fragment>
  );
};

export default Spinner;
