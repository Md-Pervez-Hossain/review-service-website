import React from "react";
import { Link } from "react-router-dom";

const DisplayAllFoodsService = ({ foodService }) => {
  const { _id, foodName, photoURL, foodPrice, foodDescription } = foodService;

  return (
    <div className="bg-gray-100 shadow-xl  p-4">
      <div>
        <img src={photoURL} alt="" className="w-full h-72" />
      </div>
      <div>
        <h2 className="text-3xl font-bold my-3">{foodName}</h2>
        <p className="font-bold text-xl mb-3">
          Price : <span className="font-normal text-xl mb-3"> {foodPrice}</span>
        </p>
        <p>{foodDescription.slice(0, 100) + "..."} </p>
        <Link to={`/allservice/${_id}`}>
          <button className="bg-red-600 font-bold text-xl px-5 py-3 my-3 text-white">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayAllFoodsService;
