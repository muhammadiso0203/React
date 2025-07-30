import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const Users = () => {
  const { data, error, loading } = useFetch('users') 
  const navigate = useNavigate()


  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-10">Users</h1>
      <div className="container mx-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 px-4 mt-10">
        {data?.users?.map(user => (
          <div
            key={user.id}
            onClick={() => navigate(`/users/${user.id}`)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 cursor-pointer"
          >
            <div className='mx-auto flex justify-center'>
              <img src={user.image} alt="" />
            </div>
            <h2 className="text-lg text-center font-semibold text-blue-800 mb-2 line-clamp-2">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-500 text-center">Username: {user.username}</p>
            <p className='text-center'>Email: {user.email}</p>
            <p className='text-center'>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
