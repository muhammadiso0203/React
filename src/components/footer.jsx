import React from 'react'
import logo from "../assets/© DWEL.svg"

const Footer = () => {
    return (
        <footer className='bg-black text-white '>
            <div className='container mx-auto flex justify-between pt-24 mt-28 pb-10 max-lg:gap-10 max-md:gap-10 max-sm:flex-col max-sm:mt-0 max-sm:text-center'>
                <div>
                    <img src={logo} alt="" className='mx-auto' />
                    <h2>Powered by <span className='underline'>Webflow</span></h2>
                </div>
                <div className='flex gap-[183px] max-lg:gap-20 max-sm:flex-col max-sm:gap-8'>
                    <div>
                        <h2>Products</h2>
                        <h2>Clothings</h2>
                    </div>
                    <div>
                        <h2>Spring product</h2>
                        <h2>Summer product</h2>
                        <h2>Authom product</h2>
                    </div>
                    <div>
                        <h2>Twitter</h2>
                        <h2>Instagram</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer