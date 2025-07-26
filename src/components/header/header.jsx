import React, { useState } from 'react'
import logo from "../../assets/DWEL®.svg"
import Button from '../ui/button'
import Popup from '../ui/popup'

const Header = ({ b }) => {
    const [show, setShow] = useState(false);
    const [showSignUp, setSignUp] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const handleSignup = () => setSignUp(true)
    const handleCloseUp = () => setSignUp(false)
    return (
        <header className='pt-5 pb-5'>
            <div className='container flex justify-between max-sm:px-3'>
                <img src={logo} alt="" />
                <div className='flex gap-5'>
                    <Button onClick={handleShow} className='max-sm:text-sm' children={"Sign in"}></Button>
                    <Popup isShow={show} onClose={handleClose}>
                        <div className="size-150 bg-white p-4 rounded-[40px]">
                            <h1 className='text-center text-3xl font-bold mt-[10%]'>Sign in</h1>
                            <label htmlFor="" className='flex mx-auto mt-3 w-120 h-10'>Your email:</label>
                            <input className="border border-gray-400 rounded-[6px] outline-none flex mx-auto w-120 h-10 p-3" type="email" placeholder='Your email' />
                            <label htmlFor="" className='flex mx-auto mt-3 w-120 h-10'>Your password:</label>
                            <input className="border border-gray-400 rounded-[6px] outline-none flex mx-auto w-120 h-10 p-3" type="text" placeholder='Your password'/>
                            <div className='flex'>
                                <Button className='mt-6 flex mx-auto w-30 h-10 justify-center items-center'>Submit</Button>
                                <Button className='mt-6 flex mx-auto w-30 h-10 justify-center items-center' onClick={handleClose}>Cancel</Button>
                            </div>
                        </div>
                    </Popup>
                    <Button onClick={handleSignup} className='max-sm:text-sm' children={"Sign up"}></Button>
                    <Popup isShow={showSignUp} onClose={handleCloseUp}>
                        <div className="size-150 bg-white p-4 rounded-[40px]">
                            <h1 className='text-center text-3xl font-bold mt-[10%]'>Sign up</h1>
                            <label htmlFor="" className='flex mx-auto mt-3 w-120 h-10'>Your email:</label>
                            <input className="border border-gray-400 rounded-[6px] outline-none flex mx-auto w-120 h-10 p-3" type="email" placeholder='Your email' />
                            <label htmlFor="" className='flex mx-auto mt-3 w-120 h-10'>Your password:</label>
                            <input className="border border-gray-400 rounded-[6px] outline-none flex mx-auto w-120 h-10 p-3" type="text" placeholder='Your password'/>
                            <label htmlFor="" className='flex mx-auto mt-3 w-120 h-10'>Confirm your password:</label>
                            <input className="border border-gray-400 rounded-[6px] outline-none flex mx-auto w-120 h-10 p-3" type="text" placeholder='Your confirm password'/>
                            <div className='flex'>
                                <Button className='mt-6 flex mx-auto w-30 h-10 justify-center items-center'>Submit</Button>
                                <Button className='mt-6 flex mx-auto w-30 h-10 justify-center items-center' onClick={handleCloseUp}>Cancel</Button>
                            </div>
                        </div>
                    </Popup>
                </div>
            </div>
        </header>
    )
}

export default Header