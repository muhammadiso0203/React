import React from 'react'

const Button = ({children, className="", onClick}) => {
  return (
    <button onClick={onClick} className={`px-5 py-2 text-sm max-sm:text-xs max-sm:px-3 max-sm:py-1 bg-blue-500 text-white rounded ${className}`}>
        {children}
    </button>
  )
}

export default Button;