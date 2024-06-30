"use client";
import React from 'react';
import "../app/pages.css";
import "../app/globals.css";

const Footer = () => {
  return (
    <footer className="bg-[#05050585] p-2 lg:text-base md:text-md text-xs text-center mt-auto">
      <hr className="border-t-2 border-[#efb961] mb-3 mx-auto" />
      <div className="flex justify-between flex-col lg:flex-row md:flex-row text-[#efb961] px-5 gap-2">
        <span>&copy; All rights reserved by EatSafe</span>
        <span>
          Made With ♥ by <span className="font-bold">Shehzan Sheikh</span>
        </span>
      </div>
      <hr className="border-t-2 border-[#efb961] my-2 mx-auto" />
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-[#efb961] font-bold">Follow Me:</p>
        <div className="flex justify-center items-center gap-5 lg:gap-8 pb-4">
          <a href="https://github.com/shehzansk" target="_blank">
            <img
              src="./github.svg"
              width="20"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
          </a>
          <a href="https://www.linkedin.com/in/shehzansheikh/" target="_blank">
            <img
              src="./linkedin.svg"
              width="20"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
          </a>
          <a href="mailto:shehzansheikh0@gmail.com" target="_blank">
            <img
              src="./mail.svg"
              width="20"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
          </a>
        </div>
      </div>
      <hr className="border-t-2 border-[#efb961] mx-auto" />
    </footer>
  );
};

export default Footer;
