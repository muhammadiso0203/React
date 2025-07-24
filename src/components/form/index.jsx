import React, { useState } from 'react'

const Form = () => {
  const [fullName, setfullName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let newTodos = {
      id: data.length + 1,
      fullName,
      email,
      password,
      birthdate,
      gender,
      data
    };
    setData((prev) => [...prev, newTodos]);
    setfullName("");
    setEmail("");
    setPassword("");
    setBirthdate("");
    setGender("");
  };
  const handleDelete = (id) => {
    setData(prev => prev.filter(item => item.id !== id))
  };



  return (
    <section className='flex'>
      <div className='w-1/2 h-[100vh] flex flex-col justify-center items-center bg-[#2d7873] sticky'>
        <div className='bg-white w-[500px] h-[600px] rounded-2xl p-10 mx-auto'>
          <h1 className='text-3xl font-bold'>Signup Form</h1>
          <form action="" onSubmit={handleSubmit} className='flex flex-col w-80 '>
            <label htmlFor="" className='pb-2 pt-3' >Full name</label>
            <input value={fullName} onChange={(event) => setfullName(event.target.value)} type="text" placeholder='Enter your full name' className='border border-gray-400 h-10 pl-3 outline-none w-[400px]' />
            <label htmlFor="" className='pb-2 pt-3'>Email Addres</label>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" placeholder='Enter your email addres' className='border border-gray-400 h-10 pl-3 outline-none w-[400px]' />
            <label htmlFor="" className='pb-2 pt-3' >Password</label>
            <input value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="off" type="text" placeholder='Enter your password' className='border border-gray-400 h-10 pl-3 outline-none w-[400px]' />
            <label htmlFor="" className='pb-2 pt-3'>Birth Date</label>
            <input value={birthdate} onChange={(event) => setBirthdate(event.target.value)} type="date" className='border h-10 pl-3 border-gray-400 outline-none w-[400px]' />
            <label htmlFor="" className='pb-2 pt-3'>Gender</label>
            <select value={gender} onChange={(event) => setGender(event.target.value)} name="" id="" className='border h-10 pl-3 border-gray-400 outline-none w-[400px]'>
              <option disabled>Select gender</option>
              <option value="male">male</option>
              <option value="female">Female</option>
            </select>
            <button type='submit' className='mt-6 h-10 bg-[#2d7873] rounded-[6px] text-white w-[400px]'>Submit</button>
          </form>
        </div>
      </div>
      <div className='mx-auto mt-10 '>
        <table>
          <thead className='bg-[#2d7873]'>
            <tr>
              <th className='px-8 py-5'>#</th>
              <th className='px-8 py-5'>Full name</th>
              <th className='px-8 py-5'>Email</th>
              <th className='px-8 py-5'>Password</th>
              <th className='px-8 py-5'>Birth Date</th>
              <th className='px-8 py-5'>Gender</th>
              <th className='px-8 py-5'>Action</th>
            </tr>
          </thead>
          <tbody className='[&>tr:nth-child(even)]:bg-[#F3F3F3]'>
            {data?.map((user) => (
              <tr key={user.id}>
                <td className='px-8 py-5'>{user.id}</td>
                <td className='px-8 py-5'>{user.fullName}</td>
                <td className='px-8 py-5'>{user.email}</td>
                <td className='px-8 py-5'>{user.password}</td>
                <td className='px-8 py-5'>{user.birthdate}</td>
                <td className='px-8 py-5'>{user.gender}</td>
                <td className='px-8 py-5'>
                  <button onClick={() => handleDelete(user.id)} className='bg-red-500 text-white px-2 py-1 rounded'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section >
  )
}

export default Form