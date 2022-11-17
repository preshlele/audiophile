import {React, useState} from 'react';
import {client, urlFor} from '../../lib/client'
import {AiFillStar, AiOutlineMinus, AiOutlineStar, AiOutlinePlus} from 'react-icons/ai'
import { Product } from '../../components'
import {useStateContext} from '../../context/StateContext';

const ProductDetails = ({product, products}) => {
    const {image,name, details, price} = product

    const [index,setIndex] = useState(0);

    const {decQty, incQty,qty} = useStateContext();

  return (
    <div>
      <div className="product-detail-container flex gap-10 m-10 mt-[60px] text-desc">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image rounded-2xl bg-prodImage hover:bg-herobcbutt w-[400px] h-[400px] cursor-pointer
              ease-in-out duration-300 delay-100"
            />
          </div>
          <div className="small-images-container flex gap-[10px] mt-5">
            {image?.map((item, i) => (
              <img
                src={urlFor(item)}
                className={
                  i === index
                    ? "small-image rounded-lg bg-herobcbutt w-[70px] h-[70px] selected-image "
                    : "small-image small-image rounded-lg bg-prodImage w-[70px] h-[70px]"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc mt-[10px]">
          <h1 className="font-bold text-xl">{name}</h1>
          <div className="reviews text-herobcbutt mt-[10px] flex gap-1 items-center">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="mt-0 text-desc">(20)</p>
          </div>
          <h4 className="mt-[10px] font-bold">Details:</h4>
          <p className="mt-2">{details}</p>
          <p className="price font-bold text-2xl mt-7 text-herobcbutt">
            ${price}
          </p>
          <div className="quantity flex gap-5 mt-[10px] items-center">
            <h3 className="font-bold">Quantity:</h3>
            <p className=" flex quantity-desc border-solid border-2 border-gray-200 p-[6px]">
              <span
                className="py-[6px] px-3 cursor-pointer border-solid text-base minus border-r-gray-300  text-herobcbutt"
                onClick={decQty}
              >
                <AiOutlineMinus />
              </span>
              <span
                className="py-[6px] px-3 cursor-pointer border-solid text-lg num"
                onClick={qty}
              >
                0
              </span>
              <span
                className="py-[6px] px-3 cursor-pointer plus text-[#31A831]"
                onClick={incQty}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons flex gap-8">
            <button
              type="button"
              className="add-to-cart py-[10px] px-5 border-herobcbutt border-2 border-solid mt-10 text-lg font-medium bg-white text-herobcbutt cursor-pointer w-[200px]"
              onClick=""
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="buy-now w-[200px] py-[10px] px-5 bg-herobcbutt text-white border-none mt-10 text-lg font-medium cursor-pointer"
              onClick=""
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper mt-[120px]">
        <h2 className="text-center font-bold m-[50px] text-desc text-[28px]">
          You may also like
        </h2>
        <div className="marquee">
          <div className="maylike-products-container track flex justify-center gap-4 mt-5">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async ()=>{
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`
    const products = await client.fetch(query)

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params: {slug}}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery);

  console.log(product)

  return {
    props: { product, products}
  };
};

export default ProductDetails