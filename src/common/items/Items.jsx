import React, { useEffect, useState } from "react"
import "./items.css"
import CartItems from "./CartItems"
import cartItems from "../../data/cartItems.json"

const Items = () => {
	const [availableItems, setAvailableItems] = useState([])
	const [itemsQuantity, setItemQuantity] = useState(0)

	const handleAddCart = (e) => {
    setAvailableItems([...availableItems, e])
    setItemQuantity(itemsQuantity + 1)
	}


  console.log(availableItems)
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
	)
}

export default Items
