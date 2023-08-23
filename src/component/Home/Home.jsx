import React from 'react'
import Products from '../Products/Products'

const Home = () => {
  return (
    <div>
      <img src='./assets/hft.webp' alt='banner' className='h-[400px] w-[100%] mt-6 object-contain' />
      <Products />
    </div>
  )
}

export default Home