import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Skeleton from './ui/skeleton';
import ErrorWidget from './ui/errorWidget';
import Popup from './ui/popup';

const Hero = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null)
    const [select, setSelect] = useState(null)
    const handleClose = () => setSelect(null)
    const limit = 8

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setData(res.data))
            .catch((err) => setErr(err))
            .finally(() => setLoading(false))
    }, []);

    return (
        <div>
            <h2 className='text-center mt-10 font-bold text-4xl'>Products</h2>
            {err && (
                <ErrorWidget />
            )}
            {loading && (
                <Skeleton />
            )}
            <div className='container mx-auto grid grid-cols-4 gap-5 mt-10 mb-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-5'>
                {data?.map((product) => (
                    <div
                        onClick={() => setSelect(product)}
                        className='shadow-lg rounded-lg overflow-hidden'
                        key={product.id}
                    >
                        <div className='p-2.5 '>
                            <img src={product.image} alt="" className='w-full h-[300px] object-contain' />
                        </div>
                        <h1 className='pb-2 mx-3'>
                            {product.title}
                        </h1>
                        <h3 className='pb-2 mx-3'>
                            {product.price}
                        </h3>
                    </div>
                ))}

                <Popup isShow={!!select} onClose={() => setSelect(null)}>
                    {select && (
                            <div className='w-[900px] bg-white rounded-3xl overflow-hidden flex'>
                                <div className='pl-[15px] w-full h-[525px] object-contain flex items-center'>
                                    <img src={select.image} alt="" className='max-w-[400px] h-auto p-5 ' />
                                </div>
                                <div className='flex flex-col justify-center p-10'>
                                    <h1><span className='font-bold'>Title:</span> {select.title}</h1>
                                    <p><span className='font-bold'>Description:</span> {select.description}</p>
                                    <p><span className='font-bold'>Category:</span> {select.category}</p>
                                    <p><span className='font-bold'>Price:</span> {select.price}</p>
                                    <p><span className='font-bold'>Rating:</span> {select.rating.rate}</p>
                                </div>
                            </div>
                    )}
                </Popup>
            </div>
        </div>
    )
}


export default Hero