import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayAllFoodsService from "./DisplayAllFoodsService";

const AllFoodsService = () => {
  const foodsService = useLoaderData();
  console.log(foodsService);
  return (
    <div className="w-9/12 mx-auto">
      <h2 className=" text-7xl font-bold my-16 text-center">
        My Foods service
      </h2>
      <div className="grid grid-cols-3 gap-10 my-16">
        {foodsService?.map((foodService) => (
          <DisplayAllFoodsService
            key={foodService._id}
            foodService={foodService}
          ></DisplayAllFoodsService>
        ))}
      </div>
    </div>
  );
};

export default AllFoodsService;