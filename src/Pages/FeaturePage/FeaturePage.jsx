import React from 'react'
import AddTimer from '../../components/AddTimer/AddTimer'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'

const FeaturePage = () => {
    return (
        <div>
            <Header />
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