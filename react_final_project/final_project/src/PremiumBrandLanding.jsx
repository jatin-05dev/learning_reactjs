import React from 'react';

const PremiumBrandLanding = () => {
  return (
    <div className="bg-white font-serif">
      
      {/* 1. HERO CAROUSEL SECTION (Image 1 & 2 Style) */}
      <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
        {/* Background Image (Wedding Collection Style) */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550009158-9ebf69173e03')] bg-cover bg-center opacity-90"></div>
        
        <div className="relative z-10 text-center text-[#B39359]"> {/* Golden/Brownish color from Image 2 */}
          <div className="flex justify-center mb-4">
            <span className="text-3xl">👑</span>
          </div>
          <h3 className="tracking-[0.5em] text-sm mb-4 uppercase">Louis Philippe</h3>
          <h1 className="text-5xl md:text-7xl tracking-widest font-light mb-4 uppercase">
            Royal Masquerade
          </h1>
          <p className="tracking-[0.3em] text-xs mb-10 uppercase italic">
            Royal Luxury Wedding Collection
          </p>
          <button className="px-12 py-3 border border-[#B39359] text-[#B39359] hover:bg-[#B39359] hover:text-white transition-all duration-500 tracking-[0.2em] text-xs uppercase">
            Shop Now
          </button>
        </div>
      </section>

      {/* 2. SIGNATURE LOOK SECTION (Image 3 & 4 Style) */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h4 className="italic text-3xl font-light text-gray-700 mb-2">the signature</h4>
        <h2 className="text-5xl tracking-widest uppercase mb-10">Cocktail Look</h2>
        
        <p className="max-w-3xl mx-auto text-gray-500 leading-relaxed tracking-wide text-sm mb-16">
          Exude commanding style and sophistication in this black velvet slim-fit two-piece suit, 
          crafted from superior quality polyester and elevated by a rich embellished pattern.
        </p>

        {/* Product Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35" alt="Detail" className="w-full h-[400px] object-cover" />
          <img src="https://images.unsplash.com/photo-1598808503744-44d888d3d93b" alt="Model" className="w-full h-[500px] object-cover -mt-10" />
          <img src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0" alt="Bowtie" className="w-full h-[400px] object-cover" />
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf" alt="Full Look" className="w-full h-[500px] object-cover -mt-10" />
        </div>

        <button className="px-12 py-4 bg-[#B39359] text-white tracking-[0.2em] text-xs uppercase hover:bg-black transition-all">
          Shop The Look
        </button>
      </section>

      {/* 3. TRUST BADGES (Bottom of Image 4) */}
      <div className="border-t border-gray-100 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-[10px] tracking-[0.2em] uppercase text-gray-400 text-center">
          <div className="flex flex-col items-center gap-2">
            <span>📦</span> FREE SHIPPING
          </div>
          <div className="flex flex-col items-center gap-2 border-x border-gray-100">
            <span>🔄</span> RETURN WITHIN 15 DAYS
          </div>
          <div className="flex flex-col items-center gap-2">
            <span>🚚</span> EXPRESS DELIVERY IN STORE MODE
          </div>
        </div>
      </div>

    </div>
  );
};

export default PremiumBrandLanding;