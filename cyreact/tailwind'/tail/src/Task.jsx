 import React from "react";

export default function Task() {
  return (
    <section className="w-full bg-[#f6e7d2]">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-20 px-6">
        
        {/* LEFT TEXT SECTION */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold leading-snug">
            SMART AND <br /> TRENDY
          </h1>

          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio fugit molestias harum soluta enim ratione natus
            recusandae facere ut corrupti.
          </p>

          <button className="mt-6 bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-600 transition-all">
            Shop Now →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-shrink-0">
          <img
            src="/chair.png"
            alt="Chair"
            className="w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

