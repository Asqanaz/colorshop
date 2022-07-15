import React from 'react'
import "./homepage.css"
import Navbar from '../../common/navbar/Navbar'
import Items from '../../common/items/Items'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <p className='items-title'>
            Shop Items
        </p>
        <Items/>
    </div>
  )
}

export default HomePage