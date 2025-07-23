import React from 'react'
import chat from "../../assets/Illustration.png"
import path from "../../assets/Path.png"
import chat2 from "../../assets/Illustration (1).png"
import chat3 from "../../assets/Illustration (2).png"

function Project() {
    return (
        <section className='bg-black'>
            <div className='container mx-auto pb-20'>
                <div>
                    <div className='bg-[#c6f6d5] w-44 border border-gray-50 mx-auto text-[#36A269] rounded-2xl'>
                        <p className='text-[14px] text-center '>Reach goals that matter</p>
                    </div>
                    <h1 className='text-white text-4xl text-center mt-4'>One product, unlimited solutions</h1>
                    <p className='text-white text-2xl text-center w-[768px] mx-auto mt-4'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit laborum — semper quis lectus nulla.</p>
                </div>
                <div className='flex flex-row-reverse gap-16 mx-auto justify-center mt-20'>
                    <img src={chat} alt="" />
                    <div className='text-white w-[35%]'>
                        <h3 className='text-2xl'>More speed. Less spend</h3>
                        <h1 className='mt-2 text-3xl'>Keep projects on schedule</h1>
                        <p className='mt-2 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='flex items-center mt-4 text-[18px]'><img src={path} alt="" />Duis aute irure dolor in reprehenderit</p>
                        <p className='flex items-center mt-2 text-[18px]'><img src={path} alt="" />Excepteur sint occaecat </p>
                        <p className='flex items-center mt-2 text-[18px]'><img src={path} alt="" />Amet consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className='flex gap-16 mx-auto justify-center mt-20'>
                    <img src={chat2} alt="" />
                    <div className='text-white w-[35%]'>
                        <h3 className='text-2xl'>More speed. Less spend</h3>
                        <h1 className='mt-2 text-3xl'>Keep projects on schedule</h1>
                        <p className='mt-2 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='flex items-center mt-4 text-[18px]'><img src={path} alt="" />Duis aute irure dolor in reprehenderit</p>
                        <p className='flex items-center mt-2 text-[18px]'><img src={path} alt="" />Excepteur sint occaecat </p>
                        <p className='flex items-center mt-2 text-[18px]'><img src={path} alt="" />Amet consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className='flex flex-row-reverse gap-16 mx-auto justify-center mt-20'>
                    <img src={chat3} alt="" />
                    <div className='text-white w-[35%]'>
                        <h3 className='text-2xl'>More speed. Less spend</h3>
                        <h1 className='mt-2 text-3xl'>Keep projects on schedule</h1>
                        <p className='mt-2 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='flex items-center mt-4 text-[18px]'><img src={path} alt="" />Duis aute irure dolor in reprehenderit</p>
                        <p className='flex items-center mt-2 text-[18px]'><img src={path} alt="" />Excepteur sint occaecat </p>
                        <p className='flex items-center mt-2 text-[18px]'><img src={path} alt="" />Amet consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <hr className='pb-5 text-white' />
            </div>
        </section>
    )
}

export default Project