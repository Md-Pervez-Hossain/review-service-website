import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "../AuthProvider/AuthProvider";
import DisplayMyReviews from "./DisplayMyReviews";

const MyReviews = () => {
  document.title = "MyReview Page";
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/reviewss?email=${user?.email}`,
      {
        headers: {
          authorization: `Baerer ${localStorage.getItem("token")}`,
          "content-type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.status === 400 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMyReviews(data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [user?.email, setMyReviews, logOut]);

  const handleDelete = (_id) => {
    const agree = window.confirm("Are You Sure ? You Want To Delete");
    if (agree) {
      fetch(
        `https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/reviews/${_id}`,
        {
          method: "DELETE",
        }
      )
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
