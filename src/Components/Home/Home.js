import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Contact from "../Contact/Contact";
import DiscountBanner from "../DiscountBanner/DiscountBanner";
import FoodBlog from "../FoodBlog/FoodBlog";

import DisplayServices from "./DisplayServices";
// import { FadeLoader } from "react-spinners";

const Home = () => {
  // const foodService = useLoaderData();
  const [foodsService, setFoodsService] = useState([]);
  // console.log(foodService);
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/addservice"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodsService(foodsService);
      });
  });
  document.title = "Home Page";

  return (
    <div className="md:w-9/12 mx-auto  p-4 my-16 ">
      <div className="flex items-center flex-col-reverse bg-yellow-300 md:flex-row gap-16 py-10 px-4 md:py-24 md:px-10 justify-between">
        <div>
          <h2 className="md:text-7xl text-4xl font-bold leading-relaxed">
            My Tasty and <span className="text-red-600"> Delicious</span> Foods
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
            className="w-full "
          />
        </div>
      </div>
      <div className="my-16">
        <div className="my-16">
          <h2 className="md:text-7xl text-4xl font-bold text-center ">
            My food Services
          </h2>
          <p className="text-center text-2xl font-normal my-5 ">
            Feel The Test and Enjoy My{" "}
            <span className="text-red-600">Delicious</span> Foods
          </p>
          <hr className="my-5" />
          <hr className="my-5" />
        </div>
        <div className="grid md:grid-cols-3 gap-10 p-4">
          {foodsService?.map((serviceInfo) => (
            <DisplayServices
              key={serviceInfo._id}
              serviceInfo={serviceInfo}
            ></DisplayServices>
          ))}
        </div>

        <div className="text-center my-16">
          <Link to="/allservice">
            <button
              type="button"
              className="px-8 py-3 font-bold text-3xl border rounded border-red-600 text-red-600  dark:text-gray-100"
            >
              See All
            </button>
          </Link>
        </div>

        <div>
          <DiscountBanner></DiscountBanner>
        </div>
        <div>
          <FoodBlog></FoodBlog>
        </div>
      </div>

      <div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
