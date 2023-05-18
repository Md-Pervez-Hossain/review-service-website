import React, { useEffect, useState } from "react";
import DisplayFoodsBlog from "./DisplayFoodsBlog";

const ShowFoodsBlog = () => {
  const [foodsBlog, setFoodsBlog] = useState([]);
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/foodsBlog"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodsBlog(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold my-5"> Foods Blog </h2>
      <div className="grid md:grid-cols-3 gap-10 ">
        {foodsBlog?.map((foodBlog) => (
          <DisplayFoodsBlog
            key={foodBlog?._id}
            foodBlog={foodBlog}
          ></DisplayFoodsBlog>
        ))}
      </div>
    </div>
  );
};

export default ShowFoodsBlog;
