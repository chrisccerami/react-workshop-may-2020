import React from "react";
import { render } from "react-dom";
import "./style.css";

export default function App() {
  return <h1>Hey React!</h1>;
}

render(<App />, document.getElementById("root"));
