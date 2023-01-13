import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
function Home() {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Home