import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Skeleton from '../../components/ui/skeleton'
import NotFound from '../NotFound/NotFound'

const Users = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://dummyjson.com/users')
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className='text-center text-4xl font-bold mt-10'>Users</h1>

      {error && <NotFound />}
      {loading && <Skeleton />}

      <div className='container mx-auto grid grid-cols-4 mt-10 gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 px-4'>
        {data?.users?.map((user) => (
          <div
            key={user.id}
            className='bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl overflow-hidden flex flex-col justify-between text-center'
          >
            <div className='overflow-hidden'>
              <img
                src={user.image}
                alt={user.firstName}
                className='object-cover w-full h-[220px] hover:scale-105 transition-transform duration-300'
                onClick={() => navigate(`/users/${user.id}`)}
              />
            </div>

            <div className='py-4 px-4'>
              <h3 className='font-semibold text-lg text-gray-800'>
                {user.firstName} {user.lastName}
              </h3>

              <button
                onClick={() => navigate(`/users/${user.id}`)}
                className='bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition active:scale-95 w-full'
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
