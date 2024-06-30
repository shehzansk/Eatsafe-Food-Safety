"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Footer from './Footer';
import "../app/pages.css";
import "../app/globals.css";

const Index = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

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
        <NavBar />
        <MainContent />
        <Footer />
      </div>
    </>
  );
};

export default Index;
