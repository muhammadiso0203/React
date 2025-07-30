import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'

const UsersDetail = () => {
    const { id } = useParams()

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        api
            .get(`users/${id}`)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='container mx-auto grid grid-cols-2 gap-10 mt-20 max-md:grid-cols-1 items-center w-[90%]'>
            <div className='flex justify-center'>
                <img src={data?.image} alt={data?.firstName} className='w-[300px] rounded-xl' />
            </div>
            <div className='flex flex-col space-y-4'>
                <h1 className='text-4xl font-bold text-gray-800'>{data?.firstName} {data?.lastName}</h1>
                <p className='text-gray-700'><strong>Username:</strong> {data?.username}</p>
                <p className='text-gray-700'><strong>Email:</strong> {data?.email}</p>
                <p className='text-gray-700'><strong>Address:</strong> {data?.address?.city}, {data?.address?.street}</p>
                <p className='text-gray-700'><strong>Age:</strong> {data?.age}</p>
                <p className='text-gray-700'><strong>EyeColor:</strong> {data?.eyeColor}</p>
                <p className='text-gray-700'><strong>Gender:</strong> {data?.gender}</p>

                

            </div>
        </div>
    )
}

export default UsersDetail
