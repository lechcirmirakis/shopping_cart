import React from "react";

import { formatPrice } from "utils";
import { Product } from "common/types";
import { getState } from "context";

const Footer = () => {
  const state = getState();
  const { isLoading, products } = state;

  const totalPrice = (elements: Product[]): string => {
    const total = elements
      .map((e) => Number(e.price) * e.quantity)
      .reduce((a, b) => a + b, 0);

    const totalRound = Math.round(total * 100) / 100;

    return totalRound.toString();
  };

  return (
    <footer className="footer">
      <div className="footer-box">
        <p className="total-price">{formatPrice(totalPrice(products))} zł</p>
        <button disabled={isLoading} className="btn btn-green">
          Zamawiam
        </button>
      </div>
    </footer>
  );
};

export default Footer;
