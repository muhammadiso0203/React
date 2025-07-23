import React from 'react'
import { product } from '../static'

function Work() {
    return (
        <section className='bg-black text-white'>
            <div className='container mx-auto pt-32'>
                <h1 className='text-center text-[40px] w-[768px] mx-auto'>The majority our customers do not understand their workflows.</h1>
                <p className='text-center mx-auto w-[768px] mt-5'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='flex flex-wrap gap-16 mt-12 justify-center'>
                    <div className='text-center flex'>
                        {
                            product?.slice(0, 3).map((item) => (
                                <div key={item.id} className='p-4'>
                                    <div className='w-80'>
                                        <img src={item.image} alt="" className='mx-auto' />
                                        <h1 className='mt-4 text-2xl'>{item.h1}</h1>
                                        <p className='mt-2 text-[18px]'>{item.p}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='text-center flex pb-20'>
                        {
                            product?.slice(3, 6).map((item) => (
                                <div key={item.id} className='p-4'>
                                    <div className='w-80'>
                                        <img src={item.image} alt="" className='mx-auto' />
                                        <h1 className='mt-4 text-2xl'>{item.h1}</h1>
                                        <p className='mt-2 text-[18px]'>{item.p}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <hr className='p-20' />

            </div>
        </section>
    )
}

export default Work