import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FunctionComponent from "./FunctionComponent";
import Myimage from "./assets/react.svg";

import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Hook1 from "./Hook1";

import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Team from "./Team";
import Services from "./Services";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
            <br />
          </li>
        </ul>  
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//     Price: "200/-",
//     Brand: "USPA",
//   },
//   {
//     image: Myimage,
//     Price: "50000/-",
//     Brand: "Thub",
//   },
//   {
//     image: Myimage,
//     Price: "30000/-",
//     Brand: "Aditya",
//   },
//   {
//     image: Myimage,
//     Price: "5000/-",
//     Brand: "Rare Rabbit",
//   },
// ];
// var x=false;

// const [x, Setx] = useState(0);
// useEffect(() => {
//   console.log("Excuted");

// }, [x]);

//   return (

//     // <div class="parent">
//     //   {MyCards.map((ele) => {
//     //     return <FunctionComponent Data={ele} />;
//     //   })}
//     // </div>
//     //
//     // <>
//     // {x==true ? <Comp1/> : <Comp2/>}
//     // </>

//     // <Hook1/>
//     // <UseState/>

//   );
// }

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import FunctionComponent from "./FunctionalComponent";

// function App() {
//   var MyCards = [
//     {
//       image: Myimage,
//       Price: "200/-",
//       Brand: "USPA",
//     },
//     {
//       image: Myimage,
//       Price: "50000/-",
//       Brand: "Thub",
//     },
//     {
//       image: Myimage,
//       Price: "30000/-",
//       Brand: "Aditya",
//     },
//     {
//       image: Myimage,
//       Price: "5000/-",
//       Brand: "Rare Rabbit",
//     },
//   ];
//   return (
//     <div class="parent">
//       {MyCards.map((ele) => {
//         return <FunctionComponent Data={ele} />;
//       })}
//     </div>
//   );
// }
// export default App;

// // import { useState } from 'react';
// // import reactLogo from './assets/react.svg';
// // import viteLogo from '/vite.svg';
// // import './App.css';
// // // import Myimage from "./assets/react.svg"
// // // import ClassComponent from './ClassComponent'
// // // import FunctionComponent from './FunctionComponent'
// // // import S0 from './S0'
// // // import S1 from './S1'
// // // import S2 from './s2'
// // // import S3 from './S3's
// // // import S4 from './s4'
// // // import S5 from './S5'
// // import Task1 from './Task1'

// // function App() {

// //    var Mycards=[
// //           {
// //               "image":Myimage,
// //               "price":200,
// //               "brand":"USPA"
// //           },
// //           {
// //               "image":Myimage,
// //               "price":300,
// //               "brand":"Puma"
// //           },
// //           {
// //               "image":Myimage,
// //               "price":400,
// //               "brand":"RR"
// //           },
// //           {
// //               "image":Myimage,
// //               "price":500,
// //               "brand":"wrong"
// //           }
// //       ]

// //   var x=20;
// //   return (
// //     <>
// //     {/* <ClassComponent/>S
// //     <FunctionComponent/>
// //     <ClassComponent/>
// //     <FunctionComponent/>
// //     <ClassComponent/>
// //     <FunctionComponent/> */}
// //     {/* <S0/> */}
// //     {/* <S1/>
// //     <S2/>
// //     <S3/>
// //     <S4/>
// //     <S5/> */}

// //       {/* <div className="parent">{
// //         dramas.map((ele) => {
// //           return(
// //             <props data={ele}/>
// //           )
// //         })
// // } */}
// //       </div>
// //     </>
// //   )
// // }

// // export default App
