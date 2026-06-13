import React from 'react'
import { Link } from 'react-router-dom';

const Center = () => {
  return (
    <div className='py-36 px-6 lg:px-24 flex items-center justify-center w-full bg-gray-800'>
        <div className=' flex grid-col-1 lg:grid-col-12 w-full gap-10 items-center'>
            <div className='lg:col-span-5 space-y-4'>
                <h1 className='font-bold text-5xl lg:col-span-5  text-gray-300 '>Our Centers</h1>
                <p className='text-gray-200 text-1xl'>
                    A human network across India — explore our centers and discover the impact we're making together.
                </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 w-full text-gray-200'>
                <div className='bg-gray-600 py-2 m-2 text-center rounded-md'>
                    <h1 className='text-yellow-300 text-4xl font-bold'>
                        11
                    </h1>
                    <p>
                        CENTERS
                    </p>

                </div>
                <div className='bg-gray-600 py-2 m-2 text-center rounded-md'>
                    <h1 className='text-yellow-300 text-4xl font-bold'>
                        7
                    </h1>
                    <p>
                        STATES
                    </p>

                </div>
                <div className='bg-gray-600 py-2 m-2 text-center rounded-md'>
                    <h1 className='text-yellow-300 text-4xl font-bold '>
                        400+
                    </h1>
                    <p>
                        ACTIVE MEMBERS
                    </p>
                </div>
                {/* Yeh galat tareeka thaa, isse line nahi dikhegi */}
                <div className='underline underline-offset-14 decoration-yellow-400'></div>
            </div>    
        </div>      
    </div>
  )
}

export default Center
