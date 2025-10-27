import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (

    <div>
        <Link className='link' to="/home">Home</Link>
        <Link className='link' to="/product">Product</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/contact">Contact</Link>
    </div>

  )
}

export default Navigation