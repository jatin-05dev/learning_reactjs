function Hero() {
    return (
        <div className="flex items-center justify-center h-screen gap-5 ">
            <div className="bg-white h-150 w-100 text-white">
                <div className="bg-[url('m1.jpg')] h-64 w-full bg-no-repeat bg-cover"></div>
                <div className="border-b-4 border-red-600 w-full"></div>

                <div className="text-black">
                    <h1 className="font-bold text-center mt-15">Mountans</h1>
                    <br />
                    <p className="text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
                        consequuntur. Praesentium porro repellat perspiciatis repud, iur
                        e nam corrupti beatae assuossimus, voluptas impedit aliquid. Error
                        corrupti placeat dignissimos laudantium facere?</p>
                </div>
                <div className="flex justify-center mt-4">
                    <button class="bg-transparent text-red-600 border border-red-600 px-4 py-2 rounded-4xl">
                        Read More
                    </button>
                </div>
            </div>
            <div className="bg-white h-150 w-100 text-white">
                <div className="bg-[url('m2.jpg')] h-64 w-full bg-no-repeat bg-cover"></div>
                <div className="border-b-4 border-red-600 w-full"></div>
                 <div className="text-black">
                    <h1 className="font-bold text-center mt-15">city</h1>
                    <br />
                    <p className="text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
                        consequuntur. Praesentium porro repellat perspiciatis repud, iur
                        e nam corrupti beatae assuossimus, voluptas impedit aliquid. Error
                        corrupti placeat dignissimos laudantium facere?</p>
                </div>
                <div className="flex justify-center mt-4">
                    <button class="bg-transparent text-red-600 border border-red-600 px-4 py-2 rounded-4xl">
                        Read More
                    </button>
                </div>
            </div>
            <div className="bg-white h-150 w-100 text-white">
                <div className="bg-[url('m4.jpg')] h-64 w-full bg-no-repeat bg-cover"></div>
                <div className="border-b-4 border-red-600 w-full"></div>
                  <div className="text-black">
                    <h1 className="font-bold text-center mt-15">coast</h1>
                    <br />
                    <p className="text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
                        consequuntur. Praesentium porro repellat perspiciatis repud, iur
                        e nam corrupti beatae assuossimus, voluptas impedit aliquid. Error
                        corrupti placeat dignissimos laudantium facere?</p>
                </div>
                <div className="flex justify-center mt-4">
                    <button class="bg-transparent text-red-600 border border-red-600 px-4 py-2 rounded-4xl">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero