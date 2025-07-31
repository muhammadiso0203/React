import React, { useState } from 'react'
import { useGetValues } from '../hooks/useGetValues';
import useFetch from '../hooks/useFetch';
import { api } from '../api';

const initialState = {
  fname: "",
  lname: "",
  age: "",
  gender: "select",
}
const Login = () => {
  const { data } = useFetch('users')
  const { handleChange, formData, setFormData } = useGetValues(initialState);
  const [editItem, setEditItem] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    formData.age = Number(formData.age)
    if(editItem){
      api.put(`users/${editItem.id}`, formData)
      setEditItem(null)
    }else{
      api.post("users", formData)
    }


  };

  const handleDelete = (id) => {
    api.delete(`/users/${id}`)
  }
  const handleUpdate = post => {
    setEditItem(post)
    setFormData(post)
    
  }
  return (
    <section>
      <form onSubmit={handleSubmit} action="" className='container mx-auto flex gap-5 mt-10'>
        <input value={formData.fname} name='fname' onChange={handleChange} className='border border-gray-400 w-60 h-10 rounded-2xl px-2.5 shadow-lg hover:shadow-lg hover:-translate-y-0.5 transition duration-300' type="text" placeholder='First name' />
        <input value={formData.lname} name='lname' onChange={handleChange} className='border border-gray-400 w-60 h-10 rounded-2xl px-2.5 shadow-lg hover:shadow-lg hover:-translate-y-0.5 transition duration-300' type="text" placeholder='Last name' />
        <input value={formData.age} name='age' onChange={handleChange} className='border border-gray-400 w-60 h-10 rounded-2xl px-2.5 shadow-lg hover:shadow-lg hover:-translate-y-0.5 transition duration-300' type="number" placeholder='age' />
        <select value={formData.gender} name="gender" id="" onChange={handleChange} className='border border-gray-400 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition duration-300 w-20 pl-2'>
          <option disabled value="select" className='text-[15px]'>Select gender</option>
          <option value="male" className='text-[15px]'>Male</option>
          <option value="female" className='text-[15px]'>Female</option>
        </select>
        <button className=' w-20 p-2 text-[15px] border border-gray-400 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition duration-300'>{editItem ? "Save" : "Submit"}</button>
      </form>

      <div className='flex gap-2 container mx-auto mt-20'>
        <div className="grid grid-cols-6 gap-20">
          {data?.map((user) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 w-50"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {user.fname} {user.lname}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium text-gray-700">Age:</span> {user.age}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Gender:</span> {user.gender}
              </p>
              <button onClick={() => handleDelete(user.id)} className='border border-gray-400 rounded-2xl w-full mt-3'>Delete</button>
              <button onClick={() => handleUpdate(user)} className='border border-gray-400 rounded-2xl w-full mt-3'>Edit</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Login