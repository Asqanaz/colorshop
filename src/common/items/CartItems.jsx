import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const CartItems = (props) => {
  const { id, hexcode, price, name, onClick } = props;

  const [quantity, setQuantity] = useState(0);
  
  const quantityIncrement = () => {
    setQuantity(quantity + 1)
  }
  const quantityDecrement = () => {
    setQuantity(quantity - 1)
  }

  
  return (
    <div className={id > 3 ? "container top" : "container"} >
      <div className="color-image" style={{ background: hexcode }}></div>
      <div className="color-infos">
        <div className="name_and_price">
          <p className="price">ColorName: {name}</p>
          <p className="price top">Price: {price}$</p>
        </div>
        {quantity != 0 ? (
          <div className="quantity-info">
            <button onClick={quantityIncrement}>+</button>
            <div className="count">{quantity}</div>
            <button onClick = {quantityDecrement}>-</button>
          </div>
        ) : (
          <Button onClick = {onClick}>Add to cart</Button>
        )}
      </div>
    </div>
  );
};

export default CartItems;
