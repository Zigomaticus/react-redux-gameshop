import React from "react";

// Components
import Button from "../button/button";

// Utils
import { calcTotalPrice } from "../utils";

import "./cart-menu.css";

const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0 ? items.map((game) => game.title) : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Button type="primary" size="medium" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
