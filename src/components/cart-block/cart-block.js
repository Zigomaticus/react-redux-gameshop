import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";

import "./cart-block.css";

const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, item) => (acc += item.price), 0);

  return (
    <div className="cart-block">
      <BiCartAlt size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">{totalPrice} руб.</span>
    </div>
  );
};

export default CartBlock;
