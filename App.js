import React from "react";
import ReactDOM from "react-dom/client";

//ReactElement
// const heading = React.createElement("h1",{id:"heading"},"Hi Joyal Start");
// JSX =>Babel transpiles it to React.createElement executed and to ReactElement-JS object is render on to HTML element(render)
//REACT FUNCTIONAL COMPONENT
const Title=()=>(
    <h1>Namste Joyal</h1>
)
const element = "Namsteeee"
const JsxHead =()=>(
    <div>{element}
        <Title/>
        {Title()}
        <h1 id="heading" className="header">Hii Joo</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxHead/>);