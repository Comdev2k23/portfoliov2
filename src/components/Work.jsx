import React from 'react'
import Airbnb from '../assets/airbnb.png'
import Shop from '../assets/shopv3.png'
import Todolist from '../assets/todolist.png'
import Presume from '../assets/p-resume.png'

function Work() {
  return (
    <div name='work' className='bg-slate-400 w-full md:h-screen 
    text-grey-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col
             justify-center w-full h-full'>
                <div className='pb-8 '>
                    <p className='text-5xl font-bold inline border-b-4 text-[#474F7A]
                    border-slate-600 font-roboto'>Work</p>
                    <p className='py-6 font-roboto text-white text-xl'>// Checkout my recent works</p>
                </div>


            {/* container */}
                <div 
                className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                    <div style={{backgroundImage: `url(${Airbnb})`}} className='shadow-lg shadow-slate-500 group container 
                    rounded-md flex justify-center items-center mx-auto
                     content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 font-roboto'>
                            <span className='text-2xl font-bold pl-5 text-white tracking-wider '>
                               Airbnb Web
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://comdev2k23.github.io/exercise3/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2
                                     bg-white text-grey-700 font-bold  hover:bg-slate-400 hover:text-white'>Demo</button>
                                </a>
                                <a href="https://github.com/Comdev2k23/exercise3">
                                    <button className='text-center rounded-lg px-4 py-3 m-2
                                     bg-white text-grey-700 font-bold  hover:bg-slate-400 hover:text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${Shop})`}} className='shadow-lg shadow-slate-500 group container 
                    rounded-md flex justify-center items-center mx-auto
                     content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 font-roboto'>
                            <span className='text-2xl pl-5 font-bold text-white tracking-wider '>
                               My Shopv3
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://comdev2k23.github.io/myShoppv3/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2
                                     bg-white text-grey-700 font-bold hover:bg-slate-400 hover:text-white'>Demo</button>
                                </a>
                                <a href="https://github.com/Comdev2k23/myShoppv3">
                                    <button className='text-center rounded-lg px-4 py-3 m-2
                                     bg-white text-grey-700 font-bold hover:bg-slate-400 hover:text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${Todolist})`}} className='shadow-lg shadow-slate-500 group container 
                    rounded-md flex justify-center items-center mx-auto
                     content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 font-roboto'>
                            <span className='text-2xl font-bold pl-3 text-white tracking-wider '>
                               To-Do-List-v3
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://comdev2k23.github.io/to-do-list-v2/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2
                                     bg-white text-grey-700 font-bold  hover:bg-slate-400 hover:text-white'>Demo</button>
                                </a>
                                <a href="https://github.com/Comdev2k23/to-do-list-v2">
                                    <button className='text-center rounded-lg px-4 py-3 m-2
                                     bg-white text-grey-700 font-bold  hover:bg-slate-400 hover:text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${Presume})`}} className='shadow-lg shadow-slate-500 group container 
                    rounded-md flex justify-center items-center mx-auto
                     content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 font-roboto'>
                            <span className='text-2xl pl-5 font-bold text-white tracking-wider '>
                                Resume v1
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://comdev2k23.github.io/portfolio/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2
                                     bg-white text-grey-700 font-bold  hover:bg-slate-400 hover:text-white'>Demo</button>
                                </a>
                                <a href="https://github.com/Comdev2k23/portfolio">
                                    <button className='text-center rounded-lg px-4 py-3 m-2
                                     bg-white text-grey-700 font-bold  hover:bg-slate-400 hover:text-white '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Work