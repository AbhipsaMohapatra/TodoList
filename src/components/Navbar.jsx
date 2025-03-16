import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <nav className='flex justify-between bg-slate-900 text-yellow-100 p-5  max-w-screen'>
        <p className="font-bold text-3xl cursor-pointer">iTasks</p>
        <button onClick={()=>setOpen(!open)} className='md:hidden text-2xl'>
          {open?<AiOutlineClose/>:<AiOutlineMenu/>}
        </button>
        {/* Desktop menu hidden on small screen sizes */}
        <ul className="hidden md:flex gap-9"> 
            <NavLink to="/" className={(e)=>{return e.isActive?"bg-red-700":""}}><li className='cursor-pointer mx-4 hover:font-bold transition-transform text-xl'>Home</li></NavLink>

            
            <NavLink to="/previous" className={(e)=>{return e.isActive?"bg-red-700":""}}><li className='cursor-pointer mx-4 hover:font-bold transition-transform text-xl'>Previous Tasks</li></NavLink>
            <NavLink to="/learn" className={(e)=>{return e.isActive?"bg-red-700":""}}><li className='cursor-pointer mx-4 hover:font-bold transition-transform text-xl'>Learn</li></NavLink>
        </ul>
         {/* Mobile Menu (Hidden by Default, Visible When Open) */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-slate-900 text-center flex flex-col gap-4 p-4 md:hidden">
          <NavLink to="/" className={(e) => (e.isActive ? "bg-red-700 p-2" : "")}>
            <li className="cursor-pointer hover:font-bold text-xl">Home</li>
          </NavLink>
          <NavLink to="/previous" className={(e) => (e.isActive ? "bg-red-700 p-2" : "")}>
            <li className="cursor-pointer hover:font-bold text-xl">Previous Tasks</li>
          </NavLink>
          <NavLink to="/learn" className={(e) => (e.isActive ? "bg-red-700 p-2" : "")}>
            <li className="cursor-pointer hover:font-bold text-xl">Learn</li>
          </NavLink>
        </ul>
      )}
      
    </nav>
  )
}

export default Navbar
