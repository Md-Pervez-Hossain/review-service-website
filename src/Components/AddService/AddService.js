import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";

const AddService = () => {
  document.title = "Add Service Page";
  const [foodService, setFoodService] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddFoodService = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/addservice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foodService),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service added", { autoClose: 500 });
          event.target.reset();
          setIsLoading(false);
        }
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 500 });
        setIsLoading(false);
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newService = { ...foodService };
    newService[field] = value;
    setFoodService(newService);
  };
  return (
    <div className="md:w-1/2 mx-auto  bg-gray-100 shadow-lg my-16 p-4">
      <div className="w-full  p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">
          Add Your Food Service
        </h1>
        <form
          onSubmit={handleAddFoodService}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="username"
                className="block font-semibold text-xl mb-2 dark:text-gray-400"
              >
                Food Service Name
              </label>
              <input
                onBlur={handleInputBlur}
                type="text"
                name="foodName"
                id="foodName"
                placeholder="Food Service Name"
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label
                htmlFor="username"
                className="block font-semibold text-xl mb-2 dark:text-gray-400"
              >
                Food Photo
              </label>
              <input
                onBlur={handleInputBlur}
                type="text"
                name="photoURL"
                id="photoURL"
                placeholder="Photo URL"
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label
              htmlFor="username"
              className="block font-semibold text-xl mb-2 dark:text-gray-400"
            >
              Food Price
            </label>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="foodPrice"
              id="foodPrice"
              placeholder="Food Price"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label
              htmlFor="username"
              className="block font-semibold text-xl mb-2 dark:text-gray-400"
            >
              Food Description
            </label>
            <textarea
              onBlur={handleInputBlur}
              name="foodDescription"
              id=""
              placeholder="Food Description"
              required
              className="w-full  rounded-md px-5 py-8"
            ></textarea>
          </div>

          {isLoading ? (
            <>
              <FadeLoader
                color={"#f40b66"}
                loading={isLoading}
                size={50}
                className="text-center"
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </>
          ) : (
            <>
              <button className="block w-full p-3 text-center rounded-md bg-red-600 text-white font-bold text-2xl dark:text-gray-900 dark:bg-violet-400">
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddService;
