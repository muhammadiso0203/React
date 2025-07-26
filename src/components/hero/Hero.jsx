import React from 'react'

import hero from "../../assets/Frame.png"

const Hero = () => {
  return (
    <section className='max-sm:px-3'>
      <div className='container mt-10'>
        <img src={hero} alt="" />
      </div>
    </section>
  )
}

export default Hero