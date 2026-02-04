function Hero() {
  return (
    <>
      <section>
        <h1 className="text-center font-bold text-4xl">Our Menu</h1>
      </section>

      <br />
      <br />

      <div className="flex gap-3 justify-center mt-4">
        <button className=" border border-gray-400 text-gray-700 px-5 py-2 text-lg rounded-4xl  hover:border-red-500 hover:text-red-500 transition-colors duration-300">
          BURGERS
        </button>
        <button className=" border border-gray-400 text-gray-700 px-5 py-2 text-lg rounded-4xl  hover:border-red-500 hover:text-red-500 transition-colors duration-300">
          PIZZA
        </button>
        <button className=" border border-gray-400 text-gray-700 px-5 py-2 text-lg rounded-4xl  hover:border-red-500 hover:text-red-500 transition-colors duration-300">
          FRIES
        </button>
        <button className=" border border-gray-400 text-gray-700 px-5 py-2 text-lg rounded-4xl  hover:border-red-500 hover:text-red-500 transition-colors duration-300">
          PAPADS
        </button>
        <button className=" border border-gray-400 text-gray-700 px-5 py-2 text-lg rounded-4xl  hover:border-red-500 hover:text-red-500 transition-colors duration-300">
          DRINKS
        </button>
        <button className=" border border-gray-400 text-gray-700 px-5 py-2 text-lg rounded-4xl  hover:border-red-500 hover:text-red-500 transition-colors duration-300">
          Beers
        </button>
      </div>
      <div className="flex justify-center items-center gap-25 mt-30">
        <div className="bg-[url('i1.jpg')] bg-cover bg-center h-40 w-40"><p className="mt-45  text-2xl font-bold">chiken Burger <br /> <p className="mt- ml-2 text-red-400">$ 25.00</p> </p></div>
        <div className="bg-[url('i2.jpg')] bg-cover bg-center h-40 w-40"><p className="mt-45  text-2xl font-bold"> Burger <br /> <p className="mt- ml-2 text-red-400">$ 10.00</p> </p></div>
        
        <div className="bg-[url('i4.jpg')] bg-cover bg-center h-40 w-40 "><p className="mt-45  text-2xl font-bold"> veg Burger <br /> <p className="mt- ml-2 text-red-400">$ 15.00 </p> </p> <br />&nbsp;&nbsp; hello the burger world&nbsp;  are the munch &nbsp; of thr gtr and nikj  <br /> <br />   <button className=" border border-gray-400 text-gray-700 px-5 py-2 text-lg rounded-4xl bg-red-400  hover:border-red-500 hover:text-white transition-colors duration-300">
          BURGERS
        </button>  </div>
        
        <div className="bg-[url('i3.jpg')] bg-cover bg-center h-40 w-40"><p className="mt-45  text-2xl font-bold"> french Burger <br /> <p className="mt- ml-2 text-red-400">$ 85.00</p> </p></div>
        <div className="bg-[url('i9.jpg')] bg-cover bg-center h-40 w-40"><p className="mt-45  text-2xl font-bold"> Burger <br /> <p className="mt- ml-2 text-red-400">$ 45.00</p> </p></div>

      </div>
    </>
  );
}

export default Hero;
