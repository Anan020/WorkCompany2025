import React from 'react'
import { LuArrowLeft } from "react-icons/lu";
import logo from '../../../assets/e4653ad57a38bddd4e6cf3fcd336ebaa.png'
import { useNavigate } from 'react-router-dom';
const FormText = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button className='flex cursor-pointer '
      onClick={()=>navigate('/admin/sunyasoa')}
      >
        <LuArrowLeft className='mr-1 text-2xl' />
        ກັບຄືນ
      </button>



      <form className='shadow-xl bg-white w-[70%] mx-auto h-full rounded-md p-9'>
        <div className='p-2'>
          <div>
            <img src={logo}
              className='w-22 text-center mx-auto p-2 '
            />
            <div className='text-center mx-auto my-2 font-medium text-gray-500'>
              <span>ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</span>
              <br />
              <span>ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ</span>
            </div>
          </div>
          <div className='flex justify-end px-4 text-gray-500 '>
            <div className='px-4'>
              <span>ເລກທີ.../ນວຈ</span>
              <br />
              <span>ນະຄອນຫລວງວຽງຈັນ</span>
            </div>
          </div>
          <div className='flex justify-center my-2 text-gray-500'>
            <div className=''>
              <p className='p-2'>ສັນຍາເຊົ່າ</p>
              <p className='p-2 font-medium'>ລະຫວ່າງ</p>
            </div>
          </div>
          <div className='h-full'>
            <div className='flex px-6 justify-center'>
              <div className='w-1/2  text-center '>
                <div className='my-4'>
                  <label>ຂ້າພະເຈົ້າ(ຜູ້ໃຫ້ເຊົາ) : </label>
                  <input placeholder='ປ້ອນຊື່ ແລະ ນາມສະກຸນຜູ້ໃຫ້ເຊົ່າ'
                    className='border-b-2 border-gray-200 focus:outline-none'
                  />
                </div>
                <div className='my-4'>
                  <label>ເມືອງ: </label>
                  <input placeholder='ປ້ອນເມືອງ'
                    className='border-b-2 border-gray-200 focus:outline-none'
                  />
                </div>
                <div className='my-4'>
                  <label>ເບີໂທ : </label>
                  <input placeholder='ປ້ອນເບີໂທ'
                    className='border-b-2 border-gray-200 focus:outline-none'
                  />
                </div>

              </div>
              <div className='w-1/2  text-center '>
                <div className='my-4'>
                  <label>ບ້ານທີ່ຢູ່ປະຈຸບັນ : </label>
                  <input placeholder='ປ້ອນບ້ານທີ່ຢູ່ປະຈຸບັນ'
                    className='border-b-2 border-gray-200 focus:outline-none'
                  />
                </div>
                <div className='my-4'>
                  <label>ແຂວງ : </label>
                  <input placeholder='ປ້ອນແຂວງ'
                    className='border-b-2 border-gray-200 focus:outline-none'
                  />
                </div>
                <div className='my-4'>
                  <h2>ເອີ້ນວ່າຝ່າຍ ກ</h2>
                </div>

              </div>
            </div>
            <h2 className='text-center p-4'>ແລະ</h2>

            <div>
              <div className='flex px-6 justify-center'>
                <div className='w-1/2  text-center '>
                  <div className='my-4'>
                    <label>ຜູ້ເຊົາ : </label>
                    <input placeholder='ປ້ອນຊື່ ແລະ ນາມສະກຸນຜູ້ໃຫ້ເຊົ່າ'
                      className='border-b-2 border-gray-200 focus:outline-none'
                    />
                  </div>
                  <div className='my-4'>
                    <label>ເມືອງ: </label>
                    <input placeholder='ປ້ອນເມືອງ'
                      className='border-b-2 border-gray-200 focus:outline-none'
                    />
                  </div>
                  <div className='my-4'>
                    <label>ເບີໂທ : </label>
                    <input placeholder='ປ້ອນເບີໂທ'
                      className='border-b-2 border-gray-200 focus:outline-none'
                    />
                  </div>
                  <div className='my-4'>
                    <label>ເບີໂທ : </label>
                    <input placeholder='ປ້ອນເບີໂທ'
                      className='border-b-2 border-gray-200 focus:outline-none'
                    />
                  </div>

                </div>
                <div className='w-1/2  text-center '>
                  <div className='my-4'>
                    <label>ບ້ານທີ່ຢູ່ປະຈຸບັນ : </label>
                    <input placeholder='ປ້ອນບ້ານທີ່ຢູ່ປະຈຸບັນ'
                      className='border-b-2 border-gray-200 focus:outline-none'
                    />
                  </div>
                  <div className='my-4'>
                    <label>ແຂວງ : </label>
                    <input placeholder='ປ້ອນແຂວງ'
                      className='border-b-2 border-gray-200 focus:outline-none'
                    />
                  </div>
                  <div className='my-4'>
                    <h2>ເອີ້ນວ່າຝ່າຍ ຂ</h2>
                  </div>

                </div>
              </div>
            </div>
            <div>
              <div className='flex px-6 justify-center'>
                <div className='w-1/2  text-center '>
                  <div className='my-4'>
                    <label>ວັນທີເຂົ້າພັກ : </label>
                    <input placeholder='ປ້ອນວັນທີເຂົ້າພັກ'
                      className='border-b-2 border-gray-200 focus:outline-none'
                    />

                  </div>
                </div>
                <div className='w-1/2  text-center '>
                  <div className='my-4'>
                    <label>ຄ່າເຊົ່າ : </label>
                    <input placeholder='ປ້ອນຄ່າເຊົ່າ'
                      className='border-b-2 border-gray-200 focus:outline-none'
                    />
                  </div>
                </div>
              </div>
              <h2 className=' p-6'> ທັງສອງຝ່າຍຕົກລົງເຫັນດີເປັນເອກະພາບກັບ ໂດຍມີເງື່ອນໄຂດັ່ງນີ້ :</h2>
            </div>
          </div>
          <div className='px-6'>
            <div className='my-4'>
              <label>ເງືອນໄຂການເຊົ່າ  </label>
            </div>
            <div className='my-4'>
              <label>1). </label>
              <input placeholder='ປ້ອນວັນທີເຂົ້າພັກ'
                className='border-b-2 px-2 border-gray-200 focus:outline-none w-[90%]'
              />
            </div>
            <div className='my-4'>
              <label>2).</label>
              <input placeholder='ປ້ອນວັນທີເຂົ້າພັກ'
                className='border-b-2 px-2 border-gray-200 focus:outline-none w-[90%]'
              />
            </div>
            <div className='my-4'>
              <label>3).</label>
              <input placeholder='ປ້ອນວັນທີເຂົ້າພັກ'
                className='border-b-2 px-2 border-gray-200 focus:outline-none w-[90%]'
              />
            </div>
            <button
            className='border-2 border-gray-400 bg-gray-300 py-1 px-3 rounded-md'
            >
              + add
            </button>
          </div>
          <div className='mx-6  text-center'>
            <button className='border-1 border-gray-400 py-1 px-4 rounded-md'>ຍົກເລີກ</button>
            <button
            className='bg-cyan-500 py-1 px-4 rounded-sm m-2 text-white '
            >ບັນທຶກການສ້າງສັນຍາ
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormText
