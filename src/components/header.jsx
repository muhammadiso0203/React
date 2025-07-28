import React from 'react'

const Header = () => {
  return (
    <header>
        <div>
            <ul className='container mx-auto flex gap-96 justify-center pt-5 max-lg:flex max-lg:gap-70 max-md:gap-50 max-sm:gap-30'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </header>
  )
}

export default Header