import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
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
    const reviewData = {
      foodService: _id,
      ratings,
      displayName,
      photoURL,
      review,
      email,
    };
    // setReviews(reviewData);
    console.log(reviewData);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Review Added");
          event.target.reset();
        }
        console.log(data);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?foodService=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setAllReviews(data);
        // console.log(data);
      });
  }, [allReviews]);

  const handleDelete = (_id) => {
    const agree = window.confirm("Are You Sure ? You Want To Delete");
    if (agree) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.error(error));
    }
  };

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
              <Reviews
                key={reviews._id}
                reviews={reviews}
                handleDelete={handleDelete}
              ></Reviews>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceAndReview;
