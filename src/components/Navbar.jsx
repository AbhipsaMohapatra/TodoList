import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-yellow-100 p-5'>
        <p className="font-bold text-3xl cursor-pointer">iTasks</p>
        <ul className="flex gap-9"> 
            <NavLink to="/" className={(e)=>{return e.isActive?"bg-red-700":""}}><li className='cursor-pointer mx-4 hover:font-bold transition-transform text-xl'>Home</li></NavLink>

            
            <NavLink to="/previous" className={(e)=>{return e.isActive?"bg-red-700":""}}><li className='cursor-pointer mx-4 hover:font-bold transition-transform text-xl'>Previous Tasks</li></NavLink>
            <NavLink to="/learn" className={(e)=>{return e.isActive?"bg-red-700":""}}><li className='cursor-pointer mx-4 hover:font-bold transition-transform text-xl'>Learn</li></NavLink>
        </ul>
      
    </nav>
  )
}

export default Navbar
