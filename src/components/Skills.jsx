import React from 'react'
import Html from '../assets/html-5.png'
import Css from '../assets/css-3.png'
import Js from '../assets/js.png'
import Physics from '../assets/physics.png'
import Tailwind from '../assets/tailwind.png'
import Mongodb from '../assets/mongodb.png'


function Skills() {
  return (
    <div name='skills' className='  bg-slate-400 text-[#474F7A]'>
            {/* container */}

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col 
            justify-center w-full h-full'>
                <div>
                    <p className='text-5xl  py-4
                     font-bold font-roboto border-b-4 border-slate-600'>Skills</p>
                    <p className='py-4 text-white text-xl font-roboto'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid gird-cols-2 sm:grid-cols-2 md:grid-cols-3
                 gap-4 text-center py-8 font-roboto font-semibold text-white'>
                    <div className='shadow-md shadow-slate-500 hover:scale-110
                     duration-500 '>
                        <img src={Html} className='
                        w-20 mx-auto pt-4' alt="html icon" />
                        <p className='my-4'>
                            HTML
                        </p>
                    </div>
                    <div className='shadow-md shadow-slate-500 hover:scale-110
                     duration-500'>
                        <img src={Css} className='
                        w-20 mx-auto pt-4' alt="html icon" />
                        <p className='my-4'>
                            CSS
                        </p>
                    </div>
                    <div className='shadow-md shadow-slate-500 hover:scale-110
                     duration-500'>
                        <img src={Js} className='
                        w-20 mx-auto pt-4' alt="html icon" />
                        <p className='my-4'>
                            JAVASCRIPT
                        </p>
                    </div>
                    <div className='shadow-md shadow-slate-500 hover:scale-110
                     duration-500'>
                        <img src={Physics} className='
                        w-20 mx-auto pt-4' alt="html icon" />
                        <p className='my-4'>
                            REACT JS
                        </p>
                    </div>
                    <div className='shadow-md shadow-slate-500 hover:scale-110
                     duration-500'>
                        <img src={Tailwind} className='
                        w-20 h-[80px] mx-auto item-center pt-5' alt="html icon" />
                        <p className='my-4'>
                            TAILWIND CSS
                        </p>
                    </div>
                    <div className='shadow-md shadow-slate-500 hover:scale-110
                     duration-500'>
                        <img src={Mongodb} className='
                        w-20 h-[120px] mx-auto pt-4' alt="html icon" />
                        <p className='my-4'>
                            MONGO DB
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Skills