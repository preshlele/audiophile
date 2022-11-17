import React from 'react'
import Link from 'next/link'
import {urlFor} from '../lib/client'

const FooterBanner = ({footerBanner:{discount, largeText1, largeText2, saleTime, midText, product, buttonText, image, smallText, desc}}) => {
  return (
    <div className="footer-banner-container py-[100px] px-10 rounded-xl relative h-[400px] text-white w-full mt-[120px] bg-herobcbutt">
      <div className="banner-desc flex justify-between">
        <div className="left">
          <p className="m-5">{discount}</p>
          <h3 className="ml-6 text-[80px] font-black">{largeText1}</h3>
          <h3 className="ml-6 text-[80px] font-black">{largeText2}</h3>
          <p className="m-5">{saleTime}</p>
        </div>
        <div className="right text-base">
          <p className='text-lg'>{smallText}</p>
          <h3 className="text-6xl font-extrabold">{midText}</h3>
          <p className="text-lg">{desc}</p>
          <Link href={`/product/${product}`}>
            <button
              type="button"
              className="rounded-xl py-[10px] px-4 bg-white text-red-500 border-none mt-10 text-xl font-medium cursor-pointer"
            >
              {buttonText}
            </button>
          </Link>
        </div>
        <img
          src={urlFor(image)}
          className="footer-banner-image absolute top-[-25%] left-1/4 w-[360px]"
        />
      </div>
    </div>
  );
}

export default FooterBanner