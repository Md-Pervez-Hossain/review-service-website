import React, { useEffect, useState } from "react";

import DisplayAllFoodsService from "./DisplayAllFoodsService";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AllFoodsService = () => {
  // const foodsService = useLoaderData();
  const [fooodService, setFooodService] = useState([]);
  document.title = "All Foods Service Page";
  const [isLoading, setIsLoading] = useState(false);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(6);
  //   const [reviews, setReviews] = useState("");

  const handlePrevious = () => {
    console.log("Clicked previous");
    if (previous > 0) {
      setPrevious(previous - 6);
      setNext(next - 6);
    }
  };
  const handleNext = () => {
    setPrevious(previous + 6);
    setNext(next + 6);
  };
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/addservices"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFooodService(data);
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 500 });
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, [1000]);
  }, []);

  return (
    <div className="md:w-9/12 mx-auto my-16 p-4">
      {isLoading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
          </div>
        </>
      ) : (
        <>
          <h2 className=" text-4xl font-bold my-5 ">All Foods Category</h2>
          <div className="grid md:grid-cols-3 gap-10 ">
            {fooodService?.slice(previous, next).map((foodService) => (
              <DisplayAllFoodsService
                key={foodService._id}
                foodService={foodService}
              ></DisplayAllFoodsService>
            ))}
          </div>
        </>
      )}
      <div className="flex items-end justify-end gap-2 mt-8">
        <button onClick={() => handlePrevious()}>
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          disabled={next > fooodService?.length}
          onClick={() => handleNext()}
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default AllFoodsService;
