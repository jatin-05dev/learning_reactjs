 import React from 'react';
import { ChevronDown, Heart } from 'lucide-react';

const NewArrivalsPage = () => {

  const categories = [
    "Belts", "Casual Blazers", "Casual Shirts",
    "Casual Shoes", "Casual Trousers", "Crew Neck T-Shirts"
  ];
  
  const filterGroups = [
    ["All Discount", "Category", "Subbrand", "Occasion", "Sizes", "Price"],
    ["Color", "Fit", "Sleeves", "Pattern", "Neck", "Cuffs", "FrontOpening"],
    ["SuitFront", "Wash", "Hood", "UpperMaterial", "ShoeType"],
  ];

  const productImages = [
    "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800",
    "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=800",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800",
    "https://images.unsplash.com/photo-1520974735194-55a7f9b9c1c5?q=80&w=800",
    "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=800",
    "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800"
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 py-4 text-xs text-gray-500">
        Louis Philippe &gt; <span className="text-black"> New In</span>
      </nav>

      {/* Header */}
      <header className="text-center py-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif mb-6 tracking-wide">
          New Arrivals
        </h1>

        <p className="text-sm uppercase tracking-widest mb-4">
          Select Your Category
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <hr className="border-gray-100 mt-4" />

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-start">

          <div className="space-y-4 flex-1">
            {filterGroups.map((group, idx) => (
              <div key={idx} className="flex flex-wrap gap-8">
                {group.map((filter) => (
                  <div key={filter} className="flex items-center cursor-pointer group">
                    <span className="text-sm text-gray-600 group-hover:text-black">
                      {filter}
                    </span>
                    <ChevronDown size={16} className="ml-2 text-gray-400" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center border-b border-black pb-1 cursor-pointer">
            <span className="text-sm">
              Sort By: <strong>Popular</strong>
            </span>
            <ChevronDown size={16} className="ml-2" />
          </div>

        </div>

        {/* Delivery */}
        <div className="flex justify-between mt-10 items-end">
          <div className="text-xs">
            <button className="underline font-bold block mb-1">
              Add delivery location
            </button>
            <p className="text-gray-500">
              to see express delivery options
            </p>
          </div>

          <p className="text-sm text-gray-500 italic">
            {productImages.length} Items found
          </p>
        </div>
      </div>

      {/* 🔥 PRODUCT GRID (CENTERED) */}
      <div className="max-w-7xl mx-auto px-4 mt-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {productImages.map((img, i) => (
            <div key={i} className="group cursor-pointer">

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">

                <img
                  src={img}
                  alt="product"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* ❤️ Heart */}
                <Heart
                  size={20}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500 hover:fill-red-500 transition cursor-pointer"
                />

              </div>

              {/* Product Info */}
              <div className="mt-3 text-center">
                <p className="text-sm font-medium">Casual Shirt</p>
                <p className="text-xs text-gray-500">Louis Philippe</p>
                <p className="text-sm font-semibold mt-1">₹1,499</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default NewArrivalsPage;