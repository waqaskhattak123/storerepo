import React, { useState } from "react";
import SideBar from "./SideBar";
import FlashSale from "./FlashSale";
import Category from "./Category";
import BestSellingProduct from "./BestSellingProducts";
import EnhancMusic from "./EnhancMusic";
import NewArrivals from "./NewArrivals";

const Total = () => {
  // const [selectCategory, setSetCategory] = useState();
  return (
    <div>
      <SideBar />
      <FlashSale />
      <Category />
      <BestSellingProduct />
      <EnhancMusic />
      <NewArrivals />
    </div>
  );
};

export default Total;
