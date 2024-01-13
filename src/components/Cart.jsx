import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import {
  remove,
  increaseQuantity,
  calculatingTotal,
  DecQuantity,
} from "../myredux/userSlice";

const Cart = () => {
  const selector = useSelector((state) => state.eCart.productsCart);
  const quantity = useSelector((state) => state.eCart.totalQuantity);
  const totalPrice = useSelector((state) => state.eCart.subTotal);
  const DecQuantity = useSelector((state) => state.eCart.DecQuantity);
  const dispatch = useDispatch();

  dispatch(calculatingTotal());
  const handleIncrase = (id) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecQuantity = (id) => {
    dispatch(DecQuantity(id));
  };
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
    
      <div className=" mt-[50px] mx-3 overflow-x-auto  md:mx-auto lg:mx-auto text-center items-center font-semibold">
        <table className=" bg-white border border-gray-300  sm:overflow-hidden sm:mx-auto ">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">P/ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            <div className="">
              {selector.length === 0 ? (
                <div className="absolute w-full">
                  <h1 className="text-center">Your Cart is Empty</h1>
                </div>
              ) : (
                ""
              )}
            </div>
            {selector &&
              selector.map((items) => {
                return (
                  <tr key={items.id}>
                    <td className="py-2  border-b flex">
                      <img
                        src={`http://localhost:4000/Image/${items.image[0]}`}
                        className="w-[100px] h-[100px] mx-1"
                      />
                    </td>
                    <td>{items.title.slice(0, 8)}...</td>
                    <td className="py-2 border-b">${items.price}</td>
                    <td className="py-2 border-b">
                      <div className="flex flex-row border-2 text-center m-3">
                        <button
                          className=" text-2xl"
                          onClick={() => handleIncrase(items.id)}
                        >
                          +
                        </button>
                        <div className=" w-[100%]">{quantity}</div>

                        <button
                          className="text-3xl float-right"
                          onClick={() => handleDecQuantity(items.id)}
                        >
                          -
                        </button>
                      </div>
                    </td>

                    <td>${items.price * quantity}</td>
                    <td>
                      <button
                        className="bg-[#DB4444] text-[15px] relative  text-white text-center w-auto h-[40px] sm:mx-3"
                        onClick={() => handleRemove(items.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* Buttons */}
        <div>
          <NavLink to={"/"}>
            <button className="bg-[#DB4444] mt-11 mb-3 text-[15px] relative  text-white text-center w-[230px] h-[40px] sm:mx-3">
              Return To Shop
            </button>
          </NavLink>
          <button className="bg-[#DB4444] text-[15px] relative  text-white text-center w-[230px] h-[40px]">
            Update The Cart
          </button>
        </div>
        {/* Buttons Ended */}
      </div>

      {/* Cart SubTotal */}
      <div className="mt-[40px] mx-3 sm:w-1/2 sm:mx-auto h-auto border-2">
        <h1 className="text-2xl">Cart Total:</h1>
        <div className="border-b-2 mt-2">
          <span>SubTotal</span>
          <span className="float-right font-semibold">${totalPrice}</span>
        </div>
        <div className="border-b-2 mt-2">
          <span>Shipping</span>
          <span className="float-right font-semibold">Free</span>
        </div>
        <div className=" mt-2">
          <span>Total</span>
          <span className="float-right font-semibold">${totalPrice}</span>
        </div>

        <NavLink to={"/checkout"}>
          <button className="bg-[#DB4444]  mt-2 text-[15px] relative  text-white text-center w-[100%] h-[40px]">
            Proceed To Checkout
          </button>
        </NavLink>
      </div>
      {/* Cart SubTotal Ended */}
    </div>
  );
};

export default Cart;
