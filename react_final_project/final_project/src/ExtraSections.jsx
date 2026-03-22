 import React from 'react';

const ExtraSections = () => {

  const categories = [
    { name: "Formal Shirts", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800" },
    { name: "Casual Shirts", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800" },
    { name: "Ceremonial Shirts", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800" },
    { name: "Suits & Blazers", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800" },
    { name: "Winterwear", image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800" },
    { name: "T-Shirts", image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800" },
  ];

  return (
    <div className="w-full bg-white">

      {/* 🔥 CATEGORY SLIDER */}
      <div className="px-10 py-12">

        <h2 className="text-2xl font-serif mb-6 text-center tracking-wide">
          Shop By Category
        </h2>

        <div className="flex gap-5 overflow-x-auto no-scrollbar">

          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="relative min-w-[200px] aspect-[3/4] cursor-pointer rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition"
            >

              {/* Image */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-4">

                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  {cat.name}
                </span>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 🔥 MONOGRAM BANNER */}
      <div className="relative w-full h-[500px] flex items-center overflow-hidden">

        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1200"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-end px-16 text-white text-right">

          <h2 className="text-5xl md:text-6xl font-serif italic leading-tight">
            UNIQUELY <br />
            <span className="not-italic font-light tracking-[0.3em] ml-10">
              Yours
            </span>
          </h2>

          <p className="text-sm tracking-[0.4em] uppercase mt-4 mb-8">
            Monogrammed Shirts
          </p>

          <button className="border border-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition">
            Shop Now
          </button>

        </div>
      </div>
<br /><br />
      {/* 🔥 SCROLLBAR HIDE */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ExtraSections;