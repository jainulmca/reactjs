"use strict";
const root = ReactDOM.createRoot(document.getElementById('root'));
const heading = React.createElement("h1", {id:"heading1"}, "React Learning Class 1");
const heading2 = React.createElement("h2", {id: "heading2", className: "subheading"}, "React learning with added multiple elements");
const container = React.createElement("div", {}, [heading, heading2]);

root.render(container);