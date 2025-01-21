import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
import Footer1 from '../Footer1/Footer1'

export default function Layout() {
  return (
    <div>
      <NavBar/>
      <Outlet></Outlet>
      <Footer/>
      <Footer1/> 
    </div>
  )
}
