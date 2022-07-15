import React, { useEffect, useState } from "react";
import "./items.css";
import CartItems from "./CartItems";
import cartItems from "../../data/cartItems.json";

const Items = () => {
  const [availableCartItems, setAvailableCartItems] = useState([]);
  const [cartItemsState, setCartItemsState] = useState(cartItems);

  const handleAddCart = (e) => {
    setCartItemsState(
      cartItemsState.map((item) =>
        item.id === e.id
          ? { ...item, isAvailable: !item.isAvailable }
          : { ...item }
      )
    );    
  };  
  
  
  console.log(availableCartItems);
  console.log(cartItemsState);
  return (
    <div className="items-container">
      {cartItems.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          hexcode={item.hexcode}
          name={item.name}
          price={item.price}
          onClick={handleAddCart.bind(this, item)}
        />
      ))}
    </div>
  );
};

export default Items;
