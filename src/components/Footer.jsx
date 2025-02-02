import React from 'react'
import { BsTelegram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full h-30 p-4  bg-slate-900 text-xl flex flex-col justify-center text-center text-white fixed bottom-0 '>
        <p className='text-yellow-200'>Thank You For Visiting.</p>
        <p className='my-3 text-yellow-200'>Follow me on </p>
        <div className='flex justify-center gap-3'>
        <a className='cursor-pointer ' href="https://telegram.org/dl" target="_blank"><p ><BsTelegram /></p></a>

        
        <a  className='cursor-pointer' href="https://www.linkedin.com/in/abhipsa-mohapatra-476b97341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target='_blank'><p><FaLinkedin /></p></a>
        </div>

      
    </div>
  )
}

export default Footer
