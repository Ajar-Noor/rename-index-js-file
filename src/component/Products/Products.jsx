import React, { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom'


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);
    const componentMounted = useRef(false)

    useEffect(() => {
        console.log(data)
        fakeStoreApi();
        return () => {
            componentMounted.current = false;
        };
    }, [])

    const fakeStoreApi = async () => {
        setloading(true)
        const response = await fetch('https://fakestoreapi.com/products')
        if (componentMounted) {
            const jsonData = await response.clone().json();
            setData(jsonData)
            setfilter(jsonData)
            setloading(false)
        }


    }

    const Loading = () => {
        return (
            <>
                <div>
                    <Skeleton height={400} />
                </div>
                <div>
                    <Skeleton height={400} />
                </div>
                <div>
                    <Skeleton height={400} />
                </div>

            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((curr) => curr.category === cat);
        setfilter(updatedList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='flex items-center mt-8'>
                    <button onClick={() => setfilter(data)} className='h-[35px] w-[150px] ml-[50px]'>All</button>
                    <button onClick={() => filterProduct(`men's clothing`)} className='h-[35px] w-[150px] ml-[30px]'>Men Collection</button>
                    <button onClick={() => filterProduct(`women's clothing`)} className='h-[35px] w-[150px] ml-[30px]'>Women Collection</button>
                    <button onClick={() => filterProduct(`jewelery`)} className='h-[35px] w-[150px] ml-[30px]'>Jewellery</button>
                    <button onClick={() => filterProduct(`electronics`)} className='h-[35px] w-[150px] ml-[30px]'>Electronics</button>
                </div>
            </>
        )
    }


    return (
        <div>

            <div className='flex flex-wrap justify-center'>
                <div>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
                {filter.map((curr) => (
                    <div key={curr.index}
                        className='h-[400px] py-4 px-5 w-[400px] mt-[50px] drop-shadow-md ml-8 bg-white grid items-center'>
                        <div>
                            {/* <h1 className='h-[20px] w-[20px] border-[#808080] items-center scroll-mx-4 flex content-center border-2 rounded-3xl'>{curr.id}</h1> */}
                            {/* <h3>{curr.category}</h3> */}
                        </div>
                        <div className='h-[200px] w-[400px]'>
                            <img src={curr.image} alt="" className='h-[100%] w-[100%] object-contain' />
                        </div>

                        <div>
                            <p className='font-extrabold text-[Black] ml-[130px]'>{curr.title.substring(0, 12)}...</p>
                            {/* <p className='text-bold text-[#808080]'>{curr.description}</p> */}
                            <p className='text-[#b3b0b0] ml-[130px]'>${curr.price}</p>
                        </div>
                        <div className='mt-[-30px]'>
                            <Link to={`/product/${curr.id}`} className='ml-[130px] text-[#ffb62f]'>Buy Now</Link>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default Products