import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const selector = useSelector((state) => state.eCart.productsCart);
  const totalPrice = useSelector((state) => state.eCart.subTotal);
  const navigate = useNavigate();

  const handleClick = () => {
    toast.info(`Order is Placed Successfully`, {
      position: "top-right",
      autoClose: 2000,
    });
    navigate("/");
  };

  return (
    <div>
 
      {/* Main Div */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-3 lg:mx-[200px]">
        {/* Billing Div */}
        <div className="sm:mx-auto">
          <form
            className="flex flex-col border shadow-xl border-gray-100 "
            onClick={(e) => e.preventDefault()}
          >
            <h1 className="text-3xl font-bold mb-3">Billing Details</h1>
            {/* <label>Name</label> */}
            <input
              type="text"
              placeholder="First Name "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />

            <input
              type="text"
              placeholder="Company Name "
              className="placeholder:text-start  w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />

            <input
              type="text"
              placeholder="Street Address "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />
            <input
              type="text"
              placeholder="Appartment or Floor Number "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />
            <input
              type="text"
              placeholder="Town or City "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />
            <input
              type="text"
              placeholder="Phone Number "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />
            <input
              type="email"
              placeholder="Email "
              className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
              autoComplete="true"
            />
            <button
              className="bg-red-500 w-[300px] font-bold text-white h-[40px] mt-2"
              onClick={handleClick}
            >
              Submit
            </button>
          </form>
        </div>
        {/* Billing Div Ended */}
        {/* Shipping Details */}
        <div>
          {selector &&
            selector.map((items) => {
              return (
                <div className="sm:w-1/2 lg:w-full">
                  <div className="flex flex-row mt-[70px]">
                    <img
                      src={`http://localhost:4000/Image/${items.image[0]}`}
                      className="w-[100px] h-[100px] mx-1"
                    />
                    <span className="font-semibold">
                      {" "}
                      {items.title.slice(0, 8)}
                    </span>
                    <span className=" mx-auto font-semibold">
                      {items.price}
                    </span>
                  </div>

                  <div className="border-b-2 mt-2 mx-4">
                    <span>SubTotal</span>
                    <span className="float-right font-semibold">
                      ${totalPrice}
                    </span>
                  </div>

                  <div className="border-b-2 mt-2 mx-4">
                    <span>Shipping</span>
                    <span className="float-right">Free</span>
                  </div>
                  <div className=" mt-2 mx-4">
                    <span>Total</span>
                    <span className="float-right font-semibold">
                      ${totalPrice}
                    </span>
                  </div>
                  <div className=" mt-2 mx-4">
                    <input type="radio" /> <span>Bank</span>
                  </div>
                  <div className=" mt-2 mx-4">
                    <input type="radio" /> <span>Cash On Delivery</span>
                  </div>

                  <button
                    className="bg-red-500 w-[300px] font-bold text-white h-[40px] mt-2"
                    onClick={handleClick}
                  >
                    Place Order
                  </button>
                </div>
              );
            })}
        </div>
        {/* Shipping Details Ended */}
      </div>
      {/* Main Div */}
   
    </div>
  );
};

export default CheckOut;
