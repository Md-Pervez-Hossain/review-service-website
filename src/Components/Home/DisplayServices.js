import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const DisplayServices = ({ serviceInfo }) => {
  const { _id, foodName, photoURL, foodPrice, foodDescription } = serviceInfo;

  return (
    <div className=" p-4 shadow-xl ">
      <div>
        <PhotoProvider>
          <PhotoView src={photoURL}>
            <div
              style={{
                backgroundImage: `url(${photoURL})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "200px",
              }}
            ></div>
          </PhotoView>
        </PhotoProvider>
      </div>
      <div>
        <div>
          <h2 className="text-xl font-bold mt-3 mb-2 ">
            {foodName?.length >= 10 ? (
              <>{`${foodName.slice(0, 10)} ...`}</>
            ) : (
              <>{foodName}</>
            )}
          </h2>
          <div className="mb-2">
            <p className="font-bold mb-0  ">
              Price : $ <span className="font-normal "> {foodPrice}</span>
            </p>
            <p>
              {foodDescription.length >= 70 ? (
                <>
                  <p className="mb-0">
                    {foodDescription?.slice(0, 70) + " ..."}
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-0">{foodDescription}</p>
                </>
              )}
            </p>
          </div>
          <Link to={`/allservice/${_id}`}>
            <button className=" font-bold text-red-600 ">Read More </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayServices;
