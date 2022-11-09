import React, { useState } from "react";
import { useContext } from "react";
import { FadeLoader } from "react-spinners";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  document.title = "Signup Page";
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const username = form.username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setIsLoading(false);
        updateUserProfile(username, photoURL)
          .then(() => {})
          .catch(() => {});
        if (user?.uid) {
          toast.success("User SuccessFully Created", { autoClose: 500 });
          form.reset();
          navigate("/");
        }
        console.log(user);
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 500 });
        setIsLoading(false);
      });
    console.log(username, photoURL, email, password);
  };

  return (
    <div>
      <div className="md:w-2/5 mx-auto my-16  bg-gray-100 shadow-2xl p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Signup</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              PhotoURL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="photoURL"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          {isLoading ? (
            <>
              <FadeLoader
                color={"#f40b66"}
                loading={isLoading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </>
          ) : (
            <>
              <button className="block w-full p-3 text-center font-bold bg-red-600 text-white text-xl rounded-sm dark:text-gray-900 dark:bg-violet-400">
                Sign up
              </button>
            </>
          )}
        </form>

        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Registered account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline dark:text-gray-100"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
