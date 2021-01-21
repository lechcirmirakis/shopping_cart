import React from "react";
import { getState } from "context";

const Footer = () => {
  const state = getState();
  const { isLoading } = state;

  return (
    <footer className="footer">
      <div className="footer-box">
        <p className="total-price">150,00 zł</p>
        <button disabled={isLoading} className="btn btn-green">
          Zamawiam
        </button>
      </div>
    </footer>
  );
};

export default Footer;
