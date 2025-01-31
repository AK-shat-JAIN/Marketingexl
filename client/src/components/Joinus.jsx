import React from 'react'
// import Door from './Door'


const Joinus = () => {


  const phoneNumber = "+918512881278"; // Phone number


  return (
    <div className=' h-[100vh] w-full bg-[#0f0f0f] overflow-hidden'>
        
          
        {/* <div className='w-full h-[100vh] absolute left-0 h-[100vh] z-0  '>
            <Door />
        </div> */}

        <div className='relative z-10 text-white flex flex-col justify-center items-center gap-16 mt-16 '> 
            <h1 className='text-6xl text-[#FC7901] font-extrabold text-center '>JOIN US</h1>

            <p className='text-2xl'>We craft tailored digital marketing strategies to elevate your brand, engage audiences, and drive measurable results.</p>

            <div className='flex gap-4 '>
            <div className=' text-white flex'>
                <a
                 href="mailto:info@marketingexl.com"
                 className="flex flex-col gap-4 items-center justify-center w-45 h-45 bg-[#FC7901] rounded-3xl shadow-lg hover:bg-secondary transition-transform transform hover:scale-110"
                 >
                 <img
                 src= "/Images/ic_round-message.svg"
                 alt="Mail"
        
                    className="h-8 w-8 text-white"
                  />
                <div className='flex flex-col gap-2 items-center justify-center'>
                <p className='font-semibold'>Urgent Message</p>
                <p className='font-medium text-sm'>info@marketingexl.com </p>
                </div>
        
          
        
      </a> </div>
                <div className=' text-black flex'>
                <a
                 href={`tel:${phoneNumber}`}
                  className="flex flex-col gap-4 items-center justify-center w-45 h-45 bg-white rounded-3xl shadow-lg hover:bg-secondary transition-transform transform hover:scale-110"
                 >
                 <img
                 src= "/Images/ic_round-call.svg"
                 alt="Phone"
        
                    className="h-8 w-8 text-black"
                  />
                <div className='flex flex-col gap-2 items-center justify-center'>
                <p className='font-semibold'>Instant Call</p>
                <p className='font-semibold'>+91-73297862768</p>
                </div>
        
          
        
      </a> </div>
                  
            </div>

        </div>

    </div>
  )
}

export default Joinus
