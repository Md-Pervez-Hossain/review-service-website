import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-100 py-5">
      <div className="w-9/12 mx-auto font-bold text-2xl ">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">Food Logo</Link>
          </div>
          <div className="flex gap-5">
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
