import React from 'react'
import logo from "../../assets/Logo.svg"
import icon1 from "../../assets/1.png"
import icon2 from "../../assets/2.png"
import icon3 from "../../assets/3.png"
import icon4 from "../../assets/4.png"
import icon5 from "../../assets/5.png"

function Footer() {
    return (
        <footer className='bg-black pb-[67px]'>
            <div className='container mx-auto pb-16'>
                <div className="w-[1104px] h-[206px] mx-auto bg-[#5d5dff] flex justify-around items-center">
                    <div className='text-white'>
                        <h1 className='text-[32px]'>Stay in loop</h1>
                        <p className='text-[18px]'>Join our newsletter to get top news before anyone else.</p>
                    </div>
                    <div className='flex gap-2'>
                        <input type="text" placeholder='Your best email…' className='border border-[#7e7ef4] w-80 h-12  p-4' />
                        <button className='border border-white w-[139px] h-12 bg-white text-blue-600'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex gap-[169px] justify-center'>
                <div className='text-white w-[352px] text-[16px]'>
                    <img src={logo} alt="" />
                    <p className='mt-[14px]'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <p className='mt-[63px]'>Made by Cruip. All right reserved</p>
                </div>
                <div className='flex gap-20'>
                    <div className='text-white'>
                        <p>Products</p>
                        <p className='mt-[4px]'>Web Studio</p>
                        <p className='mt-[4px]'>DynamicBox Flex</p>
                        <p className='mt-[4px]'>Programming Forms</p>
                    </div>
                    <div className='text-white'>
                        <p className='mt-[4px]'>Resources</p>
                        <p className='mt-[4px]'>Nostrud exercitation</p>
                        <p className='mt-[4px]'>Visual mockups</p>
                        <p className='mt-[4px]'>Nostrud exercitation</p>
                        <p className='mt-[4px]'>Visual mockups</p>
                        <p className='mt-[4px]'>Nostrud exercitation</p>
                    </div>
                    <div className='text-white'>
                        <p className='mt-[4px]'>Company</p>
                        <p className='mt-[4px]'>Consectetur adipiscing</p>
                        <p className='mt-[4px]'>Labore et dolore</p>
                        <p className='mt-[4px]'>Consectetur adipiscing</p>
                        <p className='mt-[4px]'>Labore et dolore</p>
                        <p className='mt-[4px]'>Consectetur adipiscing</p>
                    </div>
                </div>
            </div>
                <div className='container mx-auto flex items-center justify-end ml-1 gap-[16px]'>
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                    <img src={icon5} alt="" />
                </div>
        </footer>
    )
}

export default Footer