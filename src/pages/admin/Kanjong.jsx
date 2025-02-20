import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const HoneAdmin = () => {
  // const [isOpen,setIsOpen] = useStaet(false)
  return (
    <div>
      <nav  className='flex '>
        <NavLink
          to={'laiykanjong'}
          end
          className={({ isActive }) => isActive
            ? 'font-bold  text-cyan-500 inline-block border-b-2 border-cyan-600 px-2 py-2'
            : 'font-bold  text-gray-600 inline-block border-b-2 px-2 py-2'
          }
        >
          ລາຍການຈອງ
        </NavLink>
        <NavLink
          to={'pavanhjong'}
          className={({ isActive }) => isActive
            ? 'font-bold  text-cyan-500 inline-block border-b-2 border-cyan-600 px-2 py-2'
            : 'font-bold  text-gray-600 inline-block border-b-2 px-2 py-2'
          }
        >
          ປະຫວັດການຈອງ
        </NavLink>
    
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default HoneAdmin
