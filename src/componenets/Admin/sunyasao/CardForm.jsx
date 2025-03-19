import React from 'react'
import { FaFile } from "react-icons/fa";
// import logo from '../../../assets/file-svgrepo-com.svg'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate,Link } from 'react-router-dom';
import useStore from '../../../Store/Ecomstore';

const CardForm = () => {
    const navigate = useNavigate()
    const formData = useStore((state) => state.formData)
    const delForm = useStore((state) => state.delForm)
    const updateForm = useStore((state)=> state.updateForm)




    const hanUpdate=(id)=>{
        //create function update 
        updateForm(id)
    }
    const handDelete = (id)=>{
        delForm(id)
        console.log(id)
    }

    console.log(formData)
    return (
        <div className='container mx-auto  '>
            <div className='flex justify-between items-center border-b-2 border-gray-400'>
                <div className='py-2 '>
                    <h1 className='text-xl font-bold pb-2'>ສ້າງສັນຍາການເຊົາ</h1>
                    <p className='text-gray-600'>ທ່ານສາມາດສ້າງສັນຍາການເຊົ່າ ລະຫວ່າງຜູ້ເຊົ່າກັບເຈົ້າຂອງສະຖານທີ່<br></br>ໄດ້ງ່າຍດາຍບ່ອນນີ້</p>
                </div>
                <button
                    onClick={() => navigate('/admin/sunyasoa/formtext')}
                    className='bg-cyan-500 px-2 py-1 text-white rounded-2xl cursor-pointer'>
                    + ສ້າງສັນຍາເຊົ່າ
                </button>
            </div>


            <div className='flex flex-wrap items-center gap-4'>
                {formData.map((item,index) => (
                    <div key={index} className="w-[228px] bg-white h-full p-4 shadow-xl rounded-md my-4">
                        <div className="flex justify-center items-center border-b border-gray-400 pb-4">
                            <div className="mx-auto text-center">
                                {/* <img src={logo} className="w-36 mx-auto my-4 filter grayscale" alt="Logo" /> */}
                                {/* <Link to="/admin/sunyasoa/formlist/:id">
                                <FaFile className="mx-auto text-9xl text-blue-200" />
                                </Link> */}


                                <button 
                                className='cursor-pointer'
                                onClick={()=>navigate(`/admin/sunyasoa/formlist/${item.id}`)}
                                >
                                <FaFile className="mx-auto text-9xl text-blue-200" />
                                </button>
                                <h2 className="my-4">{item.title}</h2>
                                <h2 className="my-4">{item.id}</h2>
                                <h2 className="my-1">ວັນທີສ້າງ {item.time}</h2>
                            </div>
                        </div>

                        <div className="flex gap-2 justify-center items-center pt-2">
                            <button 
                             onClick={() => hanUpdate(item.id)}
                            className="flex items-center gap-1 bg-cyan-500 py-1 px-3 text-white rounded-full">
                                <FaPencil />
                                ແກ້ໄຂ 
                            </button>
                            <button
                            onClick={()=>handDelete(item.id)}
                             className="flex items-center gap-1 bg-red-400 py-1 px-3 text-white rounded-full">
                                <FaRegTrashAlt />
                                ລົບ
                            </button>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default CardForm
