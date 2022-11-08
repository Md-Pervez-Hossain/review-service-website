import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Reviews from "./Reviews";

const SingleServiceAndReview = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [review, setReview] = useState("");
  const { user } = useContext(AuthContext);
  const singleService = useLoaderData();
  const { foodDescription, foodName, foodPrice, photoURL } = singleService;

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setAllReviews(data);
        console.log(data);
      });
  }, []);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const ratings = form.ratings.value;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;
    const review = form.review.value;
    const reviewData = {
      ratings,
      displayName,
      photoURL,
      review,
    };
    setReview(reviewData);
    console.log(review);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Review Added");
          event.target.reset();
        }
        setReview(data);
        console.log(data);
      });
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid grid-cols-2 gap-10">
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
                  />
                  <input
                    type="text"
                    name="displayName"
                    placeholder="displayName"
                    className="w-full mb-5 px-5 py-5"
                    defaultValue={user?.displayName}
                  />
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    className="w-full mb-5 px-5 py-5"
                    defaultValue={user?.photoURL}
                  />
                  <textarea
                    name="review"
                    id=""
                    cols="20"
                    rows="10"
                    className="w-full px-5 py-5"
                    placeholder="Review"
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
                Please login to give review
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
