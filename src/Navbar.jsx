import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import "./App.css"
export const Navbar = () => {
  return (
    <>
    
       <div className='Navbar'>
         <Routes>
           <Route  path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}></Route>  
           <Route path='/skills' element={<Skills/>}/>
         </Routes>
       </div>
    </>
  )
}
