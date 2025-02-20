import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { TbDoorEnter } from "react-icons/tb";
import { MdBedroomParent } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FcDebt } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { TbReport } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className='bg-gray-600 h-screen w-76 bg-gradient-to-r to-teal-700 from-cyan-400  text-white'>
      <div className='p-4 items-center justify-center text-2xl font-bold'>
        Water Drink Management
        <hr className="w-68 border-t-3 border-gray-100" />
      </div>

      <nav className='flex-1 px-4 py-4 space-y-2 '>
      <NavLink
        to={'dashboard'}
        end
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 rounded-3xl text-black px-4 py-2 flex items-center'
            : 'flex items-center px-4 py-2  rounded-3xl hover:bg-gray-300 '
        }
      >
        <BiCategoryAlt className="mr-2 text-xl" />
         ໜ້າຫລັກ
      </NavLink>
      <NavLink
        to={'kanjong'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 rounded-3xl text-black px-4 py-2 flex items-center'
            : 'flex items-center px-4 py-2  rounded-3xl hover:bg-gray-300'
        }
      >
        <TbDoorEnter className="mr-2 text-xl" />
        ຈັດການການຈອງ
      </NavLink>
      <NavLink
        to={'sunyasoa'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 rounded-3xl text-black px-4 py-2 flex items-center'
            : 'flex items-center px-4 py-2  rounded-3xl hover:bg-gray-300'
        }
      >
        <TbDoorEnter className="mr-2 text-xl" />
        ຈັດການສັນຍາເຊົ່າ
      </NavLink>
      <NavLink
        to={'hong'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 rounded-3xl text-black px-4 py-2 flex items-center'
            : 'flex items-center px-4 py-2  rounded-3xl hover:bg-gray-300'
        }
      >
        <MdBedroomParent className="mr-2 text-xl" />
        ຈັດການຫ້ອງ
      </NavLink>
      <NavLink
        to={'phusao'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 rounded-3xl text-black px-4 py-2 flex items-center'
            : 'flex items-center px-4 py-2  rounded-3xl hover:bg-gray-300'
        }
      >
        <GrUserManager className="mr-2 text-xl" />
        ຈັດການຜູ້ເຊົ່າ
      </NavLink>
      <NavLink
        to={'sumlangern'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 rounded-3xl text-black px-4 py-2 flex items-center'
            : 'flex items-center px-4 py-2  rounded-3xl hover:bg-gray-300'
        }
      >
        <FaHandHoldingUsd className="mr-2 text-xl" />
        ສຳລະເງີນ
      </NavLink>
      <NavLink
        to={'tidnee'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 rounded-3xl text-black px-4 py-2 flex items-center'
            : 'flex items-center px-4 py-2  rounded-3xl hover:bg-gray-300'
        }
      >
        <FcDebt className="mr-2 text-xl" />
        ຕິດຫນີ້
      </NavLink>
      <NavLink
        to={'checkIn'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 rounded-3xl text-black px-4 py-2 flex items-center'
            : 'flex items-center px-4 py-2  rounded-3xl hover:bg-gray-300'
        }
      >
        <CiLogin className="mr-2 text-xl" />
        checkIn
      </NavLink>
      <NavLink
        to={'checkout'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 rounded-3xl text-black px-4 py-2 flex items-center'
            : 'flex items-center px-4 py-2  rounded-3xl hover:bg-gray-300'
        }
      >
        <CiLogout className="mr-2 text-xl" />
        checkout
      </NavLink>
      <NavLink
        to={'report'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 rounded-3xl text-black px-4 py-2 flex items-center'
            : 'flex items-center px-4 py-2 rounded-3xl hover:bg-gray-300'
        }
      >
        <TbReport className="mr-2 text-xl" />
         ລາຍງານ
      </NavLink>
      <NavLink
        to={'manager'}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 rounded-3xl text-black px-4 py-2 flex items-center'
            : 'flex items-center px-4 py-2 rounded-3xl hover:bg-gray-300'
        }
      >
        <RiUserSettingsLine className="mr-2 text-xl" />
        ຈັດການສິກຜູ້ເຂົ້າໃຊ້
      </NavLink>
  
      
    </nav>
    </div>
  )
}

export default Sidebar
