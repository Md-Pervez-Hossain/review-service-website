import React from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const DisplayServices = ({ serviceInfo }) => {
  const { _id, foodName, photoURL, foodPrice, foodDescription } = serviceInfo;
  const handleCart = (serviceInfo) => {
    console.log(serviceInfo);
    const cartInfo = {
      ...serviceInfo,
      quantity: 1,
      status: false,
    };
    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Add To Cart");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className=" p-4 shadow-xl "
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="false"
    >
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
          </div>
          <div className="flex justify-between">
            <div>
              {" "}
              <Link to={`/allservice/${_id}`}>
                <button className=" font-bold text-red-600 ">Read More </button>
              </Link>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <FaCartPlus onClick={() => handleCart(serviceInfo)}></FaCartPlus>
              <FaHeart></FaHeart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayServices;
