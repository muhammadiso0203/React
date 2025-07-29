import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductsDetail = () => {
    const { id } = useParams()

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then(res => setData(res.data))
            .catch(error => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {
                error && (
                    <NotFound />
                )
            }
            <div className='container mx-auto grid grid-cols-2 gap-10 mt-10 max-md:grid-cols-1 p-4'>
                <div className='rounded-2xl overflow-hidden shadow-lg'>
                    <img
                        src={data?.images?.[0]}
                        alt={data?.title}
                        className='object-cover w-full h-full max-h-[600px]'
                    />
                </div>
                <div className='flex flex-col justify-center space-y-4'>
                    <h1 className='text-4xl font-bold text-gray-800'>{data?.title}</h1>
                    <p className='text-gray-600'>
                        <strong>Description:</strong> {data?.description}
                    </p>
                    <p className='text-gray-600'>
                        <strong>Category:</strong> {data?.category}
                    </p>
                    <p className='text-gray-600'>
                        <strong>Brand:</strong> {data?.brand}
                    </p>
                    <p className='text-gray-600'>
                        <strong>Return policy:</strong> {data?.returnPolicy || 'N/A'}
                    </p>
                    <p className='text-gray-600'>
                        <strong>Price:</strong> <span className='text-xl font-semibold text-green-600'>{data?.price} $</span>
                    </p>
                    <p className='text-gray-600'>
                        <strong>Rating:</strong> ⭐ {data?.rating}
                    </p>
                    <p className='text-gray-600'>
                        <strong>Quantity:</strong> {data?.minimumOrderQuantity || '1'}
                    </p>
                    <button
                        className='mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors duration-300 w-full max-w-xs'
                    >
                        🛒 Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )

}

export default ProductsDetail