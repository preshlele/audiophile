import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container py-[100px] px-[40px] rounded-[15px] relative h-[500px] bg-herobg w-full leading-3">
      <div>
        <p className="beats-solo text-xl">{heroBanner.smallText}</p>
        <h3 className="text-6xl mt-1 font-bold">{heroBanner.midText}</h3>
        <h1 className="text-white text-[10em] uppercase ml-[-20px] mt-16 mb-14 font-bold">{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image absolute right-[20%] top-[0%] w-[450px] h-[450px]"
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button
              type="button"
              className="py-[10px] px-[16px] rounded-[15px] text-white border-none bg-herobcbutt mt-[40px] text-xl font-medium cursor-pointer z-[10000]"
            >
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className="desc absolute right-[10%] bottom-[5%] w-[400px] leading-5 flex flex-col text-desc">
            <h5 className="mb-[12px] font-bold text-base self-end">
              Description
            </h5>
            <p className="font-thin text-end text-descP">{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner