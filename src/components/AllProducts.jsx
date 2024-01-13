import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AllProducts = () => {
  const [apiData, setApiData] = useState([]);
  const [apiDataTwo, setApiDataTwo] = useState([]);
  const [loader, setLoader] = useState(false);

  const gettingAllProducts = async () => {
    try {
      setLoader(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      const responseTwo = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      const dataTwo = responseTwo.data;
      setLoader(false);
      setApiData(data);
      setApiDataTwo(dataTwo);
    } catch (error) {
      console.log("Error while Getting The Data in AllProducts ", error);
    }
  };
  useEffect(() => {
    gettingAllProducts();
  }, []);
  return (
    <div>
      {/* Displaying Products */}
      <h1 className="text-3xl text-center font-bold">All Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-2 mx-2 sm:mx-4 my-5 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5">
        {loader ? (
          <div className="text-center mx-[500px]">
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
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          apiData.map((items) => {
            return (
              <div
                className="  p-[20px] w-[300px] bg-[#F5F5F5] "
                key={items.id}
              >
                <Link to={"/productdetails/" + items.id}>
                  <img
                    src={items.image}
                    className="w-[200px] h-[200px] mx-auto cursor-pointer p-[30px] inset-0 transform  hover:scale-75 transition duration-300 "
                  />

                  <h1 className="font-semibold">
                    {items.title.slice(0, 15)}...
                  </h1>
                  <span className="text-red-600 font-semibold">
                    {items.price}
                  </span>
                  <span className="text-yellow-300">
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <i className="text-black">(35)</i>
                  </span>
                </Link>
                <br></br>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <button
                      className=" bg-black text-white h-[40px] w-[60px] rounded"
                      onClick={() => handleDeleteProduct(items.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <div>
                    <button className=" bg-black text-white h-[40px] w-[60px] rounded">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}

        {/* Api Two is Called Here */}
        {apiDataTwo.map((items) => {
          return (
            <div className="  p-[20px] w-[300px] bg-[#F5F5F5] " key={items.id}>
              <Link to={"/productdetails/" + items.id}>
                <img
                  src={items.category.image}
                  className="w-[200px] h-[200px] mx-auto cursor-pointer p-[30px] inset-0 transform  hover:scale-75 transition duration-300 "
                />

                <h1 className="font-semibold">{items.title.slice(0, 10)}...</h1>
                <span className="text-red-600 font-semibold">
                  {items.price}
                </span>
                <span className="text-yellow-300">
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="text-black">(35)</i>
                </span>
              </Link>
              <br></br>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <button
                    className=" bg-black text-white h-[40px] w-[60px] rounded"
                    onClick={() => handleDeleteProduct(items.id)}
                  >
                    Delete
                  </button>
                </div>
                <div>
                  <button className=" bg-black text-white h-[40px] w-[60px] rounded">
                    Update
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {/* Api Two is Called Here */}
      </div>
      {/* Displaying Products Ended */}
      
    </div>
  );
};

export default AllProducts;
