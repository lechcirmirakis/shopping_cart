import React, { useEffect, useCallback } from "react";
import Loader from "react-loader-spinner";
import { debounce } from "lodash";

import Layout from "components/Layout";
import CartItem from "components/CartItem";

import { getProductIndex } from "utils";
import { Product, errorTypes } from "common/types";
import { dispatchToState, getState } from "context";

import "styles/global.scss";

const Cart = () => {
  const dispatch = dispatchToState();
  const state = getState();
  const { isLoading, products } = state;

  useEffect(() => {
    fetchProducts();
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
      console.log(error);
      dispatch({ type: "handleState", payload: false, field: "isLoading" });
    }
  };

  const checkQuantity = useCallback(
    debounce(async function (currentQuantity: number, pid: string) {
      try {
        const res = await fetch("/api/product/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pid: pid,
            quantity: currentQuantity,
          }),
        });

        const data = await res.json();

        if (data.isError && data.errorType === errorTypes.INCORRECT_QUANTITY) {
          dispatch({ type: "resetQuantity", payload: pid });
        }
      } catch (error) {
        console.log(error);
      }
    }, 1500),
    []
  );

  const showProducts = (product: Product) => (
    <CartItem key={product.pid} {...product} {...functions} />
  );

  const quantityAddHandler = (pid: string) => {
    if (pid === null) return;
    dispatch({ type: "productIncrement", payload: pid });

    const currentQuantity: number =
      state.products[getProductIndex(state.products, pid)].quantity + 1;

    checkQuantity(currentQuantity, pid);
  };

  const quantityRemoveHandler = (pid: string) => {
    if (pid === null) return;
    dispatch({ type: "productDecrement", payload: pid });

    const currentQuantity: number =
      state.products[getProductIndex(state.products, pid)].quantity - 1;

    checkQuantity(currentQuantity, pid);
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
