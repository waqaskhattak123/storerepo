import React from "react";
import Navbar from "./Navbar";
import storyimg from "../icons/storyimg.png";
import Footer from "./Footer";
const AboutUs = () => {
  return (
    <div>
 
      {/* Main div */}
      <div>
        <div className="flex flex-col flex-nowrap lg:place-items-center md:grid md:grid-cols-2 md:w-auto mx-[70px] md:mx-[140px] mt-11">
          <img src={storyimg} className="" />
          {/* our story */}
          <div>
            <h1 className="text-5xl">Our Story</h1>
            <p className="w-auto mt-3 text-justify">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region. Exclusive has more than 1 Million
              products to offer, growing at a very fast. Exclusive offers a
              diverse assotment in categories ranging from consumer. Launced in
              2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region. Exclusive has more than 1 Million
              products to offer, growing at a very fast. Exclusive offers a
              diverse assotment in categories ranging from consumer.
            </p>
          </div>
          {/* our story ended */}
          {/* side pic */}
          <div></div>
          {/* side pic ended */}
        </div>
        {/* Free and Fast Delivery */}
        <div className=" h-[100px] m-[50px]  relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
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
      {/* Main div */}
  
    </div>
  );
};

export default AboutUs;
