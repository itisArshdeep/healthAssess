import React from 'react'

const Calender = () => {


    const data = [{
        month:"Fri",
        date: 21,
    },{
        month:"Fri",
        date: 21,
    },{
        month:"Fri",
        date: 21,
    },{
        month:"Fri",
        date: 21,
    },{
        month:"Fri",
        date: 21,
    },{
        month:"Fri",
        date: 21,
    },{
        month:"Fri",
        date: 21,
    },]

  return (
   <div className='flex justify-center items-center mt-5'>
     <div className='flex flex-col py-4 rounded-2xl bg-gradient-to-r justify-center items-center gap-4 from-[#70D9BF] to-[#75FB8A] '>
        <div className='text-[22px]  font-semibold'>JULY 25</div>
        <div className='flex gap-x-2 px-4  justify-center items-center'>
            {data.map((e,key)=>{
              return  <div className='bg-white/28 h-20 w-10 flex flex-col justify-center items-center rounded-lg'>
                <h3>{e.month}</h3>
                <h3>{e.date}</h3>
                <button className='bg-white/30 px-2 rounded-lg'>X</button>
            </div>
            })}
        </div>
        <div>Great! You've exercised 3 days!</div>
    </div>
   </div>
  )
}

export default Calender