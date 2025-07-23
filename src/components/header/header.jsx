import React from 'react'
import logo from "../../assets/Logo.svg"

function Header() {
    return (
        <header className='bg-black'>
            <nav className='container mx-auto h-20 flex gap-8 items-center justify-between text-white'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='flex gap-12 items-center'>
                    <a href="#" className='text-blue-600'>Sign in</a>
                    <button className='bg-blue-700 rounded-[2px] w-24 h-10'>Sign up</button>
                </div>
            </nav>
        </header>
    )
}

export default Header