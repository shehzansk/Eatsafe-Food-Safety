"use client";
import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import "../pages.css";
import "../globals.css";

const Contact = () => {

  return (
    <>
      <NavBar />

      <div className='flex justify-center items-center mt-auto mb-auto font-montserrat'>
        <div className="w-[80%] lg:w-[60%] bg-[#05050585] p-6 text-[#efb961] rounded-lg text-sm lg:text-base lg:mt-2 mt-8  mb-8 lg:mb:0">
          <h1 className="text-3xl font-bold mt-5">Contact Me</h1>
          <p className="mt-5 text-lg">
            Got questions, suggestions, or feedback? I built this website with care and would love to hear from you.
            <br></br> Feel free to reach out!
          </p>
          <div className="mt-5 text-lg">
            <p>Email: <a href="mailto:shehzansheikh0@gmail.com" className="text-[#388E3C] underline font-semibold">shehzansheikh0@gmail.com</a></p>
            <p className="mt-2 text-center">Follow Me:</p>
            <div className="flex justify-center items-center gap-5 mt-3">
              <a href="https://github.com/shehzansk" target="_blank">
                <img src="./github.svg" width="20" className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"/>
              </a>
              <a href="https://www.linkedin.com/in/shehzansheikh/" target="_blank">
                <img src="./linkedin.svg" width="20" className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
};

export default Contact;
