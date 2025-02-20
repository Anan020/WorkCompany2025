import React from 'react'
import Image from '../../assets/Nuevo-Water-Company-Rebate.jpg'
import DashboardAdmin from '../../componenets/Admin/DashboardAdmin'
function Dashboard() {
  return (
      <div 
      className="h-78 bg-cover bg-center   rounded-sm "
      style={{ backgroundImage: `url(${Image})` }}>
          {/* components */}
          <DashboardAdmin/>
      </div>
  )
}

export default Dashboard
