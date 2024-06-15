import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import Advertise from './components/Advertise/Advertise'
import Distribute from './components/Distribute/Distribute'
import HallOfFame from './components/HallOfFame/HallOfFame'
import Faq from './components/Faq/Faq'
import ContactUs from './components/ContactUs/ContactUs'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='advertise' element={<Advertise/>}></Route>
      <Route path='distribute' element={<Distribute/>}></Route>
      <Route path='hall-of-fame' element={<HallOfFame/>}></Route>
      <Route path='faq' element={<Faq/>}></Route>
      <Route path='contact-us' element={<ContactUs/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
