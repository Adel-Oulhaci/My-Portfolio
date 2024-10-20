import React, { useState } from 'react';
import profile from './profile.jpg'; // Use your image path

function Hero() {

  return (
    <div >
      <section className="relative h-screen flex items-center justify-between bg-white dark:bg-gray-900">
        {/* Text Content */}
        <div className="relative z-10 w-1/2 px-12 md:px-24 text-left">
          <h1 className="text-6xl font-serif font-bold text-black dark:text-white leading-tight mb-4">
            Adel Fakhr El Islem OULHACI
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Software Engineer | Web Developer | Tech Enthusiast
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            View My Work
          </a>
        </div>

        {/* Profile Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={profile}
            alt="Adel Fakhr El Islem OULHACI"
            className="object-cover rounded-full shadow-xl border-4 border-gray-200 dark:border-gray-700"
          />
        </div>

        
      </section>
    </div>
  );
}

export default Hero;
