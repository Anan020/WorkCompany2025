import React from 'react'
import { FaFile } from "react-icons/fa";
// import logo from '../../../assets/file-svgrepo-com.svg'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

const CardForm = () => {
    return (
        <div className='container mx-auto  '>
            <div className='flex justify-between items-center border-b-2 border-gray-400'>
                <div className='py-2 '>
                    <h1 className='text-xl font-bold pb-2'>ສ້າງສັນຍາການເຊົາ</h1>
                    <p className='text-gray-600'>ທ່ານສາມາດສ້າງສັນຍາການເຊົ່າ ລະຫວ່າງຜູ້ເຊົ່າກັບເຈົ້າຂອງສະຖານທີ່<br></br>ໄດ້ງ່າຍດາຍບ່ອນນີ້</p>
                </div>
                <button className='bg-cyan-500 px-2 py-1 text-white rounded-2xl'>
                    + ສ້າງສັນຍາເຊົ່າ
                </button>
            </div>



            <div className='w-57 bg-white h-full p-4 shadow-xl rounded-md my-4'>
                <div className="flex justify-center items-center border-b-1 border-gray-400 ">
                    <div className="w-38 mx-auto text-center">
                        {/* <img src={logo} className="w-36 mx-auto my-4 filter grayscale " alt="Logo" /> */}
                        <FaFile 
                        className="w-36 mx-auto  text-9xl text-blue-200"/>
                        <h2 className='my-4'>ສັນຍາເຊົ່າ</h2>
                        <h2 className='my-1'>ວັນທີສ້າງ 20-2-2025</h2>
                    </div>
                </div>

                <div className='flex gap-2 justify-center items-center pt-2'>
                    <button className='flex justify-between items-center gap-1 bg-cyan-500 py-1 px-3 text-white rounded-full'>
                        <FaPencil/>
                        ແກ້ໄຂ
                    </button>
                    <button className='flex justify-between items-center gap-4 bg-red-400 py-1 px-3 text-white rounded-full'>
                        <FaRegTrashAlt/>
                        ລົບ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardForm
