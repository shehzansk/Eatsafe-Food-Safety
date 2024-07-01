"use client";
import React, { useState } from 'react';

import NavBar from './Components/NavBar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import "./pages.css";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col font-montserrat">
        <NavBar />
        <MainContent />
        <Footer />
      </div>
    </>
  );
};
