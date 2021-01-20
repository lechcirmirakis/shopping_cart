import React from "react";
import { render } from "react-dom";

import Context from "context";

import { App } from "./App";

const app = (
  <Context>
    <App />
  </Context>
);

render(app, document.getElementById("root"));
