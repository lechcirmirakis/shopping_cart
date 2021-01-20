import React from "react";
import "./App.scss";

import { dispatchToState, getState } from "context";

const App = () => {
  const state = getState();
  console.log(state.products);

  return (
    <div className="container">
      <h3>Lista produktów</h3>
      <ul>
        <li className="row">Patelnia, cena: 89,99zł</li>
      </ul>
    </div>
  );
};

export { App };
