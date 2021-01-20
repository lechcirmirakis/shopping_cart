import React, { useEffect } from "react";
import "./global.scss";

import { dispatchToState, getState } from "context";
import { Product } from "common/types";

const App = () => {
  const state = getState();
  const dispatch = dispatchToState();

  useEffect(() => {
    fetchProducts();
    // return () => {
    //   cleanup
    // }
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/cart");
      const products = await res.json();

      products.forEach((element: Product) => {
        element.quantity = element.min;
      });

      dispatch({ type: "handleState", payload: products, field: "products" });
    } catch (error) {}
  };

  const quantityAddHandler = (pid: string) => {
    console.log(pid);
  };

  const quantityRemoveHandler = (pid: string) => {
    console.log(pid);
  };

  return (
    <div className="container">
      <h3>Lista produktów</h3>
      <ul>
        {state.products.map((product) => {
          return (
            <li className="row" key={product.pid}>
              <div>
                <div>
                  {product.name}, cena: {product.price.replace(".", ",")} zł
                </div>
                <div>
                  <a onClick={() => quantityRemoveHandler(product.pid)}>-</a>
                  <div>Obecnie masz {product.quantity} sztuk produktu</div>
                  <a onClick={() => quantityAddHandler(product.pid)}>+</a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { App };
