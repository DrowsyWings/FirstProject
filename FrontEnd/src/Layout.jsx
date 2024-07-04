import React from 'react'
import Footer from './components/Footer/Footer'
import HeaderNav from './components/Header/HeaderNav'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='relative'>
      <HeaderNav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
