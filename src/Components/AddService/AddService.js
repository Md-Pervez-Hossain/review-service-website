import React from "react";
import { useState } from "react";

const AddService = () => {
  const [foodService, setFoodService] = useState("");

  const handleAddFoodService = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Service Added");
          event.target.reset();
        }
        console.log(data);
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
    <div className="md:w-1/2 mx-auto bg-yellow-300 my-16 p-4">
      <div className="w-full  p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">
          Add Your Food Service
        </h1>
        <form
          onSubmit={handleAddFoodService}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
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
              cols="30"
              rows="10"
              placeholder="Food Description"
              required
              className="w-full  rounded-md px-5 py-8"
            ></textarea>
          </div>

          <button className="block w-full p-3 text-center rounded-md bg-red-600 text-white font-bold text-2xl dark:text-gray-900 dark:bg-violet-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
