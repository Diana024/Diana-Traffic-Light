//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));


// <div className="semaforo w-100 h-100 radius-50%">
//     <div className="container">a</div>
//     <div className="color rojo bg-red">b</div>
//     <div className="color amarillo bg-yellow">b</div>
//     <div className="color verde bg-green">c</div>
// </div>


