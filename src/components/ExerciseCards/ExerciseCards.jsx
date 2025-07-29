import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCards = ({image,name}) => {
  return (
    <div>
        <div className='flex justify-between items-center p-4 mx-5 shadow-2xl shadow-gray-200 rounded-[12px]'>
            <div className='flex gap-x-5'>
                <div>
                <img className='h-12' src={image} alt="exerciseImage" />
            </div>
            <div className='flex flex-col'>
                <h3>{name}</h3>
                <p>Reps:5</p>
            </div>
            </div>
            <div>
                <img className='h-4' src="https://img.icons8.com/ios-filled/50/forward.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ExerciseCards