import React, { useEffect, useState } from 'react'
import { api } from '../api'

const Posts = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setData(res.data))
      .catch(err => setError('Ma\'lumotlarni yuklashda xatolik yuz berdi.'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold">Yuklanmoqda...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-xl">
        {error}
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-4xl font-bold mb-10">Postlar</h1>
      <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {data.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              {post.title}
            </h2>
            <p className="text-gray-700 mb-4">{post.body}
            </p>
            <div className="text-sm text-gray-500">Foydalanuvchi ID: {post.userId}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts
