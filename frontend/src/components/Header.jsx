import React from 'react'

const Header = () => {
  return (
    <nav className="flex items-center justify-around px-6 py-4 bg-gray-00 shadow-md">
      <div className='text-2xl font-bold'>Satya</div>
      <div className="space-x-6 text-lg">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
export default Header