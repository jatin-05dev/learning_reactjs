import React from 'react';

const CombinedStoreFront = () => {
  return (
    <div className="w-full bg-white font-sans">
      
 
      {/* 2. CATEGORY SLIDER SECTION (CSS Scroll) */}
      <section className="py-10 px-4 md:px-12">
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          
          {/* Category Card Template */}
          {[
            { name: 'BEST SELLERS', img: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400' },
            { name: 'ALL STYLES', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400' },
            { name: 'SALE', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400' },
            { name: 'BLAZERS', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400' },
            { name: 'SHIRTS', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400' },
            { name: 'CARGOS', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400' }
          ].map((cat, i) => (
            <div key={i} className="flex-[0_0_160px] md:flex-[0_0_210px] relative aspect-[3/4] overflow-hidden group cursor-pointer shadow-sm">
              <img 
                src={cat.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={cat.name} 
              />
              {/* Text Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4">
                <span className="text-white text-[11px] font-bold tracking-tighter uppercase">{cat.name}</span>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 3. PROMO SECTION (UNIQUELY YOURS) */}
      <section className="py-16 bg-[#f9f9f9] text-center border-t border-gray-100">
        <h2 className="text-3xl md:text-5xl font-serif tracking-widest text-gray-800 mb-4 uppercase">
            UNIQUELY YOURS
        </h2>
        <div className="w-20 h-[1px] bg-gray-300 mx-auto mb-6"></div>
        <p className="text-gray-500 text-sm tracking-widest mb-2 font-medium">Monogrammed Shirts</p>
        <p className="text-2xl font-bold tracking-tighter text-gray-900">1,500+</p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-1">Patrons and Counting</p>
      </section>

      {/* Custom CSS to hide scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />



       {/* 2. CATEGORY SLIDER SECTION (CSS Scroll) */}
      <section className="py-10 px-4 md:px-12">
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          
          {/* Category Card Template */}
          {[
            { name: 'BEST SELLERS', img: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400' },
            { name: 'ALL STYLES', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400' },
            { name: 'SALE', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400' },
            { name: 'BLAZERS', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400' },
            { name: 'SHIRTS', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400' },
            { name: 'CARGOS', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400' }
          ].map((cat, i) => (
            <div key={i} className="flex-[0_0_160px] md:flex-[0_0_210px] relative aspect-[3/4] overflow-hidden group cursor-pointer shadow-sm">
              <img 
                src={cat.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={cat.name} 
              />
              {/* Text Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4">
                <span className="text-white text-[11px] font-bold tracking-tighter uppercase">{cat.name}</span>
              </div>
            </div>
          ))}

        </div>
      </section>



 {/* 2. CATEGORY SLIDER SECTION (CSS Scroll) */}
      <section className="py-10 px-4 md:px-12">
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          
          {/* Category Card Template */}
          {[
            { name: 'BEST SELLERS', img: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400' },
            { name: 'ALL STYLES', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400' },
            { name: 'SALE', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400' },
            { name: 'BLAZERS', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400' },
            { name: 'SHIRTS', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400' },
            { name: 'CARGOS', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400' }
          ].map((cat, i) => (
            <div key={i} className="flex-[0_0_160px] md:flex-[0_0_210px] relative aspect-[3/4] overflow-hidden group cursor-pointer shadow-sm">
              <img 
                src={cat.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={cat.name} 
              />
              {/* Text Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4">
                <span className="text-white text-[11px] font-bold tracking-tighter uppercase">{cat.name}</span>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default CombinedStoreFront;