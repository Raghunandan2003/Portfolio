import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
export const Navlink = () => {
  return (
    <>
       <div className='Navlink'>

       <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Skills"}>Skill</Link>
     
       </div>
    </>
  )
}
