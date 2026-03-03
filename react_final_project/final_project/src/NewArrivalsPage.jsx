import React, { useState } from 'react';
import { ChevronDown, Heart } from 'lucide-react';

const NewArrivalsPage = () => {
  const categories = ["Belts", "Casual Blazers", "Casual Shirts", "Casual Shoes", "Casual Trousers", "Crew Neck T-Shirts"];
  
  const filterGroups = [
    ["All Discount", "Category", "Subbrand", "Occasion", "Sizes", "Price"],
    ["Color", "Fit", "Sleeves", "Pattern", "Neck", "Cuffs", "FrontOpening"],
    ["SuitFront", "Wash", "Hood", "UpperMaterial", "ShoeType"],
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {/* Breadcrumb */}
      <nav className="px-8 py-4 text-xs text-gray-500">
        Louis Philippe &nbsp; &gt; &nbsp; <span className="text-black">New In</span>
      </nav>

      {/* Header Section */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-serif mb-6 tracking-wide">New Arrivals</h1>
        <p className="text-sm uppercase tracking-widest mb-4">Select Your Category</p>
        
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 px-4">
          {categories.map((cat) => (
            <button key={cat} className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-all">
              {cat}
            </button>
          ))}
        </div>
      </header>

      <hr className="border-gray-100 mt-8" />

      {/* Filters Section */}
      <div className="px-8 py-6">
        <div className="flex justify-between items-start">
          <div className="space-y-4 flex-1">
            {filterGroups.map((group, idx) => (
              <div key={idx} className="flex flex-wrap gap-8">
                {group.map((filter) => (
                  <div key={filter} className="flex items-center cursor-pointer group">
                    <span className="text-sm text-gray-600 group-hover:text-black">{filter}</span>
                    <ChevronDown size={16} className="ml-2 text-gray-400" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Sort By */}
          <div className="flex items-center border-b border-black pb-1 cursor-pointer">
            <span className="text-sm">Sort By: <strong>Popular</strong></span>
            <ChevronDown size={16} className="ml-2" />
          </div>
        </div>

        {/* Delivery & Count */}
        <div className="flex justify-between mt-10 items-end">
          <div className="text-xs">
            <button className="underline font-bold block mb-1">Add delivery location</button>
            <p className="text-gray-500">to see express delivery options</p>
          </div>
          <p className="text-sm text-gray-500 font-light italic">706 Items found</p>
        </div>
      </div>

      {/* Product Grid Placeholder */}
      <div className="grid grid-cols-4 gap-4 px-8 mt-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative group cursor-pointer">
            <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                {/* Image placeholder */}
                <div className="w-full h-full bg-[#D3D3D3] flex items-end justify-center">
                    <Heart size={20} className="absolute top-4 right-4 text-gray-600 cursor-pointer hover:fill-red-500 hover:text-red-500 transition-colors" />
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsPage;