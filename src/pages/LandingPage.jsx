import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import FlashSale from "../components/FlashSale";
import Category from "../components/Category";
import BestSellingProduct from "../components/BestSellingProducts";
import EnhancMusic from "../components/EnhancMusic";
import NewArrivals from "../components/NewArrivals";
import Footer from "../components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Total from "../components/Total";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";
import Cart from "../components/Cart";
import CheckOut from "../components/CheckOut";
import Admin from "../dashboard/Admin";
import EditProfile from "../components/EditProfile";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import ProductDetails from "../components/ProductDetails";
import Store from "../components/Store";
import AllProducts from "../components/AllProducts";
import NotFound from "../components/NotFound";

const LandingPage = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Total />} />
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/flashsale" element={<FlashSale />} />
          <Route path="/category" element={<Category />} />
          <Route path="/bestsellingproduct" element={<BestSellingProduct />} />
          <Route path="/enhancemusic" element={<EnhancMusic />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
          <Route path="/dashboard" element={<Admin />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/allproducts" element={<AllProducts />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default LandingPage;
