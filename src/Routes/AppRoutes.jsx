import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard'
import Adminlayout from '../Layouts/Adminlayout'
import Kanjong from '../pages/admin/Kanjong'
import Sunyasoa from '../pages/admin/Sunyasoa'
import Phusao from '../pages/admin/Phusao'
import Sumlangern from '../pages/admin/Hong'
import Tidnee from '../pages/admin/Tidnee'
import CheckIn from '../pages/admin/CheckIn'
import CheckOut from '../pages/admin/CheckOut'
import Report from '../pages/admin/Report'
import Hong from '../pages/admin/Hong'
import Manager from '../pages/admin/Manager'
// import Error from '../pages/Error'
import Pavanhjong from '../componenets/Admin/Kanjong/Pavanhjong'
import LaiyKanjong from '../componenets/Admin/Kanjong/LaiyKanjong'
// import { elements } from 'chart.js'
import Laiylaoiy from '../componenets/Admin/Kanjong/Laiylaoiy/Laiylaoiy'
import FormText from '../componenets/Admin/sunyasao/FormText'
import CardForm from '../componenets/Admin/sunyasao/CardForm'
import FormList from '../componenets/Admin/sunyasao/FormList'





function AppRoutes() {
    const router = createBrowserRouter([
      {
        path: '/admin',
        element:<Adminlayout/>,
        children:[
          {index:true, element:<Dashboard/>},
          {path: 'dashboard',element:<Dashboard/>},
          {path: 'kanjong',element:<Kanjong/>,
            children:[
              {index:true ,element:<LaiyKanjong/>},
              {path:'laiykanjong' ,element:<LaiyKanjong/>},
              {path: 'pavanhjong' ,element:<Pavanhjong/>},
              {path: 'laiylaoiy/:id' ,element:<Laiylaoiy/>}
            ]
          },
          {path: 'sunyasoa',element:<Sunyasoa/>,
            children:[
              {index:true,element:<CardForm/>},
              {path:'cardform',element:<CardForm/>},
              {path:'formtext',element:<FormText/>},
              {path:'formlist/:id',element:<FormList/>}
            ]
          },
          {path: 'phusao',element:<Phusao/>},
          {path: 'sumlangern',element:<Sumlangern/>},
          {path: 'tidnee',element:<Tidnee/>},
          {path: 'checkIn',element:<CheckIn/>},
          {path: 'checkout',element:<CheckOut/>},
          {path: 'report',element:<Report/>},
          {path: 'hong',element:<Hong/>},
          {path: 'manager',element:<Manager/>},
        ]
      },
      {path: '*',element:<Error/>},
    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default AppRoutes
