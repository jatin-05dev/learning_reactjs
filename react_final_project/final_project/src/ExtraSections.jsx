import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExtraSections = () => {
  const categories = [
    { name: "Formal Shirts", image: "https://via.placeholder.com/200x300" },
    { name: "Casual Shirts", image: "https://via.placeholder.com/200x300" },
    { name: "Ceremonial Shirts", image: "https://via.placeholder.com/200x300" },
    { name: "Suits & Blazers", image: "https://via.placeholder.com/200x300" },
    { name: "Winterwear", image: "https://via.placeholder.com/200x300" },
    { name: "T-Shirts", image: "https://via.placeholder.com/200x300" },
  ];

  return (
    <div className="w-full bg-white">
      {/* --- Category Slider --- */}
      <div className="relative px-10 py-10 group">
        <div className="flex gap-4 overflow-hidden">
          {categories.map((cat, index) => (
            <div key={index} className="relative min-w-[180px] aspect-[3/4] cursor-pointer">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-[11px] font-bold uppercase tracking-tight">
                  {cat.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>

      {/* --- Monogrammed Shirts Banner --- */}
      <div className="relative w-full h-[450px] bg-[#6B6560] flex items-center overflow-hidden">
        {/* Background Image (Cuff & Watch focus) */}
        <div className="absolute inset-0 grayscale-[20%] brightness-75">
          <img 
            src="https://via.placeholder.com/1200x450" 
            alt="Monogrammed Shirt Detail" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 w-full flex flex-col items-end px-20 text-white text-right">
          <h2 className="text-6xl font-serif italic mb-2 tracking-wide">
            UNIQUELY <br /> 
            <span className="not-italic font-light tracking-[0.2em] ml-10">Yours</span>
          </h2>
          <p className="text-lg tracking-[0.3em] uppercase mb-8 mt-4 font-light">
            Monogrammed Shirts
          </p>
          <button className="border border-white px-10 py-2 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtraSections;