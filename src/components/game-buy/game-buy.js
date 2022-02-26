import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";

// Components
import Button from "../button/button";

import "./game-buy.css";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation(e);
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price}</span>
      <Button
        onClick={handleClick}
        type={isItemInCart ? "secondary" : "primary"}
      >
        {isItemInCart ? "Убрать из корзины" : "В корзину"}
      </Button>
    </div>
  );
};

export default GameBuy;
