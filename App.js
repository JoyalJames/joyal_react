import React from "react";
import ReactDOM from "react-dom/client";

//ReactElement
// const heading = React.createElement("h1",{id:"heading"},"Hi Joyal Start");


// JSX =>Babel transpiles it to React.createElement executed and to ReactElement-JS object is render on to HTML element(render)
const jsxheading = <h1 id="heading" className="header">Hii Joo</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);