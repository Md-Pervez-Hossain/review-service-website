import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="bg-red-600 py-8 text-white">
      <div className="w-9/12 mx-auto font-bold text-2xl ">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <Link to="/home">Food Logo</Link>
          </div>
          <div className="flex gap-5">
            {user?.uid ? (
              <>
                <Link to="/home">Home</Link>{" "}
                <Link to="/addservice">Add Service</Link>{" "}
                <Link to="/" onClick={handleLogOut}>
                  Signout
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link to="/home">Home</Link> <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
