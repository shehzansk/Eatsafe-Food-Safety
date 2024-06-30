"use client";
import React, { useState } from 'react';
import "../app/pages.css";
import "../app/globals.css";

const NavBar = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    
    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

  return (
    <div>
      <header className="pt-2 flex justify-between items-center px-5">
        <a href="/">
          <img
            src="./logo.png"
            className='w-14 h-12 md:w-18 md:h-14 lg:w-20 lg:h-16'
          />
        </a>
        <button
          className="text-white md:hidden"
          onClick={toggleDrawer}
        >
          <img src="./menu.svg" className="w-7 h-7" />
        </button>
        <div className="hidden md:flex pr-6 pt-3 lg:text-lg md:text-md text-xs font-medium">
          <a href="/About" className="mr-6">
            About
          </a>
          <a href="/Contact">Contact</a>
        </div>
      </header>

      <div className={`fixed top-0 right-0 h-full w-56 p-2 text-base bg-[#2a2929e4] text-[#efb961] z-50 transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out md:hidden`}>
        <button
          className="p-2 bg-[#05050590] w-full rounded-md"
          onClick={toggleDrawer}
        >
          Close
        </button>
        <nav className="flex flex-col pt-2 space-y-2">
          <a href="/About" onClick={toggleDrawer} className='bg-[#05050590] w-full p-4 rounded-md'>About</a>
          <a href="/Contact" onClick={toggleDrawer} className='bg-[#05050590] w-full  p-4 rounded-md'>Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
