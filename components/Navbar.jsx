import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="navbar-container flex justify-between my-[25px] mx-[18px] relative">
      <p className='logo text-lg text-gray-500'>
        <Link href="/">JBL Headphones</Link>
      </p>
      <button 
      type="button"
      className="cart-icon text-gray-500 cursor-pointer text-2xl relative border-none bg-transparent"
      onClick={''}
      >
        <AiOutlineShopping/>
        <span className="cart-item-qty absolute right-[-8px] text-xs text-cartqty bg-herobcbutt w-5 h-5 rounded-[50%] text-center font-semibold">1</span>
      </button>
    </div>
  )
}

export default Navbar