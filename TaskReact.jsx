import React from "react";
import Myimage from "./assets/react.svg";
import TRAddData from "./TRAddData";
import TRViewData from "./TRViewData";
import { Link } from "react-router-dom";

function TaskReact() {
  return (
    <>
      <h1>This is TaskReact Page</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TRAddData />}></Route>
          <Route path="/viewdata" element={<TRViewData />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default TaskReact;
