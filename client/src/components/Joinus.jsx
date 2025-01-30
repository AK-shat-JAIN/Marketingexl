import React from 'react'
import Door from './Door'


const Joinus = () => {
  return (
    <div className=' h-[100vh] w-full bg-[#0f0f0f] overflow-hidden'>
        
          
        <div className='w-full h-[100vh] absolute left-0 h-[100vh] z-0  '>
            <Door />
        </div>

        <div className='relative z-10 text-white flex flex-col justify-center items-center gap-16'> 
            <h1>JOIN US</h1>

            <p>We craft tailored digital marketing strategies to elevate your brand, engage audiences, and drive measurable results.</p>

            <div className='flex gap-4'>
                <div>Urgent Message</div>
                <div>Urgent Call</div>
            </div>

        </div>

    </div>
  )
}

export default Joinus
