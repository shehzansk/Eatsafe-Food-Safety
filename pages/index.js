"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import "../app/pages.css";
import "../app/globals.css";
import Link from 'next/link';

const Index = () => {
  const [foodName, setFoodName] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [ratingImg, setRatingImg] = useState(true);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const getMergedRating = (rating) => {
    if (rating >= 1 && rating <= 2) return '1-2';
    if (rating >= 3 && rating <= 4) return '3-4';
    if (rating >= 5 && rating <= 6) return '5-6';
    if (rating >= 7 && rating <= 8) return '7-8';
    if (rating >= 9 && rating <= 10) return '9-10';
    return '';
  };

  const checkFoodSafety = async (e) => {
    e.preventDefault();
    setResult('');
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('/api/checkFood', { foodName });
      const { text, rating } = response.data;

      setResult(text);
      setRating(rating);
      setShowResults(true);
    } catch (err) {
      console.error('Error checking food safety:', err);
      setError('😭 Error checking food safety.');
    } finally {
      setLoading(false);
      setRatingImg(false);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Head>
      <title>EatSafe - Ensure Food Safety</title>
      <link rel="icon" href="/favicon.ico?v=4" />

      <meta name="description" content="Ensure your food is safe to consume. Enter a food or food product name below and get a detailed safety analysis and rating." />
      <meta name="robots" content="index, follow" /> 
      <meta name="author" content="Shehzan Sheikh" />
      <meta name="keywords" content="food safety, check food safety, food analysis, food rating" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      </Head>
      <div className="min-h-screen flex flex-col font-montserrat">
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
            <a href="/" className="mr-4">
              About
            </a>
            <a href="/">Contact</a>
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

        <div className="App flex justify-center items-center flex-grow mb-4">
          <div className="w-[80%] lg:w-[60%] bg-[#05050585] p-4 text-[#efb961] rounded-lg text-sm md:text-sm lg:text-lg lg:mt-2 mt-8">
            <h1 className="text-center text-2xl font-bold mt-3 lg:text-3xl md:text-2xl">
              Welcome to EatSafe
            </h1>
            <p className="text-center mt-3">
              Ensure your food is safe to consume. Enter a food or food product name below and get
              a detailed safety analysis and rating.
            </p>

            <form onSubmit={checkFoodSafety} className="flex flex-col items-center">
              <div className="relative w-10/12 mt-3">
                <input
                  type="text"
                  id="foodName"
                  placeholder="Enter Food Name..."
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  required
                  className="w-full p-2 text-center text-[#efb961] placeholder-[#cb714e] font-medium rounded-md border border-[#cb714e] focus:outline-none focus:ring focus:border-[#d89c3c] bg-[#00000035] hover:bg-[#00000050]"
                />
                {foodName && (
                  <button
                    type="button"
                    onClick={() => setFoodName('')}
                    className="absolute right-2 top-2 text-[#efb961] hover:text-[#efb961]"
                  >
                    <img src="./cross.svg" className="w-6 md:w-7 lg:w-8" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="w-5/12 mt-3 text-xs md:text-sm lg:text-lg bg-[#C62828] rounded-md border border-[#cb714e] hover:bg-[#388E3C] text-[#efb961] font-bold py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Check
              </button>
              {ratingImg && (
                <img
                  src="/RatingInfo.png"
                  alt="rating1-2"
                  width={300}
                  className="mt-5"
                />
              )}
            </form>

            {loading && (
              <div className="custom-loading-container active">
                <img src="/loading3.gif" width="300" alt="Loading" />
              </div>
            )}
            {showResults && (
              <div className="flex flex-col items-center mt-4">
                <div className="w-full bg-[#05050585] p-4 text-[#efb961] rounded-lg text-sm lg:text-base">
                  <h2 className="text-center mb-3">Results:</h2>
                  <div dangerouslySetInnerHTML={{ __html: result }}></div>
                  {rating && (
                    <div className="flex justify-center items-center mt-4">
                      <img
                        src={`/rating${getMergedRating(rating)}.png`}
                        alt={`Rating ${getMergedRating(rating)}`}
                        width={300}
                        className="mt-5"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            {!loading && error && (
              <div className="text-red-500 mt-5 text-base md:text-lg lg:text-xl font-bold text-center">
                {error}
              </div>
            )}
          </div>
        </div>
        <footer className="bg-[#05050585] p-2 lg:text-base md:text-md text-xs text-center">
          <hr className="border-t-2 border-[#efb961] mb-3 mx-auto" />
          <div className="flex justify-between flex-col lg:flex-row md:flex-row text-[#efb961] px-5 gap-2">
            <span>&copy; All rights reserved by safeEat</span>
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
      </div>
    </>
  );
};

export default Index;
