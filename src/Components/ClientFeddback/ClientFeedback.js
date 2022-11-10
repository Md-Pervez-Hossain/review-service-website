import React, { useEffect, useState } from "react";

import DisplayClientFeedback from "./DisplayClientFeedback";

const ClientFeedback = () => {
  const [feedBacks, setFeedBacks] = useState([]);
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/feedback"
    )
      .then((res) => res.json())
      .then((data) => {
        setFeedBacks(data);
      });
  }, []);
  return (
    <div className="md:w-9/12 mx-auto my-16">
      {feedBacks?.length <= 0 ? (
        <>
          <p>No Feedback yet</p>
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-10 p-4">
            {feedBacks?.map((feedBack) => (
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
