import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "styles/global.scss";

import Layout from "components/Layout";
import CartItem from "components/CartItem";

import { dispatchToState, getState } from "context";
import { Product } from "common/types";

const Cart = () => {
  const dispatch = dispatchToState();
  const state = getState();
  const { isLoading, products } = state;

  useEffect(() => {
    fetchProducts();
    // return () => {
    //   cleanup
    // }
  }, []);

  const fetchProducts = async () => {
    dispatch({ type: "handleState", payload: true, field: "isLoading" });

    try {
      const res = await fetch("/api/cart");
      const products = await res.json();

      products.forEach((element: Product) => {
        element.quantity = element.min;
      });

      dispatch({ type: "handleState", payload: products, field: "products" });
      dispatch({ type: "handleState", payload: false, field: "isLoading" });
    } catch (error) {
      console.log("error");
      dispatch({ type: "handleState", payload: false, field: "isLoading" });
    }
  };

  const showProducts = (product: Product) => {
    const { pid } = product;

    return <CartItem key={pid} {...product} {...functions} />;
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
        <ul className={`cart-list${isLoading ? " cart-list__loading" : ""}`}>
          {!isLoading ? (
            products.map(showProducts)
          ) : (
            <Loader type="ThreeDots" color="#27ae61" height={80} width={80} />
          )}
        </ul>
      </div>
    </Layout>
  );
};

export default Cart;
