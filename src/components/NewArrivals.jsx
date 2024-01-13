import React from "react";
import shortspeakers from "../icons/shortspeakers.png";
import perfumes from "../icons/perfumes.png";

const NewArrivals = () => {
  return (
    <div>
      <div className="  font-bold mx-3">
        <h1 className="text-red-500 border-l-4 pl-1 text-2xl border-red-700">
          New Arrivals:
        </h1>
      </div>

      {/* Main Div */}
      <div className="grid grid-cols-1 pt-3 w-full gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-rows-2 ">
        <div className="bg-black text-white md:row-span-2 bg-contain h-auto bg-no-repeat md:bg-auto bg-[url('./src/icons/speakers.png')]">
          <h1 className="text-white relative font-semibold left-3 pt-[250px] md:relative lg:top-[420px] md:text-2xl md:top-[380px]">
            PlayStation 5
          </h1>
          <span className="text-white relative font-semibold left-3 md:top-[380px] lg:top-[420px] md:text-2xl">
            Black and White version of the PS5 coming out on sale.
          </span>
          <button className="text-white bg-transparent hover:bg-slate-50 hover:text-black underline hover:no-underline md:text-2xl lg:top-[420px] md:relative md:top-[380px] w-[100%] h-[30px] text-center">
            Shop Now
          </button>
        </div>
        <div className="bg-black text-white h-auto sm:h-auto bg-no-repeat bg-[url('./src/icons/girlwithcap.png')]">
          <h1 className="bg-none text-white relative pt-[200px] font-semibold left-3 sm:pt-[250px] lg:pt-[300px] ">
            Womens Collections
          </h1>
          <span className="bg-none text-white relative  font-semibold left-3 ">
            Featured woman collections that give you another vibe.
          </span>
          <button className="text-white bg-transparent   hover:bg-slate-50 hover:text-black underline hover:no-underline w-[100%] h-[30px] text-center">
            Shop Now
          </button>
        </div>
        {/* Side Div */}
        <div className="grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 bg-black text-white h-auto">
          <div>
            <img src={shortspeakers} className="md:m-[30px]" />
            <h1 className="bg-none text-white relative font-semibold left-3  ">
              Short Speakers
            </h1>
            <span className="bg-none text-white relative font-semibold left-3 ">
              Featured woman collections that give you another vibe.
            </span>
            <button className="text-white bg-transparent hover:bg-slate-50 hover:text-black underline hover:no-underline w-[100%] h-[30px] text-center">
              Shop Now
            </button>
          </div>
          <div>
            <img src={perfumes} className="md:m-[10px]" />
            <h1 className="bg-none text-white relative font-semibold left-3 md:pt-[60px]">
              Perfumes
            </h1>
            <span className="bg-none text-white relative font-semibold left-3">
              Featured woman collections that give you another vibe.
            </span>
            <button className="text-white bg-transparent hover:bg-slate-50 hover:text-black w-[100%] underline hover:no-underline h-[30px] text-center">
              Shop Now
            </button>
          </div>
        </div>
        {/* side div ended */}
      </div>
      {/* Main Div ended */}

      {/* Free and Fast Delivery */}
      <div className=" h-[100px] m-[50px] relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        <div>
          <i className="fa-solid fa-lg fa-bus relative left-[60px] bottom-2 rounded-full"></i>
          <h1 className="font-semibold">FREE AND FAST DELIVERY</h1>
          <h1 className="font-semibold">
            Free delivery for all orders over $140
          </h1>
        </div>
        <div>
          <i className="fa-solid fa-lg fa-headphones relative left-[60px] bottom-2 rounded-full"></i>
          <h1 className="font-semibold">24/7 CUSTOMER SERVICE</h1>
          <h1 className="font-semibold">Friendly 24/7 customer support</h1>
        </div>
        <div>
          <i className="fa-solid fa-lg fa-check relative left-[60px] bottom-2 rounded-full"></i>
          <h1 className="font-semibold">MONEY BACK GUARANTEE</h1>
          <h1 className="font-semibold">We reurn money within 30 days</h1>
        </div>
      </div>
      {/* Free and Fast Delivery Ended */}
    </div>
  );
};

export default NewArrivals;
