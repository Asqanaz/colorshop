import React from "react";
import "./navbar.css"
import {FiShoppingCart} from 'react-icons/fi'
const Navbar = () => {
  return (
    <header>
      <div className="header">
        <ul className="navbar-items">
          <li>Home</li>
          <li>Cart</li>
          <li>Contact</li>
        </ul>
        <FiShoppingCart className="cart-icon"/>
      </div>
    </header>
  );
};

export default Navbar;
