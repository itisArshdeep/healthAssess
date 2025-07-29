import React from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

const MainComponent = () => {
  return (
    <div>
        <div className='mt-8'>
            <div className='flex justify-center items-center'>
                <h1 className='text-[22px] font-semibold'>Your Overall Progress</h1>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-4'>
                <Card percentage={47} content={"Repititon Done"}/>
                <Card percentage={4} content={"Pain Score"}/>
                <Card percentage={38} content={"Stars Achived"}/>
                <Card percentage={51} content={"Strength Index"}/>
            </div>
        </div>
       <div className='flex justify-center items-center m-4'>
         <button className='w-[80%] bg-[#00153F] rounded-2xl h-12 text-white '>
            <Link to='/features' >Get Started</Link>
        </button>
       </div>
    </div>
  )
}

export default MainComponent