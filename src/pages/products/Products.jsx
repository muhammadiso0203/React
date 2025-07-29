import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Skeleton from '../../components/ui/skeleton'
import NotFound from '../NotFound/NotFound'

const Products = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://dummyjson.com/products')
      .then(res => setData(res.data))
      .catch(err => setError(err)) // ❗️Bu yerda `error` o'rniga `err` kerak edi
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className='text-center text-4xl font-bold mt-10'>Products</h1>

      {error && <NotFound />}
      {loading && <Skeleton />}

      <div className='container mx-auto grid grid-cols-4 mt-10 gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 px-4'>
        {data?.products?.map((product) => (
          <div
            key={product.id}
            className='bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col justify-between'
          >
            <div className='overflow-hidden cursor-pointer' onClick={() => navigate(`/${product.id}`)}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className='object-cover w-full h-[200px] hover:scale-105 transition-transform duration-300'
              />
            </div>

            <div className='py-4 px-4 text-center'>
              <h3
                className='line-clamp-1 font-semibold text-lg text-gray-800 mb-2'
                title={product.title}
              >
                {product.title}
              </h3>

              <p className='text-gray-500 font-medium mb-2'>${product.price}</p>

              <button
                onClick={() => handleAddToCart(product)}
                className='bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-400 transition duration-300 active:scale-95 w-full'
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
