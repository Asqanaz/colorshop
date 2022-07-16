import React, { useEffect, useState } from "react"
import "./items.css"
import CartItems from "./CartItems"
import cartItems from "../../data/cartItems.json"
import { inputAdornmentClasses } from "@mui/material"

const Items = () => {
	const [cartItemsState, setCartItemsState] = useState(cartItems)
	const [pickedItems, setPickedItems] = useState([])
	const [itemsQuantity, setItemQuantity] = useState(pickedItems.length)
	const handleAddCart = (e) => {
		setCartItemsState(
			cartItemsState.map((item) =>
				item.id === e.id
					? { ...item, isAvailable: !item.isAvailable }
					: { ...item }
			)
		)

	}
  
	useEffect(() => {
    cartItemsState.forEach((item) => {
      item.isAvailable
        ? setPickedItems([...pickedItems, item])
        : { ...pickedItems }
    })
    }, [cartItemsState])

	console.log(cartItemsState)
	console.log(pickedItems)
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
