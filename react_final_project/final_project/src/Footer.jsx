import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white py-12 px-10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
    
        <div>
          <h3 className="font-bold text-[14px] mb-5 tracking-wider uppercase">NEED HELP?</h3>
          <ul className="text-[13px] text-gray-300 leading-[2.2]">
            <li className="hover:text-white cursor-pointer">Order Status</li>
            <li className="hover:text-white cursor-pointer">Delivery</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Return And Cancellation Policy</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

   
        <div>
          <h3 className="font-bold text-[14px] mb-5 tracking-wider uppercase">ABOUT US</h3>
          <ul className="text-[13px] text-gray-300 leading-[2.2]">
            <li className="hover:text-white cursor-pointer">Aditya Birla Lifestyle Brands Ltd</li>
            <li className="hover:text-white cursor-pointer">Find A Store</li>
            <li className="hover:text-white cursor-pointer">Terms And Conditions For Membership Program</li>
            <li className="hover:text-white cursor-pointer">Bulk Order</li>
          </ul>
        </div>
 
        <div>
          <h3 className="font-bold text-[14px] mb-5 tracking-wider uppercase">Join The Louis Philippe Community</h3>
          
    
          <div className="flex items-center border-b border-gray-600 pb-2 mb-4">
            <input 
              type="text" 
              placeholder="Enter your e-mail / mobile number" 
              className="bg-transparent w-full text-[13px] outline-none placeholder-gray-500 italic"
            />
            <span className="text-gray-400 cursor-pointer text-xl">→</span>
          </div>
          
          <p className="text-[12px] text-gray-400 mb-8">
            Sign up for updates on the latest Louis Philippe collection, campaigns and videos.
          </p>

   
          <div className="flex items-center gap-5">
            <span className="font-bold text-[12px] uppercase">Find Us On Social</span>
            <div className="flex gap-4 text-lg">
              <span className="cursor-pointer hover:text-gray-400">f</span>
              <span className="cursor-pointer hover:text-gray-400 font-serif italic">X</span>
              <span className="cursor-pointer hover:text-gray-400"></span>
              <span className="cursor-pointer hover:text-gray-400"></span>
              <span className="cursor-pointer hover:text-gray-400 underline">in</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;