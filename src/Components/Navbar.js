import React from 'react';
import { Logo } from './SVGcomponents';

const Navbar = () => {
  // grab everything we need
  const handleButtonClick = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <div>
      <nav className="bg-white" style={{
        boxShadow: '0px 6px 4px rgba(27, 83, 49, 0.2404)',
      }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-16">
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <Logo />
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-4 font-bold text-[18px]">
                <select className="bg-white text-primary" name="Product" id="">
                  <option value="">Product</option>
                </select>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">About Us</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Contacts</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="bg-primary py-[14px] px-[33px] rounded-[10px] font-bold text-[18px]">
                <a href="" className="text-white">Get Started</a>
              </div>
              <div className="border-2 py-[14px] px-[33px] rounded-[10px] font-bold text-[18px]">
                <a href="">Login</a>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={handleButtonClick}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mobile-menu hidden md:hidden">
          <select className="block bg-white text-primary ml-2" name="Product" id="">
            <option value="">Product</option>
          </select>
          <a href="#" className="block py-5 px-3 text-gray-700 hover:text-gray-900">About Us</a>
          <a href="#" className="block py-5 px-3 text-gray-700 hover:text-gray-900">Contacts</a>

        </div>
      </nav>
    </div >
  );
};

export default Navbar;
