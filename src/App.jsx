import React, { useState } from 'react'
import Header from './components/header/header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App