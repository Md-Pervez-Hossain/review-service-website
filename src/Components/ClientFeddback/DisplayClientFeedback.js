import React from "react";

const DisplayClientFeedback = ({ feedBack }) => {
  const { name, email, feedback } = feedBack;
  return (
    <div className="bg-gray-100 p-5 shadow-xl">
      <h2 className="text-xl font-bold text-red-600">
        Client's Name : <span className="font-normal text-black">{name}</span>{" "}
      </h2>
      <h2 className="text-xl font-bold text-red-600">
        Client's Email : <span className="font-normal text-black">{email}</span>
      </h2>
      <h2 className="text-xl font-bold text-red-600">
        Client's FeedBack :{" "}
        <span className="font-normal text-black">{feedback}</span>
      </h2>
    </div>
  );
};

export default DisplayClientFeedback;
