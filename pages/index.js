import React from 'react'
import {client} from '../lib/client' 
import { Product, FooterBanner, HeroBanner } from '../components'


const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    {/* {console.log(bannerData)} */}
    <div className="products-heading text-center my-10 text-prod">
      <h2 className="font-bold text-3xl">Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className="products-container flex flex-wrap justify-center gap-4 mt-5 w-full">
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

    export const getServerSideProps = async()=>{
    const query = '*[_type == "product"]'
    const products = await client.fetch(query)

    const bannerQuery = '*[_type == "banner"]'
    const bannerData = await client.fetch(bannerQuery)

    return {
      props: {products, bannerData}
    }
  }
 

export default Home