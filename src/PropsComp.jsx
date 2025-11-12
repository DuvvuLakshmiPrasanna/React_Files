import React from "react";
import PropsChildOne from "./PropsChildOne";

const Details={
    name:'sree',
    age:19
}
function PropsComp() {
  return (
    <>
      <PropsChildOne info={Details.name}/>
    </>
  );
}

export default PropsComp;

