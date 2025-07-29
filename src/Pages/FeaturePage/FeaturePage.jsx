import React from 'react'
import AddTimer from '../../components/AddTimer/AddTimer'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'

const FeaturePage = () => {
    return (
        <div>
            <div className='flex justify-between h-18 px-4 items-center bg-gradient-to-r rounded-b-[30px] shadow-gray-300 shadow-2xl  from-[#70D9BF] to-[#75FB8A]'>
                        <Link to="/ ">
                            <img className='h-4' src="https://img.icons8.com/ios-filled/50/long-arrow-left.png" alt="" />
                        </Link>
                        <div>
                            <h3 className='font-semibold text-[18px] '>Exercise List</h3>
                        </div>
                        <div></div>
                    </div>
            <div>
                <Link to="addtimer"><div className='flex justify-between items-center p-4 mx-5 shadow-2xl mt-12 shadow-gray-200 rounded-[12px]'>
                    <div className='flex gap-x-5'>

                        <div className='flex flex-col'>
                            <h3>Add Timer</h3>

                        </div>
                    </div>
                    <div>
                        <img className='h-4' src="https://img.icons8.com/ios-filled/50/forward.png" alt="" />
                    </div>
                </div></Link>
                <Link to="timerlist"><div className='flex justify-between items-center p-4 mx-5 shadow-2xl mt-12 shadow-gray-200 rounded-[12px]'>
                    <div className='flex gap-x-5'>

                        <div className='flex flex-col'>
                            <h3>Timer List</h3>

                        </div>
                    </div>
                    <div>
                        <img className='h-4' src="https://img.icons8.com/ios-filled/50/forward.png" alt="" />
                    </div>
                </div></Link>
            </div>
        </div>
    )
}

export default FeaturePage