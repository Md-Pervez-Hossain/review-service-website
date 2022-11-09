import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [feedBack, setFeedBack] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    // setIsLoading(true);
    fetch(
      "b6a11-service-review-server-side-md-pervez-hossain.vercel.app/feedback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedBack),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("FeedBack added", { autoClose: 500 });
          event.target.reset();
          // setIsLoading(false);
        }
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 500 });
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newFeedBack = { ...feedBack };
    newFeedBack[field] = value;
    setFeedBack(newFeedBack);
  };
  return (
    <div className="bg-gray-100 my-16">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-red-600 leading-tight lg:text-5xl">
              Let's talk!
            </h2>
          </div>
          <img
            src="https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669538jccuo.png"
            alt=""
            className="p-6 "
          />
        </div>
        <form
          onSubmit={handleFeedbackSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <input
              onBlur={handleInputBlur}
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <input
              onBlur={handleInputBlur}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <textarea
              onBlur={handleInputBlur}
              id="feedback"
              rows="7"
              name="feedback"
              placeholder="Your FeedBack"
              required
              className="w-full p-3 rounded dark:bg-gray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold bg-red-600 text-white tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Send FeedBack
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
