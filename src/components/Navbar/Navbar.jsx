import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mr-10'>
       <div className='flex items-center'>
        <img className='h-12' src="https://www.healthflex.in/images/Untitled-design-2_1-p-500.png" alt="" />
        <h1 className='text-[22px]'>Hello Rohit!</h1>
       </div>
       <div className='flex gap-3 items-center'>
        <img src="https://img.icons8.com/material-outlined/24/communication.png" alt="" />
        <div className='h-8 flex justify-center items-center bg-emerald-800 rounded-4xl w-8'>
            <h1 className='text-white'>A</h1>
        </div>
        <img src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png" alt="" />
       </div>
    </div>
  )
}

export default Navbar