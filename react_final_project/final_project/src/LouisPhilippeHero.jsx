 import React from 'react';

const LouisPhilippeHero = () => {
  return (
    <div className="w-full">

      <div className="relative w-full h-[550px] bg-[#C5A044] overflow-hidden flex items-center">

        <div className="absolute left-[-80px] top-0 h-full w-1/2 flex items-center">
          
          <div className="grid grid-cols-2 gap-5 rotate-[-12deg] scale-110">

            <div className="w-52 h-64 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="w-52 h-72 rounded-xl overflow-hidden shadow-2xl translate-y-[-20px]">
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="w-52 h-72 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="w-52 h-64 rounded-xl overflow-hidden shadow-2xl translate-y-[-30px]">
              <img 
                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

          </div>
        </div>

        <div className="ml-auto w-1/2 pr-16 z-10">

          <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
            Explore our wide range <br /> of products
          </h2>

          <p className="text-gray-800 mb-6 text-lg">
            Premium fashion curated for modern lifestyle
          </p>

          <button className="bg-black text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition shadow-lg">
            Shop now
          </button>

        </div>

      </div>

      <div className="text-center py-16 px-6 md:px-20 max-w-4xl mx-auto">

        <h3 className="text-3xl font-serif mb-5 tracking-wide">
          Products
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Louis Philippe is a name that signifies class, elegance and status.
          We craft premium menswear that blends timeless design with modern style.
          Discover collections that define confidence and sophistication.
        </p>

      </div>

    </div>
  );
};

export default LouisPhilippeHero;