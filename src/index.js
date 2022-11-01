import React from "react";
import { render } from "react-dom";
import TimeSelectForm from "./components/TimeSelectForm";
import "./styles.css";

const App = () => (
  <div className="App">
    <TimeSelectForm />
  </div>
);

render(<App />, document.getElementById("root"));
