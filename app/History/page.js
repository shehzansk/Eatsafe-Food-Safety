"use client";
import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import "../pages.css";
import "../globals.css";

const History = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const storedChats = Object.entries(localStorage)
      .filter(([key, value]) => typeof value === 'string' && key !== 'loglevel:webpack-dev-server' && key !== "ally-supports-cache")
      .map(([key, value]) => ({ foodName: key, text: value }));

    setChatHistory(storedChats);
  }, []);

  const deleteChat = (foodName) => {
    localStorage.removeItem(foodName);
    setChatHistory((prevChatHistory) => prevChatHistory.filter(chat => chat.foodName !== foodName));
  };

  return (
    <>
      <NavBar />

      <div className='flex justify-center items-center mt-auto mb-auto font-montserrat'>
        <div className="w-[80%] lg:w-[60%] bg-[#05050585] p-6 text-[#efb961] rounded-lg text-sm lg:text-base lg:mt-2 mt-8  mb-8 lg:mb:0">
          <h1 className="text-3xl font-bold my-5 text-center">Chat History</h1>
          <hr className="border-t-2 border-[#efb961] mx-auto" />

          {chatHistory.length === 0 ? (
            <p className="text-lg pt-2">No chat history available.</p>
          ) : (
            <div>
              {chatHistory.map((chat, index) => (
                <div key={index} className="my-4 ">
                  <div className='flex items-center justify-between lg:mt-12'>
                    <h2 className="text-base md:text-xl lg:text-2xl  font-semibold bg-[#05050585] p-3 w-fit rounded-lg">Searched Item: {chat.foodName}</h2>
                    <button onClick={() => deleteChat(chat.foodName)}>
                      <img src='./delete.png' alt="delete" className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 lg:mr-10' />
                    </button>
                  </div>
                  <p className="mt-2 bg-[#05050585] rounded-lg p-5" dangerouslySetInnerHTML={{ __html: chat.text }}></p>

                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default History;
