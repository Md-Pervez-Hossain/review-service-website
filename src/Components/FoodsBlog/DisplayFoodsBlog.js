import React from "react";
import { Link } from "react-router-dom";

const DisplayFoodsBlog = ({ foodBlog }) => {
  const { _id, title, details, image, img, name } = foodBlog;
  return (
    <div
      className="shadow-lg"
      data-aos="fade-left"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "200px",
        }}
      ></div>
      <div className="p-3">
        <h2 className="text-xl mt-5 mb-3 font-bold">
          {title?.length >= 20 ? <>{`${title?.slice(0, 20)} ...`}</> : <></>}
        </h2>
        <p className="mb-2">
          {details?.length >= 70 ? (
            <>{`${details?.slice(0, 70)} ...`}</>
          ) : (
            <>{`${details}`}</>
          )}
        </p>
        <Link to={`/foodsBlog/${_id}`}>
          <button className="font-bold">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayFoodsBlog;
