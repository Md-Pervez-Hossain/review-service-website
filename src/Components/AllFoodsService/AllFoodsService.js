import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayAllFoodsService from "./DisplayAllFoodsService";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";

const AllFoodsService = () => {
  const foodsService = useLoaderData();
  const [fooodService, setFooodService] = useState(foodsService);
  document.title = "All Foods Service Page";
  console.log(foodsService);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, [1000]);
  }, []);

  const handleDeleteService = (_id) => {
    const agree = window.confirm("Are You Sure ? You Want to Delete");
    if (agree) {
      fetch(`http://localhost:5000/addservices/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Successfully Deleted", { autoClose: 500 });
            const remaining = fooodService.filter((food) => food._id !== _id);
            setFooodService(remaining);
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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
                handleDeleteService={handleDeleteService}
              ></DisplayAllFoodsService>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllFoodsService;
