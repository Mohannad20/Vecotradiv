import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white py-4 px-6 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold"><Link to={'/'}>VECOTRADIV</Link></div>
          <ul className="flex space-x-6">
            <li><Link to={'/'} className="hover:text-gray-400">Home</Link></li>
            <li><Link to={'/services'} className="hover:text-gray-400">Services</Link></li>
            <li><Link to={'/gallery'} className="hover:text-gray-400">Galerie</Link></li>
            <li><Link to={'/about'} className="hover:text-gray-400">About</Link></li>
            <li><Link to={'/contact'} className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar