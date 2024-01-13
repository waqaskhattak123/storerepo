import React, { useEffect, useState } from "react";
import BestSellingProducts from "../components/BestSellingProducts";
import axios from "axios";

const Category = () => {
  const [selectCategory, setSelectCategory] = useState();
  const [categoryModel, setCategoryModel] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const handleCategoryClick = (category) => {
    setSelectCategory(category);
  };
  const API_URl = `https://fakestoreapi.com/products/category/jewelery`;
  const CategoryFunction = async () => {
    try {
      const categoryResponse = await axios.get(API_URl);
      const categoryData = categoryResponse.data;
      console.log("API data: ", categoryData);
      setCategoryData(categoryData);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    CategoryFunction();
  }, []);
  // console.log('category data api: ', categoryData)
  return (
    <div className="flex flex-col">
      {/* 
      --------------- ************ -----------
                     Category Models  
      
      ------------- ************** -----------
      */}
      {categoryModel ? (
        <>
          {/* Modal toggle */}
          {/* Main modal */}
          {categoryData.map((items) => {
            return (
              <div
                aria-hidden="true"
                className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-50"
              >
                <div className="relative p-4 w-full max-w-2xl">
                  {/* Modal content */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {items.title}
                      </h3>

                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setCategoryModel(false)}
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5 space-y-4">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union
                        enacts new consumer privacy laws for its citizens,
                        companies around the world are updating their terms of
                        service agreements to comply.
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation
                        (G.D.P.R.) goes into effect on May 25 and is meant to
                        ensure a common set of data rights in the European
                        Union. It requires organizations to notify users as soon
                        as possible of high-risk data breaches that could
                        personally affect them.
                      </p>
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button
                        data-modal-hide="default-modal"
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => setCategoryModel(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
      {/* 
      --------------- ************ -----------
                     Category Models  ended
      
      ------------- ************** -----------
      */}
      {/* browse by categories */}
      <div className="  font-bold mx-3">
        <h1 className="text-red-500 border-l-4 pl-1 text-2xl border-red-700">
          Category:
        </h1>
        {/* browse by categories */}
        <div className="flex flex-row">
          <h1 className="font-bold">Browse By Category:</h1>
          <i className="fa-solid fa-xl fa-arrow-left mx-6 sm:float-right bg-[#c9bdbd] rounded-xl  p-6 pl-3 w-[50px] h-[20px]"></i>
          <i className="fa-solid fa-xl fa-arrow-right bg-[#c9bdbd] sm:float-right rounded-xl  p-6 pl-3 w-[50px] h-[20px]"></i>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 text-center mt-2">
        <div className=" h-[120px] place-items-center  ">
          <button
            type="button"
            onClick={() => handleCategoryClick("electronics")}
          >
            <i className="fa-solid fa-2xl fa-mobile-screen my-10 "></i>
            <p className=" top-[-10px] relative font-semibold">Electronics</p>
          </button>
        </div>
        <div className=" h-[120px]">
          <button type="button" onClick={() => handleCategoryClick("jewelery")}>
            <i className="fa-solid fa-2xl fa-mobile-screen my-10 "></i>
            <p className=" top-[-10px] relative font-semibold">Jewelery</p>
          </button>
        </div>
        <div className=" h-[120px]">
          <button
            type="button"
            onClick={() => handleCategoryClick("men's clothing")}
          >
            <i className="fa-solid fa-2xl fa-mobile-screen my-10 "></i>
            <p className=" top-[-10px] relative font-semibold">
              men's clothing
            </p>
          </button>
        </div>
        <div className=" h-[120px] ">
          <button
            type="button"
            onClick={() => handleCategoryClick("women's clothing")}
          >
            <i className="fa-solid fa-2xl fa-mobile-screen my-10 "></i>
            <p className=" top-[-10px] relative font-semibold">
              women's clothing
            </p>
          </button>
        </div>
        <div className=" h-[120px]  ">
          <button
            type="button"
            onClick={() => handleCategoryClick("electronics")}
          >
            <i className="fa-solid fa-2xl fa-mobile-screen my-10 "></i>
            <p className=" top-[-10px] relative font-semibold">Electroncis</p>
          </button>
        </div>
      </div>
      <BestSellingProducts Category={"selectCategory from props"} />
    </div>
  );
};

export default Category;
