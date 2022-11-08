import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const DisplayMyReviews = ({ myReview, handleDelete }) => {
  const { _id, review, ratings, foodName } = myReview;
  return (
    <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 bg-gray-100 dark:text-gray-50">
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
          Food Name : {foodName}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          Rating: {ratings}
        </h2>
      </div>
      <p className="dark:text-gray-100">Review : {review}</p>

      <div className="flex gap-5 cursor-pointer">
        <FaTrashAlt onClick={() => handleDelete(_id)}></FaTrashAlt>
        <FaEdit></FaEdit>
      </div>
    </div>
  );
};

export default DisplayMyReviews;
