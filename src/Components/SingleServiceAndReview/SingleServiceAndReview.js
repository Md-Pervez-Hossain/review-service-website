import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Reviews from "./Reviews";

const SingleServiceAndReview = () => {
  const [allReviews, setAllReviews] = useState([]);
  //   const [reviews, setReviews] = useState("");
  const { user } = useContext(AuthContext);
  const singleService = useLoaderData();
  const { _id, foodDescription, foodName, foodPrice, photoURL } = singleService;

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const ratings = form.ratings.value;
    const displayName = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const review = form.review.value;
    const time = new Date().getTime();
    const reviewData = {
      foodService: _id,
      ratings,
      displayName,
      photoURL,
      review,
      email,
      foodName,
      time,
    };
    // setReviews(reviewData);
    console.log(reviewData);
    fetch(
      "b6a11-service-review-server-side-md-pervez-hossain.vercel.app/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Added", { autoClose: 500 });
          event.target.reset();
        }
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 500 });
      });
  };

  useEffect(() => {
    fetch(
      `b6a11-service-review-server-side-md-pervez-hossain.vercel.app/reviews?foodService=${_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllReviews(data);
        // console.log(data);
      });
  }, [allReviews, _id]);

  return (
    <div className="md:w-9/12 mx-auto my-16 p-4">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div>
            <img src={photoURL} alt="" />
          </div>
          <div>
            <h2 className="text-3xl font-bold my-3 capitalize">{foodName}</h2>
            <p className="font-bold text-xl mb-3">
              Price :{" "}
              <span className="font-normal text-xl mb-3"> {foodPrice} BDT</span>
            </p>
            <p>{foodDescription} </p>

            <button className="bg-red-600 font-bold text-xl px-5 py-3 my-3 text-white">
              Order Now
            </button>
            <Link to="/allservice">
              <button className="bg-red-600 font-bold text-xl px-5 py-3 my-3 text-white ml-3">
                Order Cancel
              </button>
            </Link>
          </div>
        </div>
        <div>
          {user?.uid ? (
            <>
              <form onSubmit={handleReviewSubmit}>
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
            </>
          ) : (
            <>
              <p className="text-3xl font-bold text-red-600">
                Please login to Add a Review
              </p>
              <Link to="/login">
                <button className="bg-red-600  font-bold text-xl px-5 py-3 my-3 text-white">
                  Login
                </button>
              </Link>
            </>
          )}
          <div className="my-10">
            {allReviews?.map((reviews) => (
              <Reviews key={reviews._id} reviews={reviews}></Reviews>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceAndReview;
