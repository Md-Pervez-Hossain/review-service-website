import React from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const DisplayAllFoodsService = ({ foodService }) => {
  const { _id, foodName, photoURL, foodPrice, foodDescription } = foodService;
  return (
    <div className="shadow-xl  p-4">
      <div
        style={{
          backgroundImage: `url(${photoURL})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "200px",
        }}
      ></div>
      <div>
        <h2 className="text-3xl font-bold my-3">{foodName}</h2>
        <p className="font-bold  mb-0 ">
          Price : $ <span className="font-normal  "> {foodPrice}</span>
        </p>
        <p className="mb-1">{foodDescription?.slice(0, 100) + "..."} </p>
        <div className="flex justify-between items-center">
          <div>
            <Link to={`/allservice/${_id}`}>
              <button className=" font-bold text-red-600  ">Read More</button>
            </Link>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <FaCartPlus></FaCartPlus>
            <FaHeart></FaHeart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAllFoodsService;
