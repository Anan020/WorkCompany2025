import React, { useState } from 'react'
import logo from '../../../assets/e4653ad57a38bddd4e6cf3fcd336ebaa.png'
import { useNavigate, useParams } from 'react-router-dom';
import useStore from '../../../Store/Ecomstore';
import { LuArrowLeft } from "react-icons/lu";

const FormList = () => {
    const { id } = useParams();
    const formData = useStore((state) => state.formData);
    const navigate = useNavigate();

    // console.log("Requested ID:", id); // ดู ID ที่ร้องขอ
    // console.log("Form Data:", formData);
    console.log("formData types:", formData.map(item => typeof item.id));
    // console.log("id type:", typeof id);
    // แปลง id เป็น number
    const numericId = parseInt(id, 10);

    // หา item
    const item = formData.find((data) => String(data.id) === String(id));

    console.log("Numeric ID:", numericId); // 3
    console.log("Found item:", item); // undefinde

    if (!item) {
        return <div>ບໍ່ພົບຂໍ້ມູນ</div>;
    }

    return (
        <div>
            <button className='flex cursor-pointer'
                onClick={() => navigate('/admin/sunyasoa')}
            >
                <LuArrowLeft className='mr-1 text-2xl' />
                ກັບຄືນ
            </button>
            <div className='py-4'>
                {/* แสดงเฉพาะรายการที่ตรงกับ ID */}
                <form className='shadow-xl bg-white w-[70%] mx-auto h-full rounded-md p-9 my-4'>
                    <div className='p-4'>
                        <div>
                            <img src={logo} className='w-22 text-center mx-auto p-2' />
                            <div className='text-center mx-auto my-2 font-medium text-gray-500'>
                                <span>ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</span>
                                <br />
                                <span>ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ</span>
                            </div>
                        </div>
                        <div className='flex justify-end px-4 text-gray-500'>
                            <div className='px-4'>
                                <span>ເລກທີ.../ນວຈ</span>
                                <br />
                                <span>ນະຄອນຫລວງວຽງຈັນ</span>
                            </div>
                        </div>
                        <div className='flex justify-center my-2 text-gray-500'>
                            <div>
                                <p className='p-2'>ສັນຍາເຊົ່າ</p>
                                <p className='p-2 font-medium'>ລະຫວ່າງ</p>
                            </div>
                        </div>
                        <div className='h-full'>
                            <div className='flex justify-between px-6'>
                                <div className='w-1/2'>
                                    <div className='my-4 flex'>
                                        <label>ຂ້າພະເຈົ້າ(ຜູ້ໃຫ້ເຊົາ) : </label>
                                        <p className='text-blue-500'>{item.name}</p>
                                    </div>
                                    <div className='my-4 flex'>
                                        <label>ເມືອງ: </label>
                                        <p className='text-blue-500'>{item.district}</p>
                                    </div>
                                    <div className='my-4 flex'>
                                        <label>ເບີໂທ : </label>
                                        <p className='text-blue-500'>{item.phone}</p>
                                    </div>
                                </div>
                                <div className='w-1/2 flex flex-row justify-center'>
                                    <div>
                                        <div className='my-4 flex'>
                                            <label>ບ້ານທີ່ຢູ່ປະຈຸບັນ : </label>
                                            <p className='text-blue-500'>{item.village}</p>
                                        </div>
                                        <div className='my-4 flex'>
                                            <label>ແຂວງ : </label>
                                            <p className='text-blue-500'>{item.province}</p>
                                        </div>
                                        <div className='my-4'>
                                            <h2>ເອີ້ນວ່າຝ່າຍ ກ</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className='text-center p-4'>ແລະ</h2>

                            <div>
                                <div className='flex px-6 justify-center'>
                                    <div className='w-1/2 text-center'>
                                        <div className='my-4 flex'>
                                            <label>ຜູ້ເຊົາ : </label>
                                            <p className='text-blue-500'>{item.name2}</p>
                                        </div>
                                        <div className='my-4 flex'>
                                            <label>ເມືອງ: </label>
                                            <p className='text-blue-500'>{item.district2}</p>
                                        </div>
                                        <div className='my-4 flex'>
                                            <label>ເບີໂທ : </label>
                                            <p className='text-blue-500'>{item.phone2}</p>
                                        </div>
                                    </div>
                                    <div className='w-1/2 flex flex-row justify-center'>
                                        <div>
                                            <div className='my-4 flex'>
                                                <label>ບ້ານທີ່ຢູ່ປະຈຸບັນ : </label>
                                                <p className='text-blue-500'>{item.village2}</p>
                                            </div>
                                            <div className='my-4 flex'>
                                                <label>ແຂວງ : </label>
                                                <p className='text-blue-500'>{item.province2}</p>
                                            </div>
                                            <div className='my-4'>
                                                <h2>ເອີ້ນວ່າຝ່າຍ ຂ</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex px-6 justify-center'>
                                    <div className='w-1/2 text-center'>
                                        <div className='my-4 flex'>
                                            <label>ວັນທີເຂົ້າພັກ : </label>
                                            <p className='text-blue-500'>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className='w-1/2 flex flex-row justify-center'>
                                        <div className='my-4 flex'>
                                            <div>
                                                <label>ຄ່າເຊົ່າ : </label>
                                                <p className='text-blue-500'>{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className='p-6'>
                                    ທັງສອງຝ່າຍຕົກລົງເຫັນດີເປັນເອກະພາບກັບ ໂດຍມີເງື່ອນໄຂດັ່ງນີ້ :
                                </h2>
                            </div>
                        </div>
                        <div className='px-6'>
                            <div className='my-4'>
                                <label>ເງືອນໄຂການເຊົ່າ</label>
                            </div>
                            <div className='my-4 flex border-b-1 '>
                                <label>1). </label>
                               <h2 className='text-blue-500'>{item.whiltif1}</h2>
                            </div>
                            <div className='my-4 flex border-b-1 '>
                                <label>2). </label>
                                <h2 className='text-blue-500'>{item.whiltif2}</h2>
                            </div>
                            <div className='my-4 flex border-b-1 '>
                                <label>3). </label>
                                <h2 className='text-blue-500'>{item.whiltif3}</h2>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormList