import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "../AuthProvider/AuthProvider";
import DisplayMyReviews from "./DisplayMyReviews";

const MyReviews = () => {
  document.title = "MyReview Page";
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewss?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyReviews(data);
      });
  }, [user?.email, setMyReviews]);

  const handleDelete = (_id) => {
    const agree = window.confirm("Are You Sure ? You Want To Delete");
    if (agree) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.warning("Review Deleted", { autoClose: 500 });
            const remaining = myReviews.filter((review) => review._id !== _id);
            setMyReviews(remaining);
          }
          console.log(data);
        })
        .catch((error) => {
          toast.error(error.message, { autoClose: 500 });
        });
    }
  };
  const handleMyReviewEdit = (_id) => {
    console.log(_id);
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid md:grid-cols-3 gap-10">
        {myReviews.length <= 0 ? (
          <>
            <p className="text-2xl font-bold text-red-600 text-center">
              No reviews were added
            </p>
          </>
        ) : (
          <>
            {myReviews?.map((myReview) => (
              <DisplayMyReviews
                key={myReview._id}
                myReview={myReview}
                handleDelete={handleDelete}
                handleMyReviewEdit={handleMyReviewEdit}
              ></DisplayMyReviews>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
