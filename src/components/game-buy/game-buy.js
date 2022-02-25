import React from "react";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";

// Components
import Button from "../button/button";

import "./game-buy.css";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation(e);
    dispatch(setItemInCart(game));
  };

  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price}</span>
      <Button onClick={handleClick} type="primary">
        В корзину
      </Button>
    </div>
  );
};

export default GameBuy;
