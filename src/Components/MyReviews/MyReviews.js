import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "../AuthProvider/AuthProvider";
import DisplayMyReviews from "./DisplayMyReviews";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyReviews = () => {
  document.title = "MyReview Page";
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  console.log(myReviews);

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
      <div>
        {myReviews.length <= 0 ? (
          <>
            <p className="text-2xl font-bold text-red-600 text-center">
              No reviews were added
            </p>
          </>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Food Name</th>
                    <th>Review</th>
                    <th>Ratings</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myReviews?.map((myReview, idx) => {
                    return (
                      <>
                        <tr>
                          <th>{idx + 1}</th>
                          <td>{myReview?.foodName}</td>
                          <td>{myReview?.review}</td>
                          <td>{myReview?.ratings}</td>
                          <td>
                            <div className="flex gap-5 items-center">
                              <button>
                                <div className="flex items-center gap-2">
                                  <FaEdit></FaEdit>
                                  <p>Edit</p>
                                </div>
                              </button>
                              <button>
                                {" "}
                                <div
                                  onClick={() => handleDelete(myReview?._id)}
                                  className="flex items-center gap-2"
                                >
                                  <FaTrash></FaTrash>
                                  <p>Delete</p>
                                </div>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
