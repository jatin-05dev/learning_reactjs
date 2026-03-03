import React from 'react';
import { Heart, RotateCw } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: "pink-shirt-url", // Replace with real image
      tag: "JUST IN",
      category: "CASUAL SHIRTS",
      title: "Men Pink Solid Half Sleeves Casua...",
      price: "2,625",
      color: "Pink",
      colorHex: "#f472b6",
      sizes: [38, 39, 40, 42, 44, 46],
      outOfStockSizes: [38, 46]
    },
    {
      id: 2,
      image: "shoes-url",
      category: "CASUAL SHOES",
      title: "Men Brown Lace Up Shoes",
      price: "5,999",
      color: "Brown",
      colorHex: "#78350f"
    },
    {
      id: 3,
      image: "brown-stripe-url",
      category: "CASUAL SHIRTS",
      title: "Men Brown Stripe Half Sleeves Ca...",
      price: "2,625",
      color: "Brown",
      colorHex: "#713f12"
    },
    {
      id: 4,
      image: "navy-stripe-url",
      category: "CASUAL SHIRTS",
      title: "Men Navy Stripe Half Sleeves Cas...",
      price: "2,625",
      color: "Navy",
      colorHex: "#1e3a8a"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white">
      {products.map((product) => (
        <div key={product.id} className="group cursor-pointer">
          {/* Image Container */}
          <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-3">
            {/* Just In Tag */}
            {product.tag && (
              <span className="absolute top-0 left-0 bg-black text-white text-[10px] font-bold px-2 py-1 z-10">
                {product.tag}
              </span>
            )}
            
            {/* Wishlist Icon */}
            <button className="absolute top-3 right-3 z-10">
              <Heart size={20} className="text-gray-600 hover:fill-red-500 hover:text-red-500 transition-colors" />
            </button>

            {/* Product Image (Placeholder) */}
            <div className="w-full h-full bg-[#E5E5E5] flex items-center justify-center text-gray-400">
               {/* <img src={product.image} alt={product.title} className="object-cover w-full h-full" /> */}
               Image Here
            </div>

            {/* Size Overlay (Only for Shirts/Items with sizes) */}
            {product.sizes && (
              <div className="absolute bottom-0 left-0 w-full bg-white/90 py-3 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {product.sizes.map((size) => (
                  <span 
                    key={size} 
                    className={`text-xs ${product.outOfStockSizes?.includes(size) ? 'text-gray-300 line-through' : 'text-gray-800'}`}
                  >
                    {size}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-1">
            <div className="flex justify-between items-start">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">{product.category}</p>
              <RotateCw size={14} className="text-gray-400" />
            </div>
            <h3 className="text-sm text-gray-800 font-medium truncate">{product.title}</h3>
            <p className="text-sm font-bold">₹ {product.price}</p>
            
            {/* Color Dot */}
            <div className="flex items-center gap-2 mt-2">
              <span 
                className="w-3 h-3 rounded-full border border-gray-200" 
                style={{ backgroundColor: product.colorHex }}
              ></span>
              <span className="text-[11px] text-gray-500">{product.color}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;