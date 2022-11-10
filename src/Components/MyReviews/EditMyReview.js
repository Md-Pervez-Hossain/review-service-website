import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const EditMyReview = () => {
  const myReviews = useLoaderData();

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

    fetch(
      `https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/reviewss/${myReviews._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(myReviewData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Updated", { autoClose: 500 });
          form.reset();
        }
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 500 });
      });

    console.log(myReviewData);
  };
  return (
    <div className="md:w-1/2 mx-auto bg-gray-100 p-4 my-16">
      <h2 className="text-2xl font-bold">
        Update Review : {myReviews.foodName}
      </h2>
      <form onSubmit={handleMyReviewSubmit}>
        <div className="bg-gray-100 p-10">
          <input
            type="text"
            name="ratings"
            placeholder="Rating"
            className="w-full mb-5 px-5 py-5"
            defaultValue={myReviews.ratings}
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
            defaultValue={myReviews.review}
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
