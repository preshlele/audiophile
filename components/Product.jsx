import React from 'react'
import Link from 'next/link'

import {urlFor} from '../lib/client'

const Product = ({product:{name, image, price, slug}}) => {
  return (
    <div className="">
      <Link href={`/product/${slug.current}`}>
        <div className="product-card cursor-pointer text-desc scale-100 ease-in-out ">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image rounded-2xl bg-prodImage scale-100 ease-in-out"
          />
          <p className='product-name font-medium'>{name}</p>
          <p className='product-price font-extrabold text-black mt-2'>${price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product