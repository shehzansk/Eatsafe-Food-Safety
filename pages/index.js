// pages/index.js
"use client";
import React, { useState } from 'react';
import axios from 'axios';

const Index = () => {
  const [foodName, setFoodName] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const checkFoodSafety = async (e) => {
    e.preventDefault();
    setResult('');
    setError('');

    try {
      const response = await axios.post('/api/checkFood', { foodName });
      const { text, rating } = response.data;

      setResult(text);
      console.log('Rating:', rating); // Log rating for verification

    } catch (err) {
      console.error('Error checking food safety:', err);
      setError('Error checking food safety.');
    }
  };

  return (
    <div className="App">
      <h1>Check Food Safety</h1>
      <form onSubmit={checkFoodSafety}>
        <label htmlFor="foodName">Food Name:</label>
        <input
          type="text"
          id="foodName"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          required
        />
        <button type="submit">Check</button>
      </form>
      {result && (
        <div>
        <h2>Results:</h2>
        <div dangerouslySetInnerHTML={{ __html: result }}></div>
      </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}

export default Index;
