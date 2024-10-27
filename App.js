import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading_1" }, "This is React Project"),
    React.createElement("h2", { id: "heading_2" }, "React is JS Liberary"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading_3" }, "Heading 3"),
    React.createElement("h2", { id: "heading_4" }, "Heading 4"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
