import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-slate-400
     flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/1fdb2be8-e9e3-440c-9b85-7ad6bff8c7a7" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 text-[#474F7A]
                border-slate-500 font-roboto'>Contact</p>
                <p className=' py-4 font-roboto text-xl text-white'>// Submit the form below or Send me an email - <span className='text-[#1F2544]'>comdev084@gmail.com</span>   </p>
            </div>
            <input className='bg-slate-200 p-2' type="text" placeholder='Name:' name='name' />
            <input className='bg-slate-200 my-2 py-2 px-2' type="text" placeholder='Email:' name='email' />
            <textarea className='bg-slate-200 p-2' name="message" placeholder='Message:' rows="10"></textarea>
            <button className='text-white border-2 bg-slate-500 hover:border-slate-500 
            px-4 py-3 my-8 mx-auto flex items-center font-roboto font-bold hover:scale-150 duration-300'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact