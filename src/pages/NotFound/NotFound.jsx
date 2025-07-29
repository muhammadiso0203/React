import React from 'react'
import notFound from '../../assets/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className='container mx-auto flex justify-center flex-col'>
            <div className='mx-auto'>
                <img src={notFound} alt="" />
            </div>
            <div className='mx-auto flex gap-10'>
                <button className='w-30 h-10 rounded-2xl bg-blue-600' onClick={() => navigate("/products")}>Go Home</button>
            </div>
        </div>
    )
}

export default NotFound