import React from 'react'
import Header from '../../components/Header/Header'
import ExerciseCards from '../../components/ExerciseCards/ExerciseCards'
import { Link } from 'react-router-dom'

const Exercise = () => {
    return (
        <div className=''>
             <div className='flex justify-between h-18 px-4 items-center bg-gradient-to-r rounded-b-[30px] shadow-gray-300 shadow-2xl  from-[#70D9BF] to-[#75FB8A]'>
                        <Link to="/ ">
                            <img className='h-4' src="https://img.icons8.com/ios-filled/50/long-arrow-left.png" alt="" />
                        </Link>
                        <div>
                            <h3 className='font-semibold text-[18px] '>Exercise List</h3>
                        </div>
                        <div></div>
                    </div>
            <div className='mt-6 flex gap-3 flex-col'>
                <ExerciseCards image={"https://thumbs.dreamstime.com/z/woman-doing-quadriceps-stretch-cool-down-exercise-woman-doing-quadriceps-stretch-cool-down-exercise-balance-pose-flexibility-157558626.jpg?ct=jpeg"} name={"Hip Flexion"} />
                <ExerciseCards image={"https://thumbs.dreamstime.com/z/woman-doing-quadriceps-stretch-cool-down-exercise-woman-doing-quadriceps-stretch-cool-down-exercise-balance-pose-flexibility-157558626.jpg?ct=jpeg"} name={"Hip Flexion"} />
                <ExerciseCards image={"https://thumbs.dreamstime.com/z/woman-doing-quadriceps-stretch-cool-down-exercise-woman-doing-quadriceps-stretch-cool-down-exercise-balance-pose-flexibility-157558626.jpg?ct=jpeg"} name={"Hip Flexion"} />
            </div>

            <div className='flex justify-center items-center bottom-0 absolute w-screen p-4'>
                <button className='w-[80%] bg-[#00153F] rounded-2xl h-12 text-white '>
           <Link to="/features"> Get Started</Link>
        </button>
            </div>
        </div>
    )
}

export default Exercise