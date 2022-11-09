import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.info("Successfully Loged Out", { autoClose: 500 });
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 5000 });
      });
  };
  return (
    <div className="bg-red-600 py-8 text-white">
      <div className="w-9/12 mx-auto font-bold text-2xl ">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <Link to="/">
              <img src={logo} alt="" className="h-16" />
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            {user?.uid ? (
              <>
                <Link to="/addservice">Add Service</Link>{" "}
                <Link to="/myreviews">My Reviews</Link>{" "}
                <Link to="/feedback">Client Feddback</Link>{" "}
                <Link to="/Blog">Blog</Link>
                <Link to="/" onClick={handleLogOut}>
                  Signout
                </Link>
                <img
                  src={user?.photoURL}
                  alt=""
                  className="h-16 rounded-full"
                />
              </>
            ) : (
              <>
                <Link to="/Blog">Blog</Link>
                <Link to="/login">Login</Link>
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
