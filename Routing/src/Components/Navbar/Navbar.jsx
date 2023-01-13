import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='Navbar'>
            <h3>Navbar</h3>
            <div  className='Navbarright'>
                <Link to={'Home'}>Home</Link>
                <Link to={'About'}>About</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar