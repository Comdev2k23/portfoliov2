import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import {Link} from 'react-scroll'

function Navbar() {

    const [nav,  setNav] = useState(false)

    function handleclick () {
        setNav(!nav)
    }

  return (
    <div className='fixed w-full h-[80px] flex  justify-between items-center px-4 
    bg-[#1F2544] text-white font-roboto'>
            <div className="flex items-start ">
                <img src={Logo} alt="logo" style={{width: "60px"}} 
                className=''/>
            </div>

            {/*Menu*/}

         
                <ul className='hidden md:flex'>
                    <li className='hover:scale-150 duration-300 inline 
                   hover:border-b-2'>
                    <Link 
                    to="home" 
                    smooth={true} 
                    duration={500}>
                        Home </Link>
                    </li>
                    <li className='hover:scale-150 duration-300 inline 
                   hover:border-b-2'>
                    <Link 
                    to="about" 
                    smooth={true} 
                    duration={500}>
                        About </Link>
                    </li>
                    <li className='hover:scale-150 duration-300 inline 
                   hover:border-b-2'>
                    <Link 
                    to="skills" 
                    smooth={true} 
                    duration={500}>
                        Skills </Link>
                    </li>
                    <li className='hover:scale-150 duration-300 inline 
                   hover:border-b-2'>
                    <Link 
                    to="work" 
                    smooth={true} 
                    duration={500}>
                        Work </Link>
                    </li>
                    <li className='hover:scale-150 duration-300 inline 
                   hover:border-b-2'>
                    <Link 
                    to="contact" 
                    smooth={true} 
                    duration={500}>
                        Contact </Link>
                    </li>
                   
                </ul>
            

            {/* Humburger */}
            <div onClick={handleclick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes /> }
            </div>

            {/* Mobile menu */}

            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#1F2544] flex flex-col justify-center items-center" }>
                    <li className="py-6 text-4xl hover:scale-150 duration-300 "><Link 
                    to="home" 
                    smooth={true} 
                    duration={500}>
                        Home </Link></li>
                    <li className="py-6 text-4xl  hover:scale-150 duration-300"><Link 
                    to="about" 
                    smooth={true} 
                    duration={500}>
                        About </Link></li> 
                    <li className="py-6 text-4xl  hover:scale-150 duration-300"><Link 
                    to="skills" 
                    smooth={true} 
                    duration={500}>
                        Skills </Link></li>
                    <li className="py-6 text-4xl  hover:scale-150 duration-300"><Link 
                    to="work" 
                    smooth={true} 
                    duration={500}>
                        Work </Link></li>
                    <li className="py-6 text-4xl  hover:scale-150 duration-300"><Link 
                    to="contact" 
                    smooth={true} 
                    duration={500}>
                        Contact </Link></li>
                </ul>

        {/* Social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between 
                    items-center ml-[-100px] hover:ml-[-10px] duration-300 
                    bg-blue-600'>
                        <a className='flex justify-between items-center w-full
                         text-grey-200 ' href="">
                            Linkedln <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between 
                    items-center ml-[-100px] hover:ml-[-10px] duration-300 
                    bg-slate-600'>
                        <a className='flex justify-between items-center w-full
                         text-grey-200 ' href="">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between 
                    items-center ml-[-100px] hover:ml-[-10px] duration-300 
                    bg-green-400'>
                        <a className='flex justify-between items-center w-full
                         text-grey-200 ' href="">
                            Email <MdOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between 
                    items-center ml-[-100px] hover:ml-[-10px] duration-300 
                    bg-gray-500'>
                        <a className='flex justify-between items-center w-full
                         text-grey-200 ' href="">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
        </div>

    </div>
  )
}

export default Navbar

