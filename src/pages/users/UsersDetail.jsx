import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

const UsersDetail = () => {
    const { id } = useParams()

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios
            .get(`https://dummyjson.com/users/${id}`)
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
                        alt={data?.firstName}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='flex flex-col space-y-4'>
                    <h1 className='text-4xl font-bold text-gray-800'>{data?.firstName}</h1>
                    <p className='text-gray-700'><strong>Last Name:</strong> {data?.lastName}</p>
                    <p className='text-gray-700'><strong>Age:</strong> {data?.age}</p>
                    <p className='text-gray-700'><strong>Gender:</strong> {data?.gender}</p>
                    <p className='text-gray-700'><strong>Birth Date:</strong> {data?.birthDate}</p>
                    <p className='text-gray-700'><strong>Email:</strong> {data?.email}</p>
                    <p className='text-gray-700'><strong>Height:</strong> {data?.height} cm</p>
                    <p className='text-gray-700'><strong>Phone Number:</strong> {data?.phone}</p>
                </div>
            </div>
        </div>
    )

}

export default UsersDetail;