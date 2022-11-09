import React from "react";

const EditMyReview = () => {
  const handleMyReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const ratings = form.ratings.value;
    const review = form.review.value;
    const time = new Date().getTime();
    const myReviewData = {
      ratings,
      review,
      time,
    };
    console.log(myReviewData);
  };
  return (
    <div className="w-1/2 mx-auto bg-gray-100 p-8 my-16">
      <form onSubmit={handleMyReviewSubmit}>
        <div className="bg-gray-100 p-10">
          <input
            type="text"
            name="ratings"
            placeholder="Rating"
            className="w-full mb-5 px-5 py-5"
            required
          />
          <textarea
            name="review"
            id=""
            cols="20"
            rows="10"
            className="w-full px-5 py-5"
            placeholder="Review"
            required
          ></textarea>
          <button className="bg-red-600  font-bold text-xl px-5 py-3 my-3 text-white">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMyReview;
