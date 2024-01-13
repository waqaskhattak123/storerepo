import React, { useEffect, useState } from "react";
import radioimg from "../icons/radioimg.png";
import { useDispatch, useSelector } from "react-redux";
import { add, hideMessage } from "../myredux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { TERipple } from "tw-elements-react";
import axios from "axios";
const EnhancMusic = () => {
  const [fetchData, setFetchData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [noDataFound, setNoDataFound] = useState(false);
  const showMessage = useSelector((state) => state.eCart.productsCart);
  const dispatch = useDispatch();

  let noDataInterVal;
  const fethingSingleData = async () => {
    setLoader(true);
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=4"
      );
      const data = response.data;
      setLoader(false);
      clearInterval(noDataInterVal);
      setFetchData(data);
    } catch (error) {
      console.log(
        "Error while Fetching the Data in Enhance Music Compo",
        error
      );
    }
  };
  const navigate = useNavigate("/");
  useEffect(() => {
    noDataInterVal = setInterval(() => {
      setNoDataFound(true);
      setLoader(false);
    }, 3000);
    fethingSingleData();
    return () => {
      clearInterval(noDataInterVal);
    };
  }, []);

  const handleAddClick = (id) => {
    dispatch(add(id));
  };

  return (
    <div>
      {/* Enhance your music experince */}
      <div className="flex flex-col w-[100%] md:grid md:grid-cols-2 md:w-[100%] lg:w-[100%] bg-black text-white justify-center lg:mt-[70px] h-auto">
        {/* contents */}
        <div className="md:w-[100%]">
          <h1 className="text-[#0F6] text-3xl m-[40px] mx-10 ">Category</h1>
          <h1 className="text-[48px] pt-[5px] mx-11">
            Enhance Your Music Experience
          </h1>
          {/* hours and minuts */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row mx-11 text-2xl md:m-3">
            <div className="border-2 rounded-full w-[100px] h-[100px] justify-center bg-slate-50 text-black">
              <h1 className="pl-[30px] pt-2 font-bold">23</h1>
              <span className="pl-[20px] font-semibold ">Hours</span>
            </div>
            <div className="border-2 rounded-full w-[100px] h-[100px] justify-center bg-slate-50 text-black">
              <h1 className="pl-[30px] pt-2 font-bold">05</h1>
              <span className="pl-[20px] font-semibold ">Days</span>
            </div>
            <div className="border-2 rounded-full w-[100px] h-[100px] justify-center bg-slate-50 text-black">
              <h1 className="pl-[30px] pt-2 font-bold">59</h1>
              <span className="pl-[20px] font-semibold ">Min</span>
            </div>
            <div className="border-2 rounded-full w-[100px] h-[100px] justify-center bg-slate-50 text-black">
              <h1 className="pl-[30px] pt-2 font-bold">35</h1>
              <span className="pl-[20px] font-semibold ">Sec</span>
            </div>
          </div>
          {/* hours and minutes */}
          <button className="bg-[#0f56] text-2xl m-8 w-[200px] h-[70px] mx-11">
            Buy Now
          </button>
        </div>

        {/* contents */}
        {/* picutur */}
        <div>
          <img
            src={radioimg}
            className="w-[500px] h-[300px]  pb-6 md:mt-[80px] md:w-[500px] md:h-[400px]"
          />
        </div>
        {/* picture ended */}
      </div>
      {/* Enhance your music experince ended */}
      {/* explore Products */}
      <div>
        {/* Today tag */}
        <div className="flex flex-col mt-3 sm:flex-row mx-3 text-2xl font-bold ">
          <h1 className="text-red-500 border-l-4 pl-1 border-red-700">
            Explore Our Products:
          </h1>
          <br />
        </div>

        {/* dummy space */}
        <div className="pt-[30px]"></div>
        {/* dummy space */}

        {/* main div */}
      
        <div className="grid grid-cols-1 gap-2 mx-6 sm:grid-cols-4">
          {/* loader */}
          {noDataFound ? (
          <div>
            <h1 className="text-2xl pl-[50px]">No Data Found, Try Again.</h1>
          </div>
        ) : (
          ""
        )}
          {loader ? (
            <div className="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            </div>
          ) : (
            fetchData.map((items) => {
              return (
                <div className="block rounded-lg mx-auto lg:mx-[10px] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <Link to={`/products/${items.id}`}>
                    <img
                      className="w-[150px] mx-auto h-[150px] rounded-t-lg"
                      src={items.image}
                      alt=""
                    />
                  </Link>
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      {items.title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Price: {items.price}
                    </p>
                    <span className="text-yellow-300">
                      <i className="fa-solid fa-star-half-stroke"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                      <i className="text-black">(35)</i>
                    </span>
                    <br />
                    <TERipple>
                      <div className="flex flex-row">
                        <button
                          type="button"
                          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          onClick={() => handleAddClick(items)}
                        >
                          View details
                        </button>
                        <button
                          type="button"
                          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          onClick={() => handleAddClick(items)}
                        >
                          ADD To Cart
                        </button>
                      </div>
                    </TERipple>
                  </div>
                </div>
              );
            })
          )}

          {/* loader */}
        </div>

        <div className="bg-white justify-center w-full flex items-center pt-[120px] mt-[-100px]">
          <button
            className="bg-[#DB4444] text-white text-center w-[230px] h-[40px] hover:bg-red-900"
            onClick={() => navigate("/allproducts")}
          >
            View All Products
          </button>
        </div>
        <hr></hr>
        <br />
      </div>
    </div>
  );
};

export default EnhancMusic;
