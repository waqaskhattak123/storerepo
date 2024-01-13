import React from "react";
import iphonlogo from "../icons/iphonlogo.png";
import iphonefourteen from "../icons/iphonfourteen.png";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
const SideBar = () => {
  return (
    <div>
      {/* sidebar started */}
      {/* side bar main div*/}
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-5">
        {/* side bar contents */}
        <div
          className="grid grid-cols-2 gap-3 pt-5 text-[20px] font-semibold underline justify-start
        md:grid md:grid-cols-1 md:no-underline lg:gap-2 lg:grid lg:grid-cols-1 text-start lg:text-[15px]
        "
        >
          <button>
            Mens Fashions <i className="fa-solid fa-sm fa-chevron-right " />
          </button>
          <button>
            Mens Fashions <i className="fa-solid fa-sm fa-chevron-right " />
          </button>
          <button>Electronics</button>
          <button>Home and LifeCycle</button>
          <button>Medicine</button>
          <button>Sports and Outdoor</button>
          <button>Baby and Toys</button>
          <button>Groceries and Pets</button>
          <button>Health and Beauty</button>
        </div>
        {/* side bar contents ended */}
        {/* side image */}
        <div className="pt-[20px] md:grid md:grid-cols-1  lg:grid-cols-2 lg:col-span-4 lg:w-[100%]   ">
          {/* image conents */}
          <div className="bg-black text-white ">
            <div className="pl-[130px] h-[120px] pt-3 flex flex-row">
              <img src={iphonlogo} />
              <h1 className="pt-[40px] pl-[20px] text-[20px]">
                {" "}
                Iphone 14 series
              </h1>
            </div>
            <h1 className="pl-[140px] pt-14 text-3xl pb-8 ">
              <h1
                style={{
                  fontWeight: "normal",
                }}
              >
                {" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  <Typewriter
                    words={["Upto 10%", "Discount", "Shop Now"]}
                    loop={5}
                    cursor
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </h1>
            <Link to={"/cart"}>
              <button className="pl-[140px] underline font-bold text-2xl pb-6">
                Shop Now <i className="fa-solid fa-arrow-right pl-[10px]"></i>
              </button>
            </Link>
          </div>
          {/* image conents ended */}
          {/* image */}
          <div className="md:grid md:grid-cols-1 ">
            <img
              src={iphonefourteen}
              className="w-[100%] lg:col-span-3 lg:h-[360px]"
            />
          </div>
          {/* image ended */}
        </div>
        {/* side image ended */}
      </div>
      {/* side bar main div */}
    </div>
  );
};

export default SideBar;
