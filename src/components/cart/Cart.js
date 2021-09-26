import React from "react";
import Cartlist from "../cartlist/Cartlist";
import "./Cart.css";

import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  let total = 0;

  for (const singer of cart) {
    total = parseInt(total) + parseInt(singer.album);
  }

  return (
    <div className="cart">
      <h3>Thanks for Your Vote </h3>
      <h5>Total Vote added:{props.cart.length}</h5>
      <h5>Total Album:{total}</h5>

      <div>
        {cart.map((cartName) => (
          <Cartlist key={cartName.id} cartName={cartName}></Cartlist>
        ))}
      </div>
    </div>
  );
};

export default Cart;
