import React from "react";

const Reviews = ({ reviews }) => {
  const { ratings, review, displayName, photoURL } = reviews;
  return (
    <div className="bg-gray-100 p-5 shadow-xl my-5">
      <img src={photoURL} alt="" className="h-16 rounded-full" />
      <h2 className="text-2xl font-bold">{displayName}</h2>
      <h2 className="text-xl font-semibold"> Review : {review}</h2>
      <p>Rating : {ratings}</p>
    </div>
  );
};

export default Reviews;
