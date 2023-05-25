import React from "react";
import Contact from "../Contact/Contact";

import HeroBanner from "../HeroBanner/HeroBanner";
import FoodsCategory from "../FoodsCategory/FoodsCategory";
import ClientFeedback from "../ClientFeddback/ClientFeedback";
import UpcomingFoods from "../UpcomingFood/UpcommingFoods.js";
import ShowFoodsBlog from "../FoodsBlog/ShowFoodsBlog";

const Home = () => {
  document.title = "Home Page";
  return (
    <div className="md:w-9/12 mx-auto  my-16  ">
      <div className="my-16">
        <HeroBanner></HeroBanner>
      </div>

      <div className="my-16">
        <FoodsCategory></FoodsCategory>
      </div>

      <div>{/* <DiscountBanner></DiscountBanner> */}</div>
      <div>
        <UpcomingFoods></UpcomingFoods>
      </div>
      <div>
        <ShowFoodsBlog></ShowFoodsBlog>
      </div>
      <div>
        <ClientFeedback></ClientFeedback>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
