import classNames from "classnames";
import React from "react";

import "./button.css";

const Button = ({ onClick, type, children }) => {
  const btnClass = classNames({
    btn: true,
    "btn--secondary": type === "secondary",
    "btn--primary": type === "primary",
    "btn--small": type === "small",
    "btn--medium": type === "medium",
  });

  return (
    <button className={btnClass} onClick={onClick}>
      В корзину
    </button>
  );
};

export default Button;
