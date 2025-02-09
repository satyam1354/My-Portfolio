import React from 'react'
import { Github, Linkedin } from 'lucide-react';

const Feed = () => {
    return (
        <>
            <div className='flex flex-col  md:flex-row justify-center w-full gap-20 my-24 items-center'>
                    <img className='w-44 h-44 rounded-full object-cover' src='https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                <div className='text-center'>
                    <p > Hello I'm</p>
                    <div className='text-2xl font-bold  py-1'>Satyam Kumar</div>
                    <div className=' text-xl pb-3'>Frontend developer</div>
                    <div className='flex gap-4'>
                        <div className='border border-gray-400 bg-gray-200 rounded-2xl px-3 py-1 text-black'><a href='#'>Download CV</a></div>
                        <div className='border border-gray-400 bg-black rounded-2xl px-3 py-1 text-white'><a href='#'>Contact info</a></div>
                    </div>
                    <div className='flex gap-4 items-center h-14 px-24'>
                        <a href='https://www.github.com/satyam1354/' target='_blank'><Github size={20} className=" hover:text-black"/></a>
                        <a href='https://www.linkedin.com/in/satyam1354/' target='_blank' rel="noopener noreferrer"><Linkedin size={22} className=" hover:text-black"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Feed