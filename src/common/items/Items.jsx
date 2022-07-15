import React, { useEffect, useState } from "react";
import "./items.css";
import CartItems from "./CartItems";
import cartItems from "../../data/cartItems.json";

const Items = () => {
  const [availableCartItems, setAvailableCartItems] = useState([]);
  return (
    <div className="items-container">
      {cartItems.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          hexcode={item.hexcode}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Items;
