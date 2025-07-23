import React from 'react'
import video from "../../assets/Video.png"
import shape from "../../assets/Shape.png"

function Hero() {
    return (
        <>
            <section className='bg-black text-white mt-0 relative'>

                <div className='container mx-auto'>
                    <div className='text-center flex flex-col pt-30'>
                        <h1 className='text-[56px] font-bold'>Landing template for startups</h1>
                        <p className='text-[20px] mt-4 w-[650px] text-center mx-auto'>Our landing page template works on all devices, so you only have to
                            set it up once, and get beautiful results forever.</p>

                        <div className='flex gap-3 justify-center mt-8'>
                            <button className='bg-blue-700 rounded-[2px] w-42 h-12 '>Start free trial</button>
                            <button className='bg-gray-500 rounded-[2px] w-37 h-12'>Learn more</button>
                            <div className='absolute translate-x-[750px] mt-[-400px]'>
                                <img src={shape} alt="" />
                            </div>
                        </div>
                        <div>
                            <img src={video} alt="" className='mx-auto mt-16' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero