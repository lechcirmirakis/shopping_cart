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
  isBlocked,
  quantityAddHandler,
  quantityRemoveHandler,
}: CartItemProps) => {
  const unitPrice = formatPrice(price);
  const fullPrice = (Number(price) * quantity).toString();

  console.log(isBlocked);

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
        <button
          className="item-action add"
          onClick={() => quantityAddHandler(pid)}
          disabled={isBlocked}
        >
          +
        </button>
        <div className="item-quantity">1</div>
        <button
          className="item-action remove"
          onClick={() => quantityRemoveHandler(pid)}
          disabled={isBlocked}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default CartItem;
