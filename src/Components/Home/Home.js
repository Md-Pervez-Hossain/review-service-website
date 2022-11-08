import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import FoodBlog from "../FoodBlog/FoodBlog";
import DisplayServices from "./DisplayServices";

const Home = () => {
  const foodService = useLoaderData();
  return (
    <div className="md:w-9/12 mx-auto  p-4 my-16 ">
      <div className="flex items-center flex-col bg-yellow-300 md:flex-row gap-16 py-10 px-4 md:py-24 md:px-10 justify-between">
        <div>
          <h2 className="md:text-7xl text-4xl font-bold">
            My Best Foods Review Website
          </h2>
          <p className="text-2xl font-normal my-3">
            Enjoy Your Favourite Food And Feel The Test
          </p>
          <button className="bg-red-600 font-bold text-xl px-3 py-3 text-white">
            Learn More
          </button>
        </div>
        <div>
          <img
            src="https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669538jccuo.png"
            alt=""
            className="w-full p-5"
          />
        </div>
      </div>
      <div className="my-16">
        <div className="my-16">
          <h2 className="md:text-7xl text-4xl font-bold text-center ">
            My food Services
          </h2>
          <p className="text-center text-2xl font-normal my-5 ">
            Feel The Test and Enjoy My Delicious Foods
          </p>
          <hr className="my-5" />
          <hr className="my-5" />
        </div>
        <div className="grid md:grid-cols-3 gap-10 p-4">
          {foodService?.slice(0, 3).map((serviceInfo) => (
            <DisplayServices
              key={serviceInfo._id}
              serviceInfo={serviceInfo}
            ></DisplayServices>
          ))}
        </div>
        <div className="text-center my-8">
          <Link to="/allservice">
            <button className="bg-red-600 font-bold text-xl px-5 py-3 text-white">
              All Foods
            </button>
          </Link>
        </div>
        <div>
          <FoodBlog></FoodBlog>
        </div>
      </div>
    </div>
  );
};

export default Home;
