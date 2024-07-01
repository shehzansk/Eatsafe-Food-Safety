"use client";
import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import "../pages.css";
import "../globals.css";


const About = () => {
  return (
    <>
      <NavBar />
      
      <div className='flex justify-center items-center mt-auto mb-auto font-montserrat'>
        <div className="w-[80%] lg:w-[60%] bg-[#05050585] p-6 text-[#efb961] rounded-lg text-sm md:text-sm lg:text-lg lg:mt-2 mt-8 mb-8 lg:mb:0" >
          <h1 className="text-3xl font-bold mt-3">About EatSafe</h1>
          <p className="mt-5 text-lg">
          EatSafe is a project dedicated to ensuring transparency in food safety. The motivation behind EatSafe is to provide consumers with accurate, real-time information about the safety of their food choices.
          </p>
          <p className="mt-3 text-lg">
          With EatSafe, you can quickly check the safety of food products by entering their names. Powered by advanced technology from Gemini AI, EatSafe delivers detailed safety assessments that go beyond marketing claims. This ensures you have the facts to make informed decisions about the food you consume.
          </p>
          
        </div>
      </div>
      
      <Footer />

    </>
  );
};

export default About;
