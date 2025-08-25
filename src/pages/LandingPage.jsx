import React, { useState } from 'react';
import landing from '../assets/landing.png';
import { APP_FEATURES } from '../utils/data';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className='w-full min-h-screen bg-[#FFFEF7]'>
        <div className='container mx-auto px-6 pt-6 pb-8 relative z-10'>
          {/* Header */}
          <header className='flex justify-between items-center mb-20'>
            <div className='text-xl text-black font-bold'>
              Career Tracker
            </div>
            <button 
              className='px-6 py-2.5 rounded-full text-sm font-medium text-white bg-[#FF7A00] hover:bg-[#E66A00] transition-all duration-300'
              onClick={() => navigate('/login')}
            >
              Login / Sign Up
            </button>
          </header>

          {/* Hero Content */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
            {/* Left Column */}
            <div className=''>
              {/* AI Powered Badge */}
              <div className='inline-block mb-8'>
                <div className='px-4 py-2 bg-orange-50 rounded-full border border-orange-200 flex items-center gap-2'>
                  <span className='text-orange-600'>🚀</span>
                  <span className='text-sm font-medium text-orange-700'>
                    Your Career Journey Starts Here
                  </span>
                </div>
              </div>
              
              {/* Main Heading */}
              <h1 className='text-5xl lg:text-6xl font-bold text-black leading-tight mb-0'>
                Ace Your <br />
                <span className='text-[#FF9500]'>
                  Post-Placement
                </span>{" "}
                Journey
              </h1>
            </div>
            
            {/* Right Column */}
            <div className='pt-30'>
              <p className='text-lg text-gray-700 leading-relaxed mb-15 max-w-lg'>
                Seamlessly connect students, companies, and NGOs with our platform. 
                From student profiles to company insights and NGO dashboards — 
                manage, track, and collaborate with ease.
              </p>
              
              <button 
                className='px-8 py-3 bg-black text-white rounded-full font-medium text-base hover:bg-gray-800 transition-colors duration-300'
                onClick={() => navigate('/dashboard')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="w-full bg-[#FFFEF7] relative z-10 py-8 -mt-65">
        <div className="container mx-auto px-6">
          <section className="flex items-center justify-center">
            <img
              src={landing}
              alt="Career Tracker Dashboard"
              className="w-[80vw] max-w-6xl rounded-lg shadow-2xl"
            />
          </section>
        </div>
      </div>

      {/* Features Section */}
      <div className='w-full bg-[#FFFEF7] py-20'>
        <div className='container mx-auto px-4'>
          <section className='mt-5'>
            <h2 className='text-4xl font-bold text-center mb-16 text-black'>
              Features That Make You Shine
            </h2>
            <div className='flex flex-col items-center gap-8'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl'>
                {APP_FEATURES.slice(0, 3).map((feature) => (
                  <div
                    key={feature.id}
                    className='bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'
                  >
                    <h3 className='text-lg font-semibold mb-4 text-black'>{feature.title}</h3>
                    <p className='text-base text-gray-600 leading-relaxed'>{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl'>
                {APP_FEATURES.slice(3).map((feature) => (
                  <div
                    key={feature.id}
                    className='bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'
                  >
                    <h3 className='text-lg font-semibold mb-4 text-black'>{feature.title}</h3>
                    <p className='text-base text-gray-600 leading-relaxed'>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className='text-center py-8 text-gray-500'>
        Made with ❤️ by Career Tracker Team
      </div>
    </>
  );
};

export default LandingPage;