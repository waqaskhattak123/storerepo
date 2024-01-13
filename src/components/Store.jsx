import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Store = () => {
  const [inputFeilds, setInputFields] = useState({
    title: "",
    price: "",
    desc: "",
    size: "",
    color: "",
  });
  const [image, setimage] = useState();
  const [storeProducts, setStoreProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  //   Calling Api for display Products
  const fetchigStoreProducts = async () => {
    try {
      const dispalyStoreProducts = await axios.get(
        "http://localhost:4000/api1/v2/product/getproducts"
      );
      if (Array.isArray) {
        const response = await dispalyStoreProducts.data.product;
        setStoreProducts(response);
      }
    } catch (error) {
      console.log("Error Found to Getting Data for dispaly" + error);
    }
  };
  useEffect(() => {
    fetchigStoreProducts();
  }, [fetchigStoreProducts()]);

  //   Calling Api for display Products ends
  const handlechange = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFeilds,
      [name]: value,
    });
  };
  const handleImageValue = (e) => {
    const file = e.target.files[0];
    setimage(file);
  };
  // Api for Deleting Products
  const handleDeleteProduct = async (id) => {
    try {
      const deleteProducts = await axios.delete(
        `http://localhost:4000/api1/v2/product/deleteproduct/${id}`,{
            method:"delete"
        }

      );
      const response = await deleteProducts.data;

      console.log("Data is Deleted in Delete Functions" + response);
    } catch (error) {
      console.log("Error Found in the Delete functions" + error);
    }
  };
  // Api for Deleting Products ended
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", inputFeilds.title);
    formData.append("price", inputFeilds.price);
    formData.append("description", inputFeilds.desc);
    formData.append("size", inputFeilds.size);
    formData.append("color", inputFeilds.color);
    try {
      const response = await axios.post(
        "http://localhost:4000/api1/v2/product/createproduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = await response.data;
      console.log("data sent", data);
    } catch (error) {
      console.log("Error found" + error);
    }
  };

  return (
    <div>
      {/*  */}
      <div className=" w-[100%]">
        <div className="text-center bg-green-700 h-10">
          <h1 className="text-2xl text-white">Set Up Your Store</h1>
        </div>
        <form
          className="flex flex-col p-[30px]  ml-[30px] w-[400px] h-[400px] sm:w-[600px] sm:p-[10px] 
            md: md:ml-[10px] md:w-[100%] lg:w-[90%] lg:h-[580px] lg:mx-auto
            "
          onSubmit={handleSubmit}
        >
          {/* Toaster Message */}

          {/* Toaster Message ended */}
          <h1 className="text-3xl font-bold mb-3">Update Your Store</h1>
          <h1 className="font-semibold mb-3">Enter Items:</h1>
          {/* <label>Name</label> */}
          <input
            type="text"
            placeholder="Title "
            className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
            autoComplete="true"
            name="title"
            value={inputFeilds.title}
            onChange={handlechange}
          />

          <input
            type="number"
            placeholder="Price "
            className="placeholder:text-start  w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
            autoComplete="true"
            name="price"
            value={inputFeilds.price}
            onChange={handlechange}
          />

          <input
            type="text"
            placeholder="description "
            className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
            autoComplete="true"
            name="desc"
            value={inputFeilds.desc}
            onChange={handlechange}
          />
          <input
            type="file"
            className="placeholder:text-start w-[300px] h-10 border-opacity-25 border-b border-black mb-6 outline-none"
            onChange={handleImageValue}
          />

          <select
            name="color"
            value={inputFeilds.color}
            onChange={handlechange}
            className="w-[300px] mb-3 bg-zinc-500 h-8 rounded-full text-center text-white"
          >
            <option value={"black"}>Black</option>
            <option value={"blue"}>Blue</option>
            <option value={"red"}>Red</option>
            <option value={"green"}>Green</option>
          </select>
          <select
            onChange={handlechange}
            name="size"
            value={inputFeilds.size}
            className="w-[300px] mb-3 bg-zinc-500 h-8 rounded-full text-center text-white"
          >
            <option value={"small"}>Small</option>
            <option value={"medium"}>Medium</option>
            <option value={"large"}>Large</option>
            <option value={"xl"}>Xtra Large</option>
          </select>
          <button
            type="submit"
            className="bg-red-500 w-[300px] font-bold h-8 text-white"
          >
            Upload
          </button>
        </form>
      </div>
      {/*  */}
      {/* Displaying Products */}

      <h1 className="text-3xl text-center font-bold">All Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-2 mx-[100px] my-5 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5">
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
          storeProducts.map((items) => {
            return (
              <div
                className="  p-[20px] w-[300px] bg-[#F5F5F5] "
                key={items._id}
              >
                <Link to={"/productdetails/" + items._id}>
                  <img
                    src={`http://localhost:4000/Image/${items.image[0]}`}
                    className="w-[200px] h-[200px] mx-auto cursor-pointer p-[30px] inset-0 transform  hover:scale-75 transition duration-300 "
                  />

                  <h1 className="font-semibold">
                    {items.title.slice(0, 5)}...
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
                <div className="grid grid-cols-4 gap-4" >
                  <div><button className=" bg-black text-white h-[40px] w-[60px] rounded" onClick={()=>handleDeleteProduct(items._id)}>Delete</button></div>
                  <div><button className=" bg-black text-white h-[40px] w-[60px] rounded" >Update</button></div>
                 
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* Displaying Products Ended */}
    </div>
  );
};

export default Store;
