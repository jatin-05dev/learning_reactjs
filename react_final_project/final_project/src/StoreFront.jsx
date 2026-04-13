import React from 'react';
import { useNavigate } from 'react-router-dom';

const StoreFront = () => {

 let navigate=useNavigate()

 function cha(){
    navigate("/Sign")

 }
  return (
    <div className="w-full bg-white font-sans text-gray-900">
      
     
      <section className="bg-gray-900 text-white py-12 px-6 flex flex-wrap justify-around text-center gap-8">
        <div className="flex flex-col items-center max-w-[200px]">
          <div className="mb-4 text-3xl">📦</div>
          <p className="text-[11px] tracking-widest uppercase leading-relaxed">Free shipping on every order</p>
        </div>
        <div className="flex flex-col items-center max-w-[200px]">
          <div className="mb-4 text-3xl">🎁</div>
          <p className="text-[11px] tracking-widest uppercase leading-relaxed">Get special offers on your first app order</p>
        </div>
        <div className="flex flex-col items-center max-w-[200px]">
          <div className="mb-4 text-3xl">🧵</div>
          <p className="text-[11px] tracking-widest uppercase leading-relaxed">Free alteration for all purchased garments</p>
        </div>
      </section>


<br /><br />
<br /><br />
      <section className="bg-[#222] py-6 px-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex items-center gap-4 text-white">
          <div className="text-yellow-500 text-3xl">🎁</div>
          <div className="text-left">
            <h4 className="text-xs font-bold tracking-widest uppercase">Refer & Earn with the referral program</h4>
            <p className="text-[10px] text-gray-400">Invite your friends and earn up to ₹ 7500 in discounts.</p>
          </div>
        </div>
        <button onClick={cha} className="bg-white text-black text-[10px] font-bold px-8 py-3 tracking-widest uppercase hover:bg-gray-200">
          Sign Up Now
        </button>
      </section>
<br />
<br />
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default StoreFront;