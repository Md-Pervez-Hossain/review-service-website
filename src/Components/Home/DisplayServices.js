import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const DisplayServices = ({ serviceInfo }) => {
  const { foodName, photoURL, foodPrice, foodDescription } = serviceInfo;
  return (
    <div className="bg-yellow-300 border p-4 ">
      <div>
        <PhotoProvider>
          <PhotoView src={photoURL}>
            <img src={photoURL} alt="" className="w-full h-72" />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div>
        <h2 className="text-3xl font-bold my-3">{foodName}</h2>
        <p className="font-bold text-xl mb-3">
          Price : <span className="font-normal text-xl mb-3"> {foodPrice}</span>
        </p>
        <p>{foodDescription.slice(0, 100)}</p>
        <button className="bg-red-600 font-bold text-xl px-5 py-3 my-3 text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default DisplayServices;
