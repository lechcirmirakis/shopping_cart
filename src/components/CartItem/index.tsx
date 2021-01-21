import React from "react";

import { formatPrice } from "utils";
import { Product } from "common/types";

interface CartItemProps extends Product {
  quantityAddHandler: (pid: string) => void;
  quantityRemoveHandler: (pid: string) => void;
}

const CartItem = ({
  isBlocked,
  max,
  min,
  name,
  pid,
  price,
  quantity,
  quantityAddHandler,
  quantityRemoveHandler,
}: CartItemProps) => {
  const unitPrice = formatPrice(price);
  const fullPrice = Number(price) * quantity;
  const roundFull = Math.round(fullPrice * 100) / 100;

  return (
    <li className="cart-item">
      <div className="item-img">
        <img src="https://via.placeholder.com/150" alt="" />
      </div>
      <div className="item-content">
        <p className="item-name">{name}</p>
        <span className="item-unitPrice">{unitPrice} zł / szt</span>
        <span className="item-price">
          {formatPrice(roundFull.toString())} zł
        </span>
      </div>
      <div className="cart-action">
        <button
          className="item-action add"
          onClick={() => quantityAddHandler(pid)}
          disabled={isBlocked || quantity === max}
        >
          +
        </button>
        <div className="item-quantity">{quantity}</div>
        <button
          className="item-action remove"
          onClick={() => quantityRemoveHandler(pid)}
          disabled={isBlocked || quantity === min}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default CartItem;
