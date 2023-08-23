import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'



const Navbar = ({ cart }) => {
   
    return (
        <>
            <div className='flex bg-[#ffb62f] h-[60px] w-[100%] sticky z-10'>
                <div className='ml-[120px] font-serif text-2xl grid content-center'>
                    <span>Storify</span>
                </div>
                <div className='grid content-center mx-auto'>
                    <ul className='flex gap-16'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/about">
                                about
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='mr-[120px] grid content-center'>
                    <Link to='/cart' className='flex'>
                        <AiOutlineShoppingCart className='grid items-center' />
                        cart ({cart.length})
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar