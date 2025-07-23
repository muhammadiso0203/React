import React from 'react'
import oval from "../../assets/Oval.png"

function Author() {
    return (
        <section className='bg-black pb-20'>
            <div className="container mx-auto pt-20">
                <div className="author">
                    <h1 className='text-4xl text-center text-white'>Don't take our word for it</h1>
                    <p className='text-[20px] text-white text-center w-[768px] mx-auto'>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
                </div>
                <div className='flex gap-6 justify-center mt-20'>
                    <div className='w-[352px] bg-gray-800 rounded-2xl'>
                        <img src={oval} alt="" className='p-[24px]' />
                        <p className='text-white p-[24px]'>— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
                        <hr className='p-5 text-gray-600 w-76 mx-auto' />
                        <div className='flex text-white pl-6 pb-5 gap-1'>
                            <p>Anastasia dan /</p>
                            <p className='text-blue-500'> UX Board</p>
                        </div>
                    </div>
                    <div className='w-[352px] bg-gray-800 rounded-2xl'>
                        <img src={oval} alt="" className='p-[24px]' />
                        <p className='text-white p-[24px]'>— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
                        <hr className='p-5 text-gray-600 w-76 mx-auto' />
                        <div className='flex text-white pl-6 pb-5 gap-1'>
                            <p>Anastasia dan /</p>
                            <p className='text-blue-500'> AppName</p>
                        </div>
                    </div>
                    <div className='w-[352px] bg-gray-800 rounded-2xl'>
                        <img src={oval} alt="" className='p-[24px]' />
                        <p className='text-white p-[24px]'>— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
                        <hr className='p-5 text-gray-600 w-76 mx-auto' />
                        <div className='flex text-white pl-6 pb-5 gap-1'>
                            <p>Anastasia dan /</p>
                            <p className='text-blue-500 '> Reform Layouts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Author