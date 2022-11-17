import React from 'react'
import {AiFillInstagram , AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="footer-container text-center mt-[20px] text-desc py-[30px] px-[10px] flex font-bold flex-col items-center gap-3 justify-center">
      <p>2022 Presh E-Commerce All Rights Reserved</p>
      <p className='icons text-3xl flex gap-3'>
        <AiOutlineTwitter/>
        <AiFillInstagram/>
      </p>
    </div>
  )
}

export default Footer