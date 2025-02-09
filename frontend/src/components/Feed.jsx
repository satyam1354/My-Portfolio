import React from 'react'
const Feed = () => {
    return (
        <>
            <div className='flex justify-center gap-20 my-20'>
             <div className='items-center w-60 h-60 py-8'>
                <img  className='w-44 h-44 rounded-full object-cover' src='https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
             </div>
             <div className='m-10 items-center '>
                <p className='text-center'> Hello I'm</p>
                <div className='text-2xl font-bold text-center py-1'>Satyam Kumar</div>
                <div className='text-center text-xl pb-3'>Frontend developer</div>
                <div className='flex gap-4'>
                    <div className='border border-gray-400 bg-gray-200 rounded-2xl px-3 py-1 text-black'><a href='#'>Download CV</a></div>
                    <div className='border border-gray-400 bg-black rounded-2xl px-3 py-1 text-white'><a href='#'>Contact info</a></div>
                </div>
                <div className='flex gap-4 items-center h-10 px-24'>
                    <a href=''><img className="w-5 h-5" src='h'/></a>
                    <a href=''><img className="w-5 h-5" src='b'/></a>
                </div>
             </div>
            </div>
        </>
    )
}
export default Feed