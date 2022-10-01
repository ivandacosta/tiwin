import React from "react";
import { FaShoppingCart } from "react-icons/fa";

//Style
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="CartWidget">
      <p>
        <FaShoppingCart className="Cart" />
      </p>
    </div>
  );
};
