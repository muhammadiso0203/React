import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'

const Login = () => {
    const navigate = useNavigate()

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-3xl p-8 border border-gray-200">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Sign In</h1>

                <div className="mb-5">
                    <label className="block text-gray-700 mb-2">Your Email</label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3">
                        <FaEnvelope className="text-gray-400 mr-2" />
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            className="w-full py-2 outline-none"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3">
                        <FaLock className="text-gray-400 mr-2" />
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full py-2 outline-none"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <button
                        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                    <button
                        className="flex items-center text-gray-600 hover:text-gray-800"
                        onClick={() => navigate('/')}
                    >
                        <IoMdArrowBack className="mr-1" /> Go Back
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Login
