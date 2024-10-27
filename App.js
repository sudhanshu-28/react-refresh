import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1 id="heading">Heading from JSX</h1>;

const Title = () => <h1 className="head">Title Component</h1>;

// React Functional Component - Function that returns JSZ code is Functional Component
const HeadingComponent = () => (
  <div className="container">
    {/* Component Composition - It is calling component inside Component  */}
    <Title />
    <h1 className="heading">Heading Functional Component</h1>
  </div>
);

// Browser does not understand Components, Babel just transpile all react elements / function components returns JSX to JS Engine understandable code

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); // render converts obj to HTML
