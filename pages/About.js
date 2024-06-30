"use client";
import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';
import "../app/pages.css";
import "../app/globals.css";


const About = () => {
  return (
    <>
      <Head>
        <title>About EatSafe</title>
        <meta name="description" content="Learn more about EatSafe, a personal project dedicated to ensuring food safety transparency." />
      </Head>

      <NavBar />
      
      <div className='flex justify-center items-center mt-auto mb-auto '>
        <div className="w-[80%] lg:w-[60%] bg-[#05050585] p-4 text-[#efb961] rounded-lg text-sm md:text-sm lg:text-lg lg:mt-2 mt-8 mb-8 lg:mb:0" >
          <h1 className="text-3xl font-bold mt-5">About EatSafe</h1>
          <p className="mt-5 text-lg">
            EatSafe is my project dedicated to ensuring food safety transparency. The motivation behind EatSafe stems from a desire to provide consumers with accurate, real-time information about the safety of their food choices.
          </p>
          <p className="mt-3 text-lg">
            Using EatSafe, you can quickly check the safety of food products by entering their names. Powered by advanced technology Gemini AI, EatSafe delivers detailed safety assessments that go beyond marketing claims, ensuring you have the facts to make informed decisions.
          </p>
          
        </div>
      </div>
      
      <Footer />

    </>
  );
};

export default About;
