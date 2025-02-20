import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../componenets/Admin/Sidebar'
import Header from '../componenets/Admin/Header'
function layoutAdmin() {
  return (
    <div className='flex h-screen '>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Header />
        <main className='flex-1 p-6 bg-gray-100 overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default layoutAdmin
