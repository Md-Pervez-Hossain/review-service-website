import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  document.title = "Add Service Page";
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddFoodService = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const foodName = form.foodName.value;
    const foodPrice = form.foodPrice.value;
    const foodDescription = form.foodDescription.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(
      "https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const image = data?.data?.display_url;
        const foodsInfo = {
          foodName,
          foodPrice,
          foodDescription,
          image,
        };
        fetch(
          "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/addservice",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(foodsInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Service added", { autoClose: 500 });
              event.target.reset();
              navigate("/");
              setIsLoading(false);
            }
            console.log(data);
          })
          .catch((error) => {
            toast.error(error.message, { autoClose: 500 });
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="  bg-gray-100 shadow-lg my-16 p-4">
      {isLoading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
          </div>
        </>
      ) : (
        <>
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
                  <input
                    type="text"
                    name="foodName"
                    id="foodName"
                    placeholder="Food Name"
                    required
                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <input
                    name="image"
                    type="file"
                    className="file-input file-input-bordered w-full "
                  />
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="foodPrice"
                  id="foodPrice"
                  placeholder="Food Price"
                  required
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <textarea
                  name="foodDescription"
                  id=""
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
        </>
      )}
    </div>
  );
};

export default AddService;
