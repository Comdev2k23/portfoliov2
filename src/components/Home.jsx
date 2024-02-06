import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-slate-400'>
        
        {/* Container */}
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center
           h-full ">
                <p className='text-[#3C3633] font-bold font-roboto'>Hi, my name is</p>    
                <h1 className='text-4xl sm:text-7xl font-bold text-[#3C3633] font-roboto'>Jhon Mark Ariata</h1>
                <h2 className='text-4xl sm:text-7xl font-bold  text-[#747264] font-roboto'>I'm a Frontend Developer</h2>
                <p className='text-[#FFD0EC] py-4 mx-w-[700px] font-roboto'>I'm passionate about creating intuitive and visually engaging user interfaces that seamlessly blend design and functionality to enhance the user's digital experience.</p>
                <div className="">
              <button className='text-white border-2
               px-4 py-3 my-2 flex items-center bg-[#1F2544] hover:bg-[#747264] font-roboto font-bold'>View work 
               <span className='hover:rotate-90 duration-300'>
               <HiArrowNarrowRight className='ml-3 '/>
               </span>
                </button>
            </div>
          </div>
           
    </div>
  )
}

export default Home