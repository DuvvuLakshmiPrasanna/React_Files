import React from "react";
import Myimage from "./assets/react.svg";
import { Link } from "react-router-dom";

function TRViewData () {

  return (
    <>

      <h1>This is ViewData Page</h1>
      <Link to ="/viewdata">ViewData</Link>

    </>
  );
};

export default TRViewData;