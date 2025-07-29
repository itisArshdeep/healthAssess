import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const Card = ({content,percentage}) => {
    


    return (
        <div>
            <div className='flex flex-col py-4 w-[180px] items-center rounded-2xl shadow-gray-300 shadow-2xl'>
               <div className='w-[130px]'>
                 <CircularProgressbar styles={buildStyles({
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgb(117, 240, 162, ${percentage / 100})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })} value={percentage} text={`${percentage}%`} />;
               </div>
                <div className='flex items-center justify-center bg-[#75F0A2]/30 p-3 rounded-lg gap-4'>
                    <img className='h-5' src="https://img.icons8.com/ios-glyphs/30/repeat.png" alt="" />
                    <h3 className='w-[80%]'>{content}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card