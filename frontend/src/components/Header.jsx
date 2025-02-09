import React, { useState } from 'react'
import {X, Menu} from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
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
        <div className='absolute top-16 left-0 w-full bg-gray-100 shadow-md md:hidden flex flex-col items-center py-4 space-y-4'>
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

// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react'; // Icons for open/close

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
//       {/* Logo */}
//       <div className="text-2xl font-bold">Satya</div>

//       {/* Desktop Menu (Hidden on small screens) */}
//       <div className="hidden md:flex space-x-6 text-lg">
//         <a href="#about">About</a>
//         <a href="#experience">Experience</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </div>

//       {/* Mobile Menu Button */}
//       <button 
//         className="md:hidden block" 
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X size={28} /> : <Menu size={28} />} {/* Toggle icon */}
//       </button>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md md:hidden flex flex-col items-center space-y-4 py-4">
//           <a href="#about" onClick={() => setIsOpen(false)}>About</a>
//           <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
//           <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
//           <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;
