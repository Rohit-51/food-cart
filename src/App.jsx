import React from 'react'
import './App.css'
import Header from './components/layout/Header'
import { Outlet } from 'react-router-dom'

function AppLayout() {
 

  return (
    <div className='p-[30px] px-[60px]'>
      <Header />
      <Outlet />
    </div>
  )
}

export default AppLayout
