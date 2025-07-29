import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between h-18 px-4 items-center bg-gradient-to-r rounded-b-[30px] shadow-gray-300 shadow-2xl  from-[#70D9BF] to-[#75FB8A]'>
            <Link to="/ ">
                <img className='h-4' src="https://img.icons8.com/ios-filled/50/long-arrow-left.png" alt="" />
            </Link>
            <div>
                <h3 className='font-semibold text-[18px] '>Exercise List</h3>
            </div>
            <div></div>
        </div>
    )
}

export default Header