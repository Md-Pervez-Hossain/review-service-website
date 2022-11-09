import React, { useContext, useEffect, useState } from "react";

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
            alert("Review Delated");
            const remaining = myReviews.filter((review) => review._id !== _id);
            setMyReviews(remaining);
          }
          console.log(data);
        })
        .catch((error) => console.error(error));
    }
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
              ></DisplayMyReviews>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
