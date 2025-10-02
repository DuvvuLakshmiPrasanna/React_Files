import React from "react";
import Myimage from "./assets/react.svg";
import "./FunctionComponent.css";

const FunctionComponent = (props) => {
  return (
    <>
      <div className="card">
        <div className="logo">
          <img src={props.Data.image} />
        </div>
        <div className="info">
          <div className="price">Price :{props.Data.Price}</div>
          <div className="Brand">Brand :{props.Data.Brand}</div>
        </div>
      </div>
    </>
  );
};

export default FunctionComponent;
