"use client";
import React, { useState } from 'react';
import "../pages.css";
import "../globals.css";
import Link from 'next/link';

const NavBar = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    
    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

  return (
    <>
      <header className="pt-2 flex justify-between items-center px-5 font-montserrat">
        <a href="/">
          <img src="./logo.png" className='w-14 h-12 md:w-[4rem] md:h-[3.5rem] lg:w-20 lg:h-16' />
        </a>
        <button className="text-white md:hidden" onClick={toggleDrawer} >
          <img src="./menu.svg" className="w-7 h-7" />
        </button>
        <div className="hidden md:flex pr-6 pt-3 lg:text-lg md:text-base text-xs font-medium gap-5">
          <Link href="/About" >
            About
          </Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/History" className='flex items-center gap-[0.15rem]'>
          <img src="/history.png" className="w-3 h-3 md:w-3 md:h-3 lg:w-5 lg:h-5"></img>
          History
          </Link>
        </div>
      </header>

      <div className={`fixed top-0 right-0 h-full w-56 p-2 text-base bg-[#2a2929e4] text-[#efb961] z-50 transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out md:hidden`}>
        <button className="p-2 bg-[#05050590] w-full rounded-md" onClick={toggleDrawer}>
          Close
        </button>
        <nav className="flex flex-col pt-2 space-y-2">
          <Link href="/About" onClick={toggleDrawer} className='bg-[#05050590] w-full p-4 rounded-md'>About</Link>
          <Link href="/Contact" onClick={toggleDrawer} className='bg-[#05050590] w-full  p-4 rounded-md'>Contact</Link>
          <Link href="/History" onClick={toggleDrawer} className='bg-[#05050590] w-full  p-4 rounded-md flex items-center gap-[0.2rem]'>
            <img src="/history.png" className="w-3 h-3 md:w-3 md:h-3 lg:w-5 lg:h-5 bg-white rounded-sm p-[1px]"></img>
            History
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
