import React from 'react'
import Logo from './logo.jpg'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[50px]' src={Logo} alt="" />
        
        <Link to="/" className='text-white text-3xl font-italic'>Movies</Link>
        <Link to="/watchlist" className='text-white text-3xl font-italic'>Watchlist</Link>
        <div style={{ fontSize: '5rem', fontFamily: 'Protest Revolution', paddingLeft: '20px' }}>Movie Mansion</div>
    </div>
  )
}

export default Navbar
