
// <div id="parent">
//     <div id="child1">
//         <h1>Im H1</h1>
//         <h2>Im H2</h2>
//     </div>
//     <div id="child2">
//         <h1>Im H1</h1>
//         <h2>Im H2</h2>
//     </div>
// </div>

const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"Im H1"),React.createElement("h2",{},"Im H1")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"Im H1"),React.createElement("h2",{},"Im H1")])])

const heading = React.createElement("h1",{id:"head"},"Hii JOYAL !");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// in JS
// const heading = document.createElement("h1");
// heading.innerHTML="Hello";
// const root = document.getElementById("root");
// root.appendChild(heading);