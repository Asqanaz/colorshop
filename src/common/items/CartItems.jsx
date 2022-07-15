import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
const CartItems = (props) => {
  const { id, hexcode, price, name, onClick } = props;
  const [quantity, setQuantity] = useState(0);
  const [cartCount, setCarCount] = useState(0);
  
   

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
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <div className="count">{quantity}</div>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
          </div>
        ) : (
          <Button onClick = {onClick}>Add to cart</Button>
        )}
      </div>
    </div>
  );
};

export default CartItems;
