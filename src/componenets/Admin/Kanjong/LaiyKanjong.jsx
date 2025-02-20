import React, { useState } from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const LaiyKanjong = () => {
  const [text, setText] = useState("")
  const [data, setData] = useState([
    { id: 1, name: "ໄພລິນ", category: "ຫ້ອງແຖວ", map: "ທົ່ງສ່າງນາ", price: "1666", reserve: "Anna", number: "02078154670", date: "1/2/2025" },
    { id: 2, name: "ໄພລິນ", category: "ຫ້ອງແຖວ", map: "ທົ່ງສ່າງນາ", price: "1666", reserve: "Anna", number: "02078154670", date: "1/2/2025" },
    { id: 3, name: "ໄພລິນ", category: "ຫ້ອງແຖວ", map: "ທົ່ງສ່າງນາ", price: "1666", reserve: "Anna", number: "02078154670", date: "1/2/2025" },
  ])
const navigate = useNavigate()

  const handleAproval = (id, status) => {
    setData((prevData) =>
      prevData.map((item) => item.id === id
        ? { ...item, status }
        : item
      ))
  }

  const handleSearch = (e) => {
    setText(e.target.value)
  }

  const saveName = (e) => {
    e.preventDefault()
    console.log(text)
  }


  console.log(text)

  return (
    <div>
      <form
        onSubmit={saveName}
        className=' flex flex-row gap-5 my-4'>
        <div>
          <input
            onChange={handleSearch}
            type="text" placeholder="ຄົ້ນຫາເລກຫ້ອງ, ລາຄາ, ສະຖານະ "
            className="border  focus:outline-none w-86 border-cyan-500 py-2 px-6 rounded-full" />
        </div>
        <button
          type='submit'
          className='border border-cyan-500 rounded-full px-6 bg-cyan-500 text-white'>
          ຄົ້ນຫາ
        </button>
      </form>



      <div >
        <div class="relative  flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
          <div className='p-1' >
            <table class="w-full text-left table-auto min-w-max text-slate-800 ">
              <thead className='rounded-2xl'>
                <tr class="text-slate-600 border-b border-slate-300  bg-gray-50 ">
                  <th class="p-4">
                    <p class="text-sm leading-none font-normal">
                      ຮູບ
                    </p>
                  </th>
                  <th class="p-4">
                    <p class="text-sm leading-none font-normal">
                      ຊື່ທີ່ພັກ
                    </p>
                  </th>
                  <th class="p-4">
                    <p class="text-sm leading-none font-normal">
                      ປະເພດກຫ້ອງພັກ
                    </p>
                  </th>
                  <th class="p-4">
                    <p class="text-sm leading-none font-normal">
                      ສະຖານທີ່
                    </p>
                  </th>
                  <th class="p-4">
                    <p class="text-sm leading-none font-normal">
                      ລາຄາ
                    </p>
                  </th>
                  <th class="p-4">
                    <p class="text-sm leading-none font-normal">
                      ຜູ້ຈອງ
                    </p>
                  </th>
                  <th class="p-4">
                    <p class="text-sm leading-none font-normal">
                      ເບີໂທຜູ້ຈອງ
                    </p>
                  </th>
                  <th class="p-4 border-r border-slate-300 ">
                    <p class="text-sm leading-none font-normal">
                      ວັນທີຈອງ
                    </p>
                  </th>
                  <th class="p-4 w-46 flex justify-center">
                    <p class="text-sm leading-none font-normal">
                      ຈັດການ
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item) => (
                    <tr class="hover:bg-slate-50  border-b border-slate-300  bg-gray-50" 
                    key={item.id} 
                    >
                      <td class="p-4" >
                        <img
                          className='bg-gray-500 w-32 h-20 rounded-sm'
                          onClick={() => navigate(`/admin/kanjong/laiylaoiy/${item.id}`)}
                        />
                      </td>
                      <td class="p-4">
                        <p class="text-sm font-bold">
                          {item.name}
                        </p>
                      </td>
                      <td class="p-4">
                        <p class="text-sm">
                          {item.category}
                        </p>
                      </td>
                      <td class="p-4">
                        <p class="text-sm">
                          {item.map}
                        </p>
                      </td>
                      <td class="p-4">
                        <p class="text-sm">
                          {item.price}
                        </p>
                      </td>
                      <td class="p-4">
                        <p class="text-sm">
                          {item.reserve}
                        </p>
                      </td>
                      <td class="p-4">
                        <p class="text-sm">
                          {item.number}
                        </p>
                      </td>
                      <td class="p-4 border-r border-slate-300">
                        <p class="text-sm">
                          {item.date}
                        </p>
                      </td>
                      <td class="px-2 py-5  flex justify-center items-center gap-1  my-4  ">
                        <div className='bg-gray-200 text-2xl p-2  flex justify-center items-center rounded-full'>
                          {
                            item.status === "approved"
                              ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />
                          }

                        </div>
                        <div className='flex gap-2 px-2'>
                          <button
                            onClick={() => handleAproval(item.id, "approved")}
                            className={`${item.status === "approved"
                              ? "bg-green-500 text-white py-1 px-4 rounded-2xl"
                              : " bg-cyan-500 text-white py-1 px-4 rounded-2xl"
                              } `}>
                            {item.status === "approved" ? "ສຳເລັດ" : "ອະນຸມັດ"}

                          </button>
                          <button
                            onClick={() => handleAproval(item.id, "rejected")}
                            className={`${item.status === "rejected"}  bg-red-300 text-white py-1 px-4 rounded-2xl`}>ປະຕິເສດ</button>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LaiyKanjong
