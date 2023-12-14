import React from "react";
import ReactDOM from "react-dom";

// if we have a variable
let age = "12";
let name = "James";
let output = <span>{name} is <strong>{age}</strong> years old</span>;


// use react-dom to render it
ReactDOM.render(output, document.querySelector("#myDiv"));
