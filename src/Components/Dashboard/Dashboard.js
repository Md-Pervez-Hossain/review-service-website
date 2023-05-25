import React from "react";
import { useContext } from "react";
import {
  FaAlignJustify,
  FaBlog,
  FaCartPlus,
  FaRegPlusSquare,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/foodValey logo.png";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/users/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [user?.email]);
  const handleLogout = () => {};
  return (
    <div className="w-9/12 mx-auto ">
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
          </div>
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="col-span-1 shadow-md h-screen px-8 pt-16">
              <div>
                <NavLink to="/">
                  <img src={logo} alt="" className="h-14 mb-5  " />
                </NavLink>
                <div>
                  <img
                    src={`${user?.photoURL}`}
                    alt=""
                    className="h-24 w-24 rounded-full border-2 border-red-600 mb-5"
                  />
                </div>
                <NavLink to="/dashboard">
                  {" "}
                  <h2 className="mb-2 font-bold text-xl">
                    {" "}
                    <FaAlignJustify className="inline-block mb-2 mr-2"></FaAlignJustify>{" "}
                    DashBoad
                  </h2>
                </NavLink>
              </div>
              {users?.role === "admin" ? (
                <>
                  {" "}
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-red-600   font-bold" : "text-black-500 "
                    }
                    to="addservice"
                  >
                    <p className="mb-2 font-bold text-xl">
                      {" "}
                      <FaRegPlusSquare className="inline-block mb-2 mr-2"></FaRegPlusSquare>{" "}
                      Add Products
                    </p>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-red-600 font-bold" : "text-black-500 "
                    }
                    to="Foodsblog"
                  >
                    <p className="mb-2 font-bold text-xl">
                      {" "}
                      <FaBlog className="inline-block mb-2 mr-2"></FaBlog>
                      Foods Blog
                    </p>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-red-600 font-bold" : "text-black-500 "
                    }
                    to="orders"
                  >
                    <p className="mb-2 font-bold text-xl">
                      {" "}
                      <FaCartPlus className="inline-block mb-2 mr-2"></FaCartPlus>
                      All Orders
                    </p>
                  </NavLink>
                  <NavLink>
                    <button
                      onClick={() => handleLogout()}
                      className="mb-2 font-bold text-xl bg-red-600 rounded-md mt-3 px-4 py-2 text-white"
                    >
                      Logout
                    </button>
                  </NavLink>
                </>
              ) : (
                <>
                  {" "}
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-red-600 font-bold" : "text-black-500 "
                    }
                    to={`orders/${user?.email}`}
                  >
                    <p className="mb-2 font-bold text-xl">
                      {" "}
                      <FaRegPlusSquare className="inline-block mb-2 mr-2"></FaRegPlusSquare>{" "}
                      My Orders
                    </p>
                  </NavLink>
                  <NavLink>
                    <p className="mb-2 font-bold text-xl">
                      <FaRegPlusSquare className="inline-block mb-2 mr-2"></FaRegPlusSquare>{" "}
                      Logout
                    </p>
                  </NavLink>
                </>
              )}
            </div>
            <div className="col-span-2">
              <Outlet></Outlet>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
