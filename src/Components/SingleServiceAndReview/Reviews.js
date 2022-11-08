import React from "react";
import { FaEdit, FaTrashAlt, IconName } from "react-icons/fa";

const Reviews = ({ reviews }) => {
  const { _id, ratings, review, displayName, photoURL } = reviews;
  const handleDelete = (_id) => {
    console.log(_id);
  };
  return (
    <div className="bg-gray-100 p-5 shadow-xl my-5">
      <div className="flex justify-between items-center">
        <div>
          <img src={photoURL} alt="" className="h-16 rounded-full" />
          <h2 className="text-2xl font-bold">{displayName}</h2>
          <h2 className="text-xl font-semibold"> Review : {review}</h2>
          <p>Rating : {ratings}</p>
        </div>
        <div className="flex gap-5 cursor-pointer">
          <FaTrashAlt onClick={() => handleDelete(_id)}></FaTrashAlt>
          <FaEdit></FaEdit>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
