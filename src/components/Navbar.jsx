import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-yellow-100 p-5'>
        <p className="font-bold text-3xl cursor-pointer">iTasks</p>
        <ul className="flex gap-9">
            <li className='cursor-pointer mx-4 hover:font-bold transition-transform text-xl'>Home</li>
            <li className='cursor-pointer mx-4 hover:font-bold transition-transform text-xl'>Your Tasks</li>
        </ul>
      
    </nav>
  )
}

export default Navbar
