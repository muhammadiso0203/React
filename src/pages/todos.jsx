import React, { useEffect, useState } from 'react'
import { api } from '../api'

const Todos = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])


  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-4xl font-bold mb-10">Todos</h1>
      <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {data.map(todo => (
          <div
            key={todo.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              {todo.title}
            </h2>
            <p className="text-gray-700 mb-4">Completed: {todo.completed}
            </p>
            <div className="text-sm text-gray-500">{todo.userId}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todos
