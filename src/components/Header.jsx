import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-gray-800 text-white shadow-md">
            <nav className=' container mx-auto p-6 flex justify-between'>
                <div>
                    <NavLink to={"/"}>Logo</NavLink>
                </div>
                <div className='flex gap-10'>
                    <NavLink to={"/"} className={({ isActive }) =>
                        `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''
                        }`
                    }
                    >Users</NavLink>
                    <NavLink to={"/posts"} className={({ isActive }) =>
                        `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''
                        }`
                    }>Posts</NavLink>
                    <NavLink to={"/todos"} className={({ isActive }) =>
                        `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''
                        }`
                    }>ToDos</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header