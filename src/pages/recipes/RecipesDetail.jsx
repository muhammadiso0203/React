import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipesDetail = () => {
    const { id } = useParams()

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios
            .get(`https://dummyjson.com/recipes/${id}`)
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
            <div className='container mx-auto grid grid-cols-2 gap-10 mt-20 max-md:grid-cols-1 items-center w-[90%]'>

                <div className='rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto'>
                    <img
                        src={data?.image}
                        alt={data?.name}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='flex flex-col space-y-4'>
                    <h1 className='text-4xl font-bold text-gray-800'>{data?.name}</h1>
                    <p className='text-gray-700'><strong>Difficulty:</strong> {data?.difficulty}</p>
                    <p className='text-gray-700'><strong>Per Serving:</strong> {data?.caloriesPerServing} cal</p>
                    <p className='text-gray-700'><strong>Cuisine:</strong> {data?.cuisine}</p>
                    <p className='text-gray-700'><strong>Cook Time:</strong> {data?.cookTimeMinutes} mins</p>
                    <p className='text-gray-700'><strong>Servings:</strong> {data?.servings}</p>
                    <p className='text-gray-700'><strong>Rating:</strong> ⭐ {data?.rating}</p>
                    <p className='text-gray-700'><strong>Prep Time:</strong> {data?.prepTimeMinutes} mins</p>

                </div>
            </div>
        </div>
    )

}

export default RecipesDetail