import React, { useState } from 'react'
import { FaAddressBook } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
// Donus Chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import moment from 'moment';
import Chart from "react-apexcharts";
ChartJS.register(ArcElement, Tooltip, Legend);



const Dashboard = () => {
  const today = moment().format('L');
  const [product, setProduct] = useState([
    { id: '1', name: 'ນ້ຳດື່ມ', startDate: today, endDate: "15/2/2025", Owner: "chin", price: 15000 },
    { id: '2', name: 'ເບຍ', startDate: today, endDate: "15/2/2025", Owner: "chin", price: 20000 },
    { id: '3', name: 'ນ້ຳກ້ອນ', startDate: today, endDate: "15/2/2025", Owner: "chin", price: 15000 },
    { id: '4', name: 'ແປັບນີ້', startDate: today, endDate: "15/2/2025", Owner: "chin", price: 25000 },
  ])

  const data1 = {
    "ຜູ້ແຈ້ງເຂົ້າຫ້ອງທັງຫມົດ(10)": 10,
    "ຜູ້ແຈ້ງອອກຫ້ອງທັງຫມົດ(5)": 5,
  }
  const labelArr = Object.keys(data1)
  const dataArr = Object.values(data1)
  // console.log(dataArr)
  const products = [
    { id: 1, name: "Laptop", price: 1500, icon: <MdManageAccounts /> },
    { id: 2, name: "Laptop", price: 1500, icon: <MdBedroomParent /> },
    { id: 3, name: "Laptop", price: 1500, icon: <FaAddressBook /> },
    { id: 4, name: "Laptop", price: 1500, icon: <FaAddressBook /> },
  ];


  const data = {
    labels: labelArr,
    datasets: [
      {
        label: '# of Votes',
        data: dataArr,
        backgroundColor: [
          'rgba(255, 0, 0, 0.5)',  // สีแดงใส
          'rgba(0, 128, 0, 0.5)',  // สีเขียวใส
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom', // ย้าย legend ลงด้านล่าง
        labels: {
          font: {
            size: 14, // ปรับขนาดตัวอักษร
          },
          boxWidth: 20, // ขนาดสี่เหลี่ยมสีข้าง ๆ label
        },
      },
    },
    maintainAspectRatio: false, // ป้องกันการบีบอัดของกราฟ
  };


  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#4863A0"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 1,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };



  return (
    <div className='h-full'>
      <div className='px-2 py-2 text-white '>
        <h1 className="text-white text-3xl font-bold">ສະບາຍດີ, Sunny</h1>
        <p>ຍີນດີຕ້ອນຮັບເຂົ້າສູ່ໂຮງງານນ້ຳດື່ມ sunny</p>
      </div>


      {/* main div */}

      <div className='flex'>
        {products?.map((item) => (
          <div className='flex w-full p-2 mt-16' key={item.id}>
            <div className='bg-gray-100 w-64 h-32 rounded-md shadow-2xl flex p-4'>
              {/* left */}
              <div className='p-4 text-2xl  '>
                {item.icon}  {/* ✅ แสดง icon */}
              </div>

              {/* right */}
              <div className='px-6 p-4 '>
                <p>ຜູ້ເຊົ່າ</p>
                <h1 className='font-bold pt-6'>ທັງຫມົດ 100 (ຄົນ)</h1>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* Chart */}
      {/* card Chart */}
      <div className='flex gap-4'>
        <div className='h-87 w-75 mt-12  rounded-sm justify-center items-center shadow-sm flex '>
          {/* letf */}
          <div className=''>
            <div className='flex mb-2 justify-between py-1 px-4'>
              <div>
                <p className='text-gray-600'>
                  ການແຈ້ງເຂົ້າ/ແຈ້ງອອກ
                </p>
              </div>
              <div>
                <p className='text-gray-600'>
                  ເລຶອກວັນທີ
                </p>
              </div>
            </div>
            {/* Time */}
            <div className=' mx-4 flex text-1'>
              <div>
                <p className=' font-serif text-blue-400'>ຕັ້ງແຕ່{today}</p>
              </div>
              <div>
                <p className=' font-serif text-blue-400'>ຫາ {today}</p>
              </div>
            </div>
            <div className='w-60 h-60 py-4 px-2 mx-auto '>
              <Doughnut data={data} options={options} />
            </div>

          </div>
        </div>


        {/* card rigth */}

        <div className=' h-87 mt-12 w-[75%] rounded-sm shadow-sm'>
          <div className="flex items-center justify-between  w-full h-16 px-8 ">
            <p className="text-gray-500 font-bold">ລາຍຈ່າຍ</p>
            <p className="text-gray-500">ປະຈຳເດືອນ 10, ປີ 2025</p>
            <p className="text-gray-500 cursor-pointer hover:underline">ເລືອກເດືອນ</p>
          </div>
          <div className=''>
            <Chart options={chartConfig.options} series={chartConfig.series} type="bar" height={200} />
          </div>
          <div className=' flex items-center justify-center '>
            <p>
              ລາຍຮັບລວມ : <span className='text-blue-400'>10.000.000 ກີບ</span>
            </p>
          </div>
        </div>
      </div>
      <div className='py-2 px-2 text-2xl my-2'>
        <h1>ຕາຕະລາງການຂາຍລາຍວັນ</h1>
      </div>
      {/* ----------- */}
      <div class="relative  flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">

        <table class="w-full text-left table-auto min-w-max text-slate-800">
          <thead>
            <tr class="text-slate-500 border-b border-slate-300 bg-slate-50">
              <th class="p-4">
                <p class="text-sm leading-none font-normal">
                  No
                </p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">
                  Name
                </p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">
                  Start Date
                </p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">
                  End Date
                </p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">
                  Owner
                </p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">
                  price
                </p>
              </th>
              <th class="p-4">
                <p></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              product?.map((item, index) => (
                <tr class="hover:bg-slate-50" key={index}>
                  <td class="p-4" >
                    <p class="text-sm font-bold">
                      {item.id}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm font-bold">
                      {item.name}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                      {item.startDate}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                      30/06/2024
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                      {item.Owner}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="text-sm">
                      {item.price}
                    </p>
                  </td>
                  <td class="p-4">
                    <a href="#" class="text-sm font-semibold ">
                      Edit
                    </a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <br />

    </div>
  )
}

export default Dashboard
