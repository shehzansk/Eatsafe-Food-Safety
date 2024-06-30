"use client";
import React, { useState } from 'react';
import axios from 'axios';
import "../app/pages.css";
import "../app/globals.css";

const MainContent = () => {
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
    } finally {
      setLoading(false);
      setRatingImg(false);
    }
  };

  return (
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
            className="w-5/12 mt-3 text-xs md:text-sm lg:text-lg bg-[#388E3C] rounded-md border border-[#cb714e] hover:bg-[#388E3C] text-[#efb961] font-bold py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
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
            <img src="/loading.gif" width="300" alt="Loading" />
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
                    width="500"
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
  );
};

export default MainContent;
