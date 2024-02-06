import React from 'react'

function About() {
  return (
    <div name='about' className="w-full h-screen bg-slate-400 ">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-5xl text-[#474F7A] font-bold inline border-b-4 border-slate-600 font-roboto'>
                        About
                    </p>
                </div>
                <div> </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 font-roboto ">
                    <div>
                        <p className='sm:text-right text-4xl font-bold text-gray-200'>Hi, I'm <span className='text-[#3C3633]'>Jhon Mark</span>, nice to meet you. Please take a look around. </p>
                    </div>
                    <div>
                        <p className='font-semibold'>As a frontend developer, I specialized in creating engaging and user-friendly web interfaces by harnessing the power of HTML, CSS, and JavaScript to bring digital visions to life.</p>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default About