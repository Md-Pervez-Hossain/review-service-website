import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DisplayServices from "../Home/DisplayServices";
import { Link } from "react-router-dom";

const FoodsCategory = () => {
  const [foodsService, setFoodsService] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data

    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/addservice"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodsService(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 500 });
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default FoodsCategory;
