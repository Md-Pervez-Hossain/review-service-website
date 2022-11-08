import React from "react";
import { Link } from "react-router-dom";

const DiscountBanner = () => {
  return (
    <div className="p-6 py-12 bg-red-600 text-white dark:bg-violet-400 dark:text-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">
            Up to 50% Off
          </h2>
          <p className="text-2xl font-bold"> Plus free Delivery</p>
          <Link
            to="/allservice"
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 py-3 text-2xl font-bold rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
