import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

//! React.createElement=> ReactElement-JS OBJECt=> HTMLElement(render)

const heading =React.createElement("h1",{id:"heading"},"namste react")
// !console.log(heading)//react element in the form of object,when we renders to dom then it become html element.

// !jsx(transpile before it reaches the js engine)->parcel->babel

//&jsx=>React.createElement=>ReactElement-JS OBJECt=> HTMLElement(render)

//!react element  not function based
const heading =(
    <h1>
        namste react
    </h1>
)
const jsxHeading = <h1>Namste react</h1>;
console.log(jsxHeading);

//!REACT COMPONENTS
//CLASS BASED COMPONENTS-oldway
//FUNCTIONAL COMPONENTS-newway

const Title = () => {
  return <h1>Prateek👁️‍🗨️</h1>;
};

const number = 1000;

const Heading = () => {
  return (
    <>
      {Title()}
      <Title />
      <Title></Title>
      {number}

      <h1>Namste react🫠</h1>
    </>
  );
};
const Mixuture = (
  <h1>
    {" "}
    mixruer <Heading></Heading>{" "}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
//! object ReactDOMRoot {_internalRoot: FiberRootNode},everything is replaced
// root.render(jsxHeading);

root.render(<Heading />);
root.render(Mixuture);
