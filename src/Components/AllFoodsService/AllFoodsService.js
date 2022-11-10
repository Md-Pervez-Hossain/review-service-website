import React, { useEffect, useState } from "react";

import DisplayAllFoodsService from "./DisplayAllFoodsService";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";

const AllFoodsService = () => {
  // const foodsService = useLoaderData();
  const [fooodService, setFooodService] = useState([]);
  document.title = "All Foods Service Page";
  const [isLoading, setIsLoading] = useState(false);
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
    <div className="md:w-9/12 mx-auto p-4">
      {isLoading ? (
        <>
          <FadeLoader
            color={"#f40b66"}
            loading={isLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        <>
          <h2 className=" text-7xl font-bold my-16 text-center">
            My Foods service
          </h2>
          <div className="grid md:grid-cols-3 gap-10 my-16">
            {fooodService?.map((foodService) => (
              <DisplayAllFoodsService
                key={foodService._id}
                foodService={foodService}
              ></DisplayAllFoodsService>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllFoodsService;
