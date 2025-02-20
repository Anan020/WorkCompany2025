import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// ลงทะเบียน Components ที่จำเป็น
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Barchart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',  // สีของแท่งกราฟ
            borderColor: 'rgba(54, 162, 235, 1)',        // สีขอบ
            borderWidth: 1,
          },
        ],
      };
      

 
  return (
    <div className='h-57 w-full'>
    <Bar data={data} 
    className='h-57 w-full flex justify-between items-center  mx-auto'
    />
    </div>
  )
}

export default Barchart
