import React, { useEffect, useState } from "react";
import "./items.css";
import CartItems from "./CartItems";
import cartItems from "../../data/cartItems.json";

const Items = () => {
  const [availableCartItems, setAvailableCartItems] = useState([]);
  const [cartItemsState, setCartItemsState] = useState(cartItems)
  
  console.log(cartItemsState)
  console.log(availableCartItems)
  const handleAddCart = (e) => {
    setCartItemsState(cartItemsState.map(item => item.id === e.id ? {...item, isAvailable: !item.isAvailable } : {...item}))
    setAvailableCartItems(availableCartItems.map(item => cartItemsState.isAvailable ? {...item, cartItemsState} : {...item}))
  }
  
  return (
    <div className="items-container">
      {cartItems.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          hexcode={item.hexcode}
          name={item.name}
          price={item.price}
          onClick = {handleAddCart.bind(this, item)}
        />
      ))}
    </div>
  );
};

export default Items;
