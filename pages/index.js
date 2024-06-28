"use client";
import React, { useState } from 'react';
import axios from 'axios';
import "../app/pages.css";
import "../app/globals.css"

const Index = () => {
  const [foodName, setFoodName] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [ratingImg, setRatingImg] = useState(true);

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
    }
    finally {
      setLoading(false); // Set loading to false when request completes
      setRatingImg(false);
    }
  };
  
  return (
    <div className='min-h-screen flex flex-col font-montserrat'>
      
    <header className='pt-2'>
      <nav className=' flex justify-between items-center px-5'>
      <a href='/'><img src="./logo.png"  className='w-[75px] h-[60px] md:w-[85px] md:h-[70px] lg:w-[90px] lg:h-[75px]' /></a>
      <div className='pr-8 pt-3 lg:text-xl md:text-lg text-sm'>
      <a href='/About' className='mr-5'>About</a>
      <a href='/Contact'>Contact</a>
      </div>
      </nav>
    </header>

      <div className="App flex justify-center items-center flex-grow mb-8">
        <div className='w-[80%] lg:w-[60%] bg-[#05050585] p-4 text-[#efb961] lg:mt-2 mt-8 rounded-lg lg:text-xl md:text-lg text-sm'>
        <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold mt-3">Welcome to EatSafe</h1>
<p className="text-center lg:text-xl md:text-lg text-base mt-3">Ensure your food is safe to consume. Enter a food name below and get a detailed safety analysis and rating.</p>

          <form onSubmit={checkFoodSafety} className='flex flex-col items-center'>
          <div className="relative lg:w-5/12 md:w-6/12 sm:w-6/12 w-9/12 mt-3">
            <input
              type="text"
              id="foodName"
              placeholder='Enter Food Name...'
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              required
              className="w-full p-2 text-center lg:text-xl md:text-lg sm:text-sm text-xs text-[#efb961] placeholder-[#cb714e] font-medium rounded-md border border-[#cb714e] focus:outline-none focus:ring focus:border-[#d89c3c] bg-[#00000035] hover:bg-[#00000050]"
            />
            {foodName && (
              <button type="button" onClick={() => setFoodName('')} className="absolute right-2 top-2 text-[#efb961] hover:text-[#efb961]">
                <img src="./cross.svg" className='lg:w-[30px] md:w-[27px] w-[23px] y'/>
              </button>
            )}
          </div>
          <button type="submit" className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-5/12 lg:mt-5 mt-3 lg:text-xl md:text-lg sm:text-sm text-xs bg-[#C62828] rounded-md border border-[#cb714e] hover:bg-[#388E3C] text-[#efb961] font-bold py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 ">
              Check
          </button>
        {ratingImg && <img src="/RatingInfo.png" alt="rating1-2" width={500} className="mt-5" />}
      </form>

          
          {loading && (
            <div className="custom-loading-container active">
              <img src="/loading3.gif" width="300" alt="Loading" />
            </div>
          )}
          {showResults && (
            <div className='flex flex-col items-center mt-4'>
              <div className='w-full bg-[#05050585] p-5 text-[#efb961] rounded-lg text-m'>
                <h2 className="text-center mb-3">Results:</h2>
                <div dangerouslySetInnerHTML={{ __html: result }}></div>
                {rating && (
                  <div className="flex justify-center items-center mt-4">
                    <img src={`/rating${getMergedRating(rating)}.png`} alt={`Rating ${getMergedRating(rating)}`} width="600" className="mt-5" />
                  </div>
                )}
              </div>
            </div>
          )}
          {!loading && error && <div className="text-red-500 mt-10 lg:text-3xl md:text-2xl text-base font-bold text-center">{error}</div>}
        </div>
      </div>
      <footer className='bg-[#05050585] p-4 lg:text-xl md:text-lg text-sm text-center'>

        <hr className="border-t-2 border-[#efb961] mb-3 mx-auto " />
        <div className='flex justify-between lg:flex-row md:flex-row flex-col text-[#efb961] px-5 gap-3'>
          <span>&copy; All rights reserved by safeEat</span>
          <span>Made With ♥ by <span className='font-bold'>Shehzan sheikh</span></span>
        </div>

        <hr className="border-t-2 border-[#efb961] my-2  mx-auto" />

        <div className='flex flex-col  justify-center items-center  gap-3'>
          <p className="text-[#efb961] font-bold lg:mb-0">Follow Me:</p>
          <div className='flex justify-center items-center gap-5 lg:gap-8 pb-4'>
            <a href='https://github.com/shehzansk'  target='_blank'><img src="./github.svg" width="30" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /></a>
            <a href='https://www.linkedin.com/in/shehzansheikh/' target='_blank'><img src="./linkedin.svg" width="30" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /></a>
            <a href='mailto:shehzansheikh0@gmail.com' target='_blank'><img src="./mail.svg" width="30" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /></a>
          </div>
        </div>
        <hr className="border-t-2 border-[#efb961] mx-auto " />

      </footer>




    </div>
  );
}

export default Index;
