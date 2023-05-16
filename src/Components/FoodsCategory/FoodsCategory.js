import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DisplayServices from "../Home/DisplayServices";
import { Link } from "react-router-dom";

const FoodsCategory = () => {
  const [foodsService, setFoodsService] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // console.log(foodService);
  useEffect(() => {
    // setIsLoading(true);
    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/addservice"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodsService(data);
        // setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 500 });
        // setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <div>
        <h2 className="md:text-4xl  font-bold mb-5 ">Foods Category</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 ">
        {foodsService?.map((serviceInfo) => (
          <DisplayServices
            key={serviceInfo._id}
            serviceInfo={serviceInfo}
          ></DisplayServices>
        ))}
      </div>

      <div className="text-center my-16">
        <Link to="/allservice">
          <button
            type="button"
            className="px-8 py-3 font-bold text-3xl border rounded border-red-600 text-red-600  dark:text-gray-100"
          >
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodsCategory;
