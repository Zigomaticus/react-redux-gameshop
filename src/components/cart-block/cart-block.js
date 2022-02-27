import React, { useCallback, useState } from "react";
import { BiCartAlt } from "react-icons/bi";

// Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Components
import CartMenu from "../cart-menu/cart-menu";
import ItemsInCart from "../items-in-cart/items-in-cart";

// Utils
import { calcTotalPrice } from "../utils";

// Css
import "./cart-block.css";

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};

export default CartBlock;
