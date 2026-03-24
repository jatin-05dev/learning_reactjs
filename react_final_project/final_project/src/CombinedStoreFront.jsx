 import React, { useState } from 'react';
import { motion } from "framer-motion";

// IMAGES
const images1 = [
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800',
  'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=800',
  'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800',
  'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800',
  'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800'
];

const images2 = [
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800',
  'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800',
  'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800',
  'https://images.unsplash.com/photo-1589310243389-96a5483213f?q=80&w=800',
  'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800'
];

const images3 = [
  'https://images.unsplash.com/photo-1520974735194-55a7f9b9c1c5?q=80&w=800',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800',
  'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=800',
  'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
  'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=800'
];

const categories = [
  'BEST SELLERS',
  'ALL STYLES',
  'SALE',
  'BLAZERS',
  'SHIRTS',
  'CARGOS'
];

// 🔥 CARD WITH TEXT ANIMATION
const CategoryCard = ({ name, img }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex-[0_0_170px] md:flex-[0_0_230px] relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer shadow-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      {/* IMAGE */}
      <motion.img
        src={img}
        className="w-full h-full object-cover"
        animate={{
          scale: hover ? 1.15 : 1,
          filter: hover ? "brightness(0.7)" : "brightness(1)"
        }}
        transition={{ duration: 0.4 }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">

        {/* 🔥 TEXT LETTER ANIMATION */}
        <div className="flex gap-[2px]">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              className="text-white text-xs font-semibold uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: hover ? -10 : 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="mt-3 text-[10px] px-4 py-2 border border-white text-white hover:bg-white hover:text-black"
        >
          SHOP NOW
        </motion.button>

      </div>

    </motion.div>
  );
};

// 🔥 SECTION
const CategorySection = ({ title, images }) => {
  return (
    <section className="py-14 px-4 md:px-12">

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-serif tracking-[0.3em] uppercase">
          {title}
        </h2>
        <div className="w-16 h-[2px] bg-gray-300 mx-auto mt-3"></div>
      </motion.div>

      <div className="flex gap-5 overflow-x-auto no-scrollbar">
        {categories.map((name, i) => (
          <CategoryCard key={i} name={name} img={images[i]} />
        ))}
      </div>

    </section>
  );
};

// 🔥 MAIN
const CombinedStoreFront = () => {
  return (
    <div>

      <CategorySection title="Trending Categories" images={images1} />
      <CategorySection title="Shop By Style" images={images2} />
      <CategorySection title="Recommended For You" images={images3} />

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

    </div>
  );
};

export default CombinedStoreFront;