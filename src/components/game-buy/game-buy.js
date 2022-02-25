import React from "react";

// Components
import Button from "../button/button";

import "./game-buy.css";

const GameBuy = ({ game }) => {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price}</span>
      <Button onClick={() => null} type="primary">
        В корзину
      </Button>
    </div>
  );
};

export default GameBuy;
