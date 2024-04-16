import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/cover image.jpg')`,
          filter: 'blur(2px) brightness(70%)', 
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
        <h1 className="text-4xl font-bold mb-4">Explore Work Opportunities in Japan</h1>
        <p className="text-lg text-center max-w-md">Discover exciting career prospects and job openings in Japan. Find your dream job and take the next step in your professional journey.</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
