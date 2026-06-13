import React,{useState} from 'react'
import {FaAlignJustify} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobilemenu, setmobilemenu] = useState(false)
  return (
    
    
    <div className='bg-[#262728]  h-auto lg:h-20 flex flex-col lg:flex-row w-full justify-between items-center px-6 lg:px-16 fixed left-0 top-0 select-none z-50 py-4 lg:py-0'>
        {/* <div className='mx-10 lg:mx-38'> */}
            <div className='flex items-center justify-between w-full lg:w-auto'>
                <div className='flex items-center'>
               <img src="/image.png" alt="" className='w-10  h-10 object-contain '/>
               {/* my-5 */}
               <h1 className='text-white text-2xl font-bold  '>LiGHT</h1>
            </div>
            <div className='flex lg:hidden items-center space-x-4'>
            {/* block lg:hidden items-center flexbox flow  */}
            <a href="" className= 'bg-yellow-400 text-black font-semibold rounded px-2 , py-2 hover:bg-yellow-500 whitespace-nowrap' >Donate</a>

            <button className='text-white text-2xl p-1 focus:outline-none' 
            onClick={()=>setmobilemenu(!mobilemenu)}>{mobilemenu?<span className='border border-white/50 px-2 py-0.5 rounded text-lg bg-white/10 '>X</span>:<FaAlignJustify />}</button>
            </div>
            </div>

            


            {/* mx-3 py-6 */}
        {/* </div> */}
        <div className='text-white hidden lg:flex items-center space-x-8 '>
            {/* ml-57 mr-7 my-auto  */}
        <div className='text-white text-sm font-medium flex space-x-6 whitespace-nowrap'>    
            
            <Link to="/" className='hover:text-yellow-400 transition'>Home</Link>
            <Link to = "/About" className='hover:text-yellow-400 transition'>About Us</Link>
            <Link to="Center" className='hover:text-yellow-400 transition'>Centers</Link>
            <Link to="/contact" className='hover:text-yellow-400 transition'>Contact Us</Link>
            <Link to="/Initiatives"className='hover:text-yellow-400 transition'>Initiatives</Link>
            <Link to="Join us" className='hover:text-yellow-400 transition'>Join Us</Link>
            <Link to="/Member" className='hover:text-yellow-400 transition'>Members</Link>
            
        </div>
        {/* <div className= 'bg-yellow-400 text-black my-7 flexbox flow rounded whitespace-nowrap'> */}
            <a href="" className= 'bg-yellow-400 text-black font-semibold rounded px-2 , py-2 hover:bg-yellow-500 whitespace-nowrap' >Donate Now</a>
            
        </div>

       

        
        
        
        {mobilemenu &&(
            <div className=' top-20 left-0 w-full text-white bg-black lg:hidden z-50'>
                <div className='flex flex-col text-white text-xl p-3 '>
                    <Link to="/" className='px-2 py-3'>Home</Link>
                    <Link to="/About" className='px-2 py-3'>About Us</Link>
                    <Link to="Center" className='px-2 py-3'>Centers</Link>
                    <Link to="/contact" className='px-2 py-3'>Contact Us</Link>
                    <Link to="/Initiatives" className='px-2 py-3'>Initiatives</Link>
                    <Link to="Join us" className='px-2 py-3'>Join Us</Link>
                    <Link to="/Member" className='px-2 py-3'>Members</Link>
                </div>
                
            </div>
        )}
     
    </div>
  )
}

export default Navbar
