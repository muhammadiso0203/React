import React from 'react'
import error from "../../assets/android-error-handling-in-clean-architecture-844a7fc0dc03.png"

const ErrorWidget = ({text="Something went wrong :("}) => {
  return (
    <div className='flex flex-col items-center'>
        <img src={error} alt="" />
        <p className='text-red-500 text-center'>{text}</p>
    </div>
  )
}

export default ErrorWidget;