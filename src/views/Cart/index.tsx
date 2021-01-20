import React, { useEffect } from "react";
import "styles/global.scss";

import Layout from "components/Layout";
import CartItem from "components/CartItem";

import { dispatchToState, getState } from "context";
import { Product } from "common/types";

const Cart = () => {
  const dispatch = dispatchToState();
  const state = getState();

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

  const functions = {
    quantityAddHandler,
    quantityRemoveHandler,
  };

  return (
    <Layout>
      <div className="cart-wrapper ">
        <h3 className="cart-title">Lista Produktów</h3>
        <ul className="cart-list">
          {state.products.map((item) => (
            <CartItem key={item.pid} {...item} {...functions} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Cart;
