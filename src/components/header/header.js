import React from "react";
import { Link } from "react-router-dom";

// Components
import CartBlock from "../cart-block/cart-block";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          Game store
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};

// zaebal

export default Header;
