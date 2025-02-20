import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { LuArrowLeft } from "react-icons/lu";
const Laiylaoiy = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const[hotellData,setHotellData] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const fechData = () => {
            const datas = [
                { id: 1, name: "ໄພລິນ", lname:"ແກ້ວຄູນເມືອງ", category: "ຫ້ອງແຖວ", map: "ທົ່ງສ່າງນາ", price: "1666", reserve: "Anna", number: "02078154670", date: "1/2/2025" },
                { id: 2, name: "ຖາອນ", lname:"ແກ້ວຄູນ", category: "ຫ້ອງແຖວ", map: "ທົ່ງສ່າງນາ", price: "1666", reserve: "Anna", number: "02078154670", date: "1/2/2025" },
                { id: 3, name: "ອົງສາ", lname:"ຄູນເມືອງ", category: "ຫ້ອງແຖວ", map: "ທົ່ງສ່າງນາ", price: "1666", reserve: "Anna", number: "02078154670", date: "1/2/2025" },  
            ];
           const hotellData =  [
                {id:1, name:'ອາພາດເມ້ນສີບຸນເຮືອງ',Address:'pakse',numberphone:78154670, category:'ລາຍປີ',price:100000,sell:1000,title:'Use flex-nowrap to prevent flex items from wrapping, causing inflexible items to overflow the'},
                {id:2, name:'ສີບຸນເຮືອງ',Address:'pakse',numberphone:78154670, category:'ລາຍປີ',price:100000,sell:1000,title:'Use flex-nowrap to prevent flex items from wrapping, causing inflexible items to overflow the'},
                {id:3, name:'ອາພາດເມ້ນ',Address:'pakse',numberphone:78154670, category:'ລາຍປີ',price:100000,sell:1000,title:'Use flex-nowrap to prevent flex items from wrapping, causing inflexible items to overflow the'},
            ]
            const productData = datas.find((p) => p.id === parseInt(id))
            const productData2 = hotellData.find((p) => p.id === parseInt(id))
            setData(productData)
            setHotellData(productData2)
        }
        fechData()
    }, [id])
    console.log(data)
    // const dataArr = data ? [data] : []
    if (!data) return <div>Loading...</div>;
    return (
        <div className='p-4 my-4'>
            <button
                className='flex justify-center items-center gap-2'
                onClick={() => navigate('/admin/kanjong')}
            >
                <LuArrowLeft />
                ລາຍລະອຽດ
            </button>
            
         

            <div className='flex justify-between bg-white w-[70%] shadow-xl rounded-md my-4 mx-auto'>
                {/* card */}
                <div className='py-4 px-6 w-1/2'>
                    <div className='border-r-1 border-gray-300 flex  h-full'>
                        <div className='ml-10'>
                            <h3 className='py-2 '>ຂໍ້ມູນຜູ້ຈອງ</h3>
                            <p className='py-2 '>ຊື່: {data.name}</p>
                            <p className='py-2 '>ນາມສະກຸນ : {data.lname} </p>
                            <p className='py-2 '>ເບີໂທ : {data.number} </p>
                            <p className='py-2 '>ວັນທີຈອງ :  {data.date}</p>
                        </div>
                    </div>
                </div>
          
                <div className='w-1/2 p-4'>
                    <div className='flex justify-between  w-full'>
                        <div>
                            <p>ຂໍ້ມູນຫ້ອງ</p>
                        </div>
                        <div className='flex gap-2'>
                            <button
                            className='bg-cyan-500 text-white px-4 py-1 rounded-full'
                            >ອະນຸມັດ</button>
                            <button 
                            className='bg-red-400 text-white  px-4 py-1 rounded-full'
                            >ປະຕິເສດ</button>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-4 py-4  '>
                        <img
                            className='bg-gray-100 w-40 h-24 rounded-md object-cover'
                            src="https://via.placeholder.com/150"
                            alt="Product 1"
                        />
                        <img
                            className='bg-gray-100 w-40 h-24 rounded-md object-cover'
                            src="https://via.placeholder.com/150"
                            alt="Product 2"
                        />
                        <img
                            className='bg-gray-100 w-40 h-24 rounded-md object-cover'
                            src="https://via.placeholder.com/150"
                            alt="Product 3"
                        />
                        <img
                            className='bg-gray-100 w-40 h-24 rounded-md object-cover'
                            src="https://via.placeholder.com/150"
                            alt="Product 4"
                        />
                    </div>
                    <div className='py-2 '>
                        <h3 className='py-2 '>ຊື່ : {hotellData.name}</h3>
                        <h3 className='py-2 '>ທີ່ຢູ່ :{hotellData.Address}</h3>
                        <h3 className='py-2 '>ເບີໂທ : {hotellData.numberphone}</h3>
                        <h3 className='py-2 '>ປະເພດຄ່າເຊົ່າ : {hotellData.category}</h3>
                        <h3 className='py-2 '>ລາຄາ : {hotellData.price}</h3>
                        <h3 className='py-2 '>ຄ່ານາຍຫນ້າ : {hotellData.sell}</h3>
                        <p className='py-2 '>ລາຍລະອຽດ : {hotellData.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Laiylaoiy
