import React from 'react'

const Member = () => {
  return (
    <div className=' w-full py-10 lg:py-20  text-center items-center justify-center  '>
        <div className='w-full py-10 px-5 lg:px-4 bg-gray-800 items-center justify-center'>
            
            <h1 className='font-bold text-5xl  text-gray-200 pb-4 '>Our Team</h1>
            <div className='flex items-center justify-center text-center text-sm font-medium mb-4'>
            <span className=' hover:text-white text-white cursor-pointer transition duration-200'>Home</span>
            <span className='mx-2 text-gray-500'>/</span>
            <span className='text-yellow-300 font-semibold'>Members</span>
            </div>
                     
        </div>

        <div className='py-10 px-5 lg:px-4 flex flex-col items-center justify-center text-center'>
          <h1 className='font-bold text-4xl   '>
            Home Branch Members
          </h1>
          <div className='w-12 md:w-20 h-1 bg-yellow-400 rounded-full mt-3 text-center justify-center' ></div>
          <p className='text-[#0b0b0c]  font-medium leading-relaxed tracking-wide py-10 px-5 lg:px-60 space-y-6 '>
            We are a group of individuals based in IIT Kharagpur who have seen the success of the strategies and plans of GYWS, IIT Kharagpur, one of India's largest govt. reg. student run NGO which aims at the socio economic development of the underprivileged near the IIT Kharagpur campus. We were inspired to reciprocate the same to various other parts of the nation so as to create a greater impact by spreading knowledge and experience gained through GYWS which has been running successfully since 2002 and now has over 150 active members and a budget of 30 lakh INR per annum. LiGHT currently aims at forming teams of spirited students in various colleges across India and we have already succeeded in convincing over 20 colleges which include various reputed IITs, NITs and IIITs.
          </p>
        </div>
        <div className='text-center justify-center flex flex-col items-center bg-gray-100'>
            <h1 className='font-bold text-4xl   '>
            Meet Our Leaders
          </h1>
          <div className='w-12 md:w-16 h-1 bg-yellow-400 rounded-full mt-3 text-center justify-center' ></div>
          <div className='group relative w-80 h-[420px] rounded-[2rem] overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>

          <img src="/meghasinghal.jpg" alt="" className='h-90 w-80 rounded-4xl border-t-3 border-yellow-300 overflow-hidden' />
          
          <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col text-left">

          <h1>Megha Singhal</h1>
          <p>Chief Executive Officer, LiGHT</p>
          </div>
          
          </div>
        </div>
      
    </div>
  )
}

export default Member
