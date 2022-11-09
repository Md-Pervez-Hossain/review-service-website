import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayClientFeedback from "./DisplayClientFeedback";

const ClientFeedback = () => {
  const clientFeedBack = useLoaderData();
  return (
    <div className="md:w-9/12 mx-auto my-16">
      {clientFeedBack.length <= 0 ? (
        <>
          <p>No Feedback yet</p>
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-10 p-4">
            {clientFeedBack.map((feedBack) => (
              <DisplayClientFeedback
                key={feedBack._id}
                feedBack={feedBack}
              ></DisplayClientFeedback>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ClientFeedback;
