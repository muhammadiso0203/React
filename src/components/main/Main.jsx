import React, { useState } from 'react'
import { card } from '../static'
import Popup from '../ui/popup'

const Main = () => {
    const [selectImage, setSelectImage] = useState(null)
    return (
        <section className='container mt-28 max-sm:px-3'>
            <h1 className='uppercase'>Projects</h1>
            <div className='max-w-[1320px] grid grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-0'>
                {
                    card.map((item) => (
                        <div key={item.id} className='mt-10'>
                            <div>
                                <img onClick={() => setSelectImage(item.img)} src={item.img} alt="" />
                            </div>
                            <h1 className='mt-4'>{item.title}</h1>
                        </div>
                    ))
                }
                <Popup isShow={selectImage} onClose={() => setSelectImage(null)}>
                    <img
                        className='h-[80vh] object-contain'
                        src={selectImage} alt="" />

                </Popup>
            </div>
        </section>
    )
}

export default Main