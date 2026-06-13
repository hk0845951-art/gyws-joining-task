import React from 'react'

const Contact = () => {
    return (
        <div className='w-full  h-auto flex flex-col items-center'>
            <div className='w-full bg-black pt-24 pb-12 px-6 lg:px-16 flex justify-center items-center'>
                <div className='flex flex-col   w-full item-center py-12'>
                    <h1 className='text-gray-200 font-bold text-4xl text-left tracking-wide mb-4'>Contact With Us</h1>
                    <p className='text-gray-300 text-1xl leading-relaxed mb-8'>Help today because tomorrow you may be the one who needs more<br />helping!</p>


                    <div className='flex items-center space-x-2 font-bold'>
                        <span className='hover:underline text-gray-100'>Home</span>
                        <span className='text-gray-500'>/</span>
                        <span className='text-yellow-300'>Contact</span>
                    </div>


                </div>
            </div>
            <div className='w-full max-w-6xl bg-gray-200 text-black mb-0 mx-8 md:mx-12 my-10 p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2'>
                <div className='space-y-4'>
                    <h1 className=' text-2xl font-bold'>GET IN TOUCH</h1>
                    <p className='space-x-4 leading-relaxed'> Jagriti Vidya Mandir, Hostel Vill. Tangasole, P.O- Salua, P.S- Kharagpur (Local), Dist- Paschim Medinipur, Kharagpur, West-Bengal, Pin- 721145
                        <br />
                        📞 91+ 94147 29199
                        <br />
                        ✉️ light@gyws.org</p>
                </div>
                <div className='space-y-4' >
                    <h1 className=' text-2xl font-bold'>QUERY HERE</h1>
                    <form>
                        <div className='flex flex-col space-y-4 w-full'>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <input type="text" placeholder='Name' className='border  rounded-md w-full p-3 text-sm focus:outline-none focus:border-yellow-400 transition' />
                                <input type="text" placeholder='Email' className='border  rounded-md w-full p-3 text-sm focus:outline-none focus:border-yellow-400 transition' />
                            </div>
                            <div className='w-full'>
                                <textarea type="text" placeholder='Message' rows="4"  className='w-full resize-none items-center text-center border  rounded-md  p-3 text-sm focus:outline-none focus:border-yellow-400 transition'></textarea>
                            </div>
                            <div>
                                <button className='bg-yellow-300 rounded-md p-2 hover:bg-yellow-400 '>
                                    Send Message

                                </button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
