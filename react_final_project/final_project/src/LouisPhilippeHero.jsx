import React from 'react';
import { Search } from 'lucide-react';

const LouisPhilippeHero = () => {
  return (
    <div className="w-full">
       
      {/* 2. Hero Banner Section */}
      <div className="relative w-full h-[500px] bg-[#C5A044] overflow-hidden flex items-center">
        {/* Abstract Grid Background (Left Side) */}
        <div className="absolute left-[-50px] top-0 h-full w-1/2 flex items-center">
           {/* Isme aap images ka tilted grid bana sakte hain CSS transform use karke */}
           <div className="grid grid-cols-2 gap-4 rotate-[-15deg] scale-110">
              <div className="w-48 h-48 bg-black/90 rounded-xl flex items-center justify-center border-4 border-[#B8860B]">
                <span className="text-gold-500 text-4xl">👑</span>
              </div>
              <div className="w-48 h-64 bg-gray-300 rounded-xl overflow-hidden shadow-2xl">
                <img src="https://via.placeholder.com/200x300" alt="Model" className="w-full h-full object-cover" />
              </div>
              <div className="w-48 h-64 bg-gray-300 rounded-xl overflow-hidden shadow-2xl translate-y-[-20px]">
                <img src="https://via.placeholder.com/200x300" alt="Model" className="w-full h-full object-cover" />
              </div>
              <div className="w-48 h-48 bg-black/90 rounded-xl flex items-center justify-center border-4 border-[#B8860B] translate-y-[-20px]">
                 <span className="text-gold-500 text-4xl">👑</span>
              </div>
           </div>
        </div>

        {/* Hero Content (Right Side) */}
        <div className="ml-auto w-1/2 pr-20 z-10 text-right md:text-left">
          <h2 className="text-6xl font-bold text-gray-900 leading-tight mb-8">
            Explore our wide range <br /> of products
          </h2>
          <button className="bg-black text-white px-12 py-4 rounded-lg text-2xl font-bold hover:bg-gray-900 transition-colors shadow-xl">
            Shop now
          </button>
        </div>
      </div>

      {/* 3. Footer Text Section */}
      <div className="text-center py-16 px-20 max-w-4xl mx-auto">
        <h3 className="text-2xl font-serif mb-4">Products</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          Louis Philippe is a name that signifies class, elegance and status. We, at Louis Philippe, hold precision in crafting ensembles that are classic yet contemporary; an...
        </p>
      </div>
    </div>
  );
};

export default LouisPhilippeHero;