import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Fresh-food-logo-design-on-transparent-background-PNG-removebg-preview.png'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-14 object-contain" />
        </NavLink>

        <div className="flex gap-6 mt-4 md:mt-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-orange-500 transition font-semibold ${
                isActive ? 'text-orange-500' : ''
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `hover:text-orange-500 transition font-semibold ${
                isActive ? 'text-orange-500' : ''
              }`
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `hover:text-orange-500 transition font-semibold ${
                isActive ? 'text-orange-500' : ''
              }`
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:text-orange-500 transition font-semibold ${
                isActive ? 'text-orange-500' : ''
              }`
            }
          >
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
