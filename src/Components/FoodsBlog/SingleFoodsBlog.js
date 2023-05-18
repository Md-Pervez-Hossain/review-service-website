import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleFoodsBlog = () => {
  const singleFoodsblogInfo = useLoaderData();
  const { _id, title, details, date, image, img, name } = singleFoodsblogInfo;
  return (
    <div className="w-9/12 mx-auto py-16">
      <div className="flex md:flex-row flex-col gap-16">
        <div className="md:basis-8/12">
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "400px",
            }}
          ></div>
          <div className="p-3">
            <h2 className="text-3xl font-bold mt-5 mb-3">{title}</h2>
            <h2 className="mb-5">{details}</h2>
            <div className="flex gap-5 items-center justify-between">
              <div>
                <div className="flex items-center gap-5">
                  <div
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "50px",
                      width: "50px",
                    }}
                    className=" rounded-full"
                  ></div>
                  <div>
                    <h2>{name}</h2>
                    <h2>{date}</h2>
                  </div>
                </div>
              </div>
              <div>
                <h2>Comments : {0}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="md:basis-4/12">
          <form>
            <textarea
              className="textarea textarea-bordered w-full mb-3"
              placeholder="Type Comments"
            ></textarea>
            <button className=" bg-red-600 px-6 py-3 rounded-lg text-white">
              Comments
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodsBlog;
