import React from "react";
import { render } from "react-dom";

import Cart from "views/Cart";
import Context from "context";

const App = (
  <Context>
    <Cart />
  </Context>
);

render(App, document.getElementById("root"));
