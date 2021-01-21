import React from "react";
import { Product } from "common/types";

interface CartItemProps extends Product {
  quantityAddHandler: (pid: string) => void;
  quantityRemoveHandler: (pid: string) => void;
}

const formatPrice = (price: string): string => {
  return price.replace(".", ",");
};

const CartItem = ({
  name,
  price,
  quantity,
  pid,
  quantityAddHandler,
  quantityRemoveHandler,
}: CartItemProps) => {
  const unitPrice = formatPrice(price);
  const fullPrice = (Number(price) * quantity).toString();

  return (
    <li className="cart-item">
      <div className="item-img">
        <img src="https://via.placeholder.com/150" alt="" />
      </div>
      <div className="item-content">
        <p className="item-name">{name}</p>
        <span className="item-unitPrice">{unitPrice} zł / szt</span>
        <span className="item-price">{formatPrice(fullPrice)} zł</span>
      </div>
      <div className="cart-action">
        <a className="item-action add" onClick={() => quantityAddHandler(pid)}>
          +
        </a>
        <div className="item-quantity">1</div>
        <a
          className="item-action remove"
          onClick={() => quantityRemoveHandler(pid)}
        >
          -
        </a>
      </div>
    </li>
  );
};

export default CartItem;
