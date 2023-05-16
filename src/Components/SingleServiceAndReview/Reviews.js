import React from "react";

const Reviews = ({ reviews, handleDelete }) => {
  const { ratings, review, displayName, photoURL } = reviews;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img src={photoURL} alt="" className="h-16 w-16  rounded-full" />
          <div>
            <h2 className=" font-bold">{displayName}</h2>
            <h2 className=" font-semibold"> {review}</h2>
            <p>Rating : {ratings}</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <hr></hr>
        <hr></hr>
      </div>
    </div>
  );
};

export default Reviews;
