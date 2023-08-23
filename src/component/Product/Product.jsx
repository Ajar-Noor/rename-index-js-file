import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'

const Product = ({addToCart}) => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
   

    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json())
        setLoading(false)
    }

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='flex h-[400px] w-[800px] mx-auto mt-[70px]'>
                    <div className='h-[400px] w-[500px] mr-[-100px]'>
                        <img src={product.image} alt={product.title} className='h-[100%] width-[100%] object-contain' />
                    </div>
                    <div className='h-[300px] w-[300px]'>
                        <h1  className='text-2xl text-[orange] font-bold mb-[20px]'>{product.category}</h1>
                        <h1><span className='text-xl text-[orange] font-normal'>Title:  </span>{product.title}</h1>
                        <p className='font-medium text-[orange]'>
                            Rating {product.rating && product.rating.rate}
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                        </p>
                        <h3 className='text-2xl font-bold'>${product.price}</h3>
                        <p><span className='text-xl text-[orange] font-normal'>Description:  </span>{product.description}</p>
                        <button onClick={()=>addToCart(product)} 
                        className='text-[black] font-bold text-lg border-2 border-[orange] p-2 mt-[10px]'>
                            Add to Cart
                            </button>
                        {/* <Link to='/cart'>Go to Cart</Link> */}
                    </div>
                </div>
            </>
        )
    }

    return (
        <>

            {loading ? <Loading /> : <ShowProducts />}
        </>
    )
}

export default Product