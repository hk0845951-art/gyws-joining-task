import React from 'react'
import { Link } from 'react-router-dom';
import { IoCallSharp, IoMailSharp, IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' bg-black '>
            <div className='grid grid-cols-1 md:grid-cols-3 px-20 py-10 '>
                <div>
                    <img src="/image.png" alt="" className='w-12  h-12 object-contain m-3' />
                    <h6 className='text-gray-300 font-light'>LiGHT is an initiative of one of India's largest student-run government registered NGO Gopali Youth Welfare Society, based in IIT Kharagpur. Gopali Youth Welfare Society aims at the overall socio-economic development of the underprivileged near the IIT Kharagpur campus.</h6>
                    <div className='flex flex-row space-x-4'>
                        <FaFacebook className='text-yellow-300' />
                        <FaInstagram className='text-yellow-300'/>
                        <FaLinkedin className='text-yellow-300'/>
                        <FaTwitter className='text-yellow-300'/>
                        <FaWhatsapp className='text-yellow-300'/>

                    </div>

                </div>
                <div className='flex flex-col text-white text-1xl mx-0 md:mx-10 leading-relaxed  font-light space-y-1'>
                    <h1 className='text-2xl font-semibold text-gray-300 py-5'>Useful Links</h1>

                    <Link to="/" className=' py-0'>Home</Link>
                    <Link to="/About" className=' py-0'>About Us</Link>
                    <Link to="/Initiatives" className=' py-0'>Initiatives</Link>
                    <Link to="/Media" className=' py-0'>Media</Link>
                    <Link to="/Members" className=' py-0'>Members</Link>
                    <Link to="/Gallery" className=' py-0'>Gallery</Link>
                    <Link to="/contact" className=' py-0'>Contact Us</Link>
                    <Link to="/Join us" className='py-0'>Join Us</Link>
                </div>
                <div className='space-y-4 '>
                    <h1 className=' text-2xl font-bold text-gray-300 py-5'>Contact Us</h1>
                    <p className='space-x-4 leading-relaxed text-gray-300 font-light flex flex-row items-center'>
                        <IoMailSharp className='text-yellow-300'/> light@gyws.org
                    </p>
                    <p className='space-x-4 flex flex-row leading-relaxed text-gray-300 font-light items-center'>

                    <IoCallSharp className='text-yellow-300'/> 91+ 94147 29199
                    </p>    
                    <p className='space-x-4 leading-relaxed text-gray-300 font-light flex flex-row items-center'>
                        <IoLocationSharp className='text-yellow-300'/>
    
                         Jagriti Vidya Mandir, Hostel Vill. Tangasole, P.O- Salua, P.S-Kharagpur (Local), Dist- Paschim Medinipur, Kharagpur, West-Bengal, Pin- 721145
                    </p>     
                </div>
            </div>
            <div className='py-5 '>
                <div className='text-center text-gray-300 focus:border-gray-400'>
                    <h1>© 2026 GYWS. All rights reserved</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
