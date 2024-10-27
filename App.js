import React from "react";
import ReactDOM from "react-dom/client";

// React Element are equivalent to DOM elements
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Heading from createElement"
);

console.log("heading123 => ", heading);

// JSX - is not HTML in JS. JSX is HTML like syntax
const jsxHeading = <h1 id="heading">Heading from JSX</h1>;
console.log("jsxHeading123 => ", heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); // render converts obj to HTML
