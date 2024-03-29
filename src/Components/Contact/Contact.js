import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [feedBack, setFeedBack] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const name = user?.displayName;
    const email = user?.email;
    const feedback = form.feedback.value;
    const img = user?.photoURL;

    const feedBackInfo = {
      name,
      email,
      img,
      feedback,
    };

    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/feedback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedBackInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          event.target.reset();
          // setIsLoading(false);
          setLoading(false);
        }
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 500 });
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-100 my-16">
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
          </div>
        </>
      ) : (
        <>
          <div className="grid max-w-screen-xl items-center grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
            <div
              className="flex flex-col justify-between"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
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
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <form
                onSubmit={handleFeedbackSubmit}
                className="space-y-6 ng-untouched ng-pristine ng-valid"
              >
                <div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    readOnly
                    placeholder="Name"
                    required
                    className="w-full p-3 rounded dark:bg-gray-800"
                  />
                </div>
                <div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    readOnly
                    placeholder="Email"
                    required
                    className="w-full p-3 rounded dark:bg-gray-800"
                  />
                </div>
                <div>
                  <textarea
                    id="feedback"
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
        </>
      )}
    </div>
  );
};

export default Contact;
