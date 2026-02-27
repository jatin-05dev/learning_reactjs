import React from 'react'; 
import './App.css'
function Header (){
  return (
    <div className="w-full font-sans">
    
      <div className="bg-black text-white text-[10px] px-4 py-2 flex justify-between items-center tracking-tight">
        <div className="flex items-center gap-6">
          <div className="cursor-pointer border-r border-gray-700 pr-4">MORE BRANDS ▾</div>
          <div className="flex flex-col text-[9px] leading-tight">
            <span className="text-gray-400">Delivering to</span>
            <span className="font-bold underline cursor-pointer">Add delivery location</span>
          </div>
        </div>

        <div className="flex items-center gap-5 uppercase font-medium">
          <span className="cursor-pointer">📍 STORES</span>
          <span className="text-gray-700">|</span>
          <span className="cursor-pointer">ⓘ CONTACT US</span>
          <span className="text-gray-700">|</span>
          <span className="cursor-pointer">👤 LOG IN</span>
          <span className="text-gray-700">|</span>
          <span className="text-lg cursor-pointer">♡</span>
          <span className="text-lg cursor-pointer">👜</span>
        </div>
      </div>
 
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
    
        <div className="flex items-center gap-2">
          <span className="text-xl">👑</span>
          <span className="text-xl font-bold tracking-[0.2em]">LOUIS PHILIPPE</span>
        </div>

       
        <nav className="flex gap-6 text-[12px] font-bold uppercase text-gray-800">
          <a href="#" className="hover:text-black">New In</a>
          <a href="#" className="text-red-700">Sale</a>
          <a href="#" className="hover:text-black">Products</a>
          <a href="#" className="hover:text-black">Monogram</a>
          <a href="#" className="hover:text-black">Collections</a>
          <a href="#" className="hover:text-black">Wedding</a>
          <a href="#" className="hover:text-black">Gift Card</a>
        </nav>

    
        <div className="flex items-center gap-4">
          <div className="border-b border-black flex items-center pb-1 w-48">
            <span className="text-gray-400 mr-2">🔍</span>
            <input 
              type="text" 
              placeholder="Search Cargos" 
              className="outline-none text-xs w-full bg-transparent"
            />
          </div>
    
          <div className="text-[8px] font-bold text-center leading-none text-red-800 border-l pl-4">
            <div className="bg-orange-500 h-4 w-6 mb-1 mx-auto"></div>
            ADITYA BIRLA<br/>FASHION
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header