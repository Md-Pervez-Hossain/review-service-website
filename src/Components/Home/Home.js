import React from "react";
import Contact from "../Contact/Contact";
import DiscountBanner from "../DiscountBanner/DiscountBanner";
import FoodBlog from "../FoodBlog/FoodBlog";

import HeroBanner from "../HeroBanner/HeroBanner";
import FoodsCategory from "../FoodsCategory/FoodsCategory";
import ClientFeedback from "../ClientFeddback/ClientFeedback";
import FoodsBolg from "../FoodsBlog/FoodsBolg";

const Home = () => {
  document.title = "Home Page";
  return (
    <div className="md:w-9/12 mx-auto  my-16 px-8 ">
      <div className="my-16">
        <HeroBanner></HeroBanner>
      </div>

      <div className="my-16">
        <FoodsCategory></FoodsCategory>
      </div>

      <div>{/* <DiscountBanner></DiscountBanner> */}</div>
      <div>
        <FoodBlog></FoodBlog>
      </div>
      <div>
        <FoodsBolg></FoodsBolg>
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
