import React from 'react'
import logo from "../../assets/© DWEL.svg"

const Footer = () => {
    return (
        <footer className='container flex justify-between pt-24 mt-28 max-sm:flex-col max-sm:mt-0 max-sm:text-center'>
            <div>
                <img src={logo} alt="" className='mx-auto' />
                <h2>Powered by <span className='underline'>Webflow</span></h2>
            </div>
            <div className='flex gap-[183px] max-sm:flex-col max-sm:gap-8'>
                <div>
                    <h2>Password</h2>
                    <h2>404</h2>
                </div>
                <div>
                    <h2>Licenses</h2>
                    <h2>Style Guide</h2>
                    <h2>Changelog</h2>
                </div>
                <div>
                    <h2>Twitter</h2>
                    <h2>Instagram</h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer