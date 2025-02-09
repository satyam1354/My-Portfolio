import React, { useState } from 'react'
import {X, Menu} from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-24 py-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className='text-2xl font-bold'>Satya</div>

      {/* Hamburger Button - Visible on Small Screens */}
<button className='block md:hidden text-gray-700' onClick={()=> setIsOpen(!isOpen)}>
   {isOpen? <X size={28} /> :<Menu size={28}/> }
</button>


      {/* Desktop Menu - Hidden on Small Screens */}
      <div className="hidden md:flex space-x-6 text-lg">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Mobile Menu - Shown when `isOpen` is true */}
      { isOpen && (
        <div className='absolute top-16 right-0 w-2/4 mid:1/3 bg-gray-100 shadow-lg rounded-lg md:hidden flex flex-col items-start px-6 space-y-4'>
          <a href='#about' onClick={() => setIsOpen(false)}>About</a>
          <a href='#xperience' onClick={() => setIsOpen(false)}>Experience</a>
          <a href='#projects' onClick={() => setIsOpen(false)}>Projects</a>
          <a href='#contact' onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}
export default Header