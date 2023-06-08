import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../../assets/foodValey logo.png";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useEffect } from "react";

const Header = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/cart`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCartProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="sticky top-0 bg-white   z-50 ">
      <div class="w-9/12 mx-auto py-4 ">
        <div class="relative flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="" className="h-16" />
          </Link>
          <ul className="flex items-center hidden space-x-6 lg:flex font-semibold text-[20px]">
            {user?.uid && user?.email ? (
              <>
                <NavLink to="/">
                  <li className="font-bold hover:text-red-600 duration-500">
                    Home
                  </li>
                </NavLink>
                <NavLink to="/">
                  <li className="font-bold hover:text-red-600 duration-500">
                    About
                  </li>
                </NavLink>
                <NavLink to="/contact">
                  <li className="font-bold  hover:text-red-600 duration-500">
                    Contact
                  </li>
                </NavLink>
                <NavLink to="/cart">
                  <li className="font-bold">
                    <span className="ml-5 mb-[-50px]">
                      {cartProduct?.length}
                    </span>
                    <FaCartPlus className="hover:text-red-600 mb-8 duration-500"></FaCartPlus>
                  </li>
                </NavLink>
                <NavLink to="/wishlist">
                  <li className="font-bold">
                    <FaHeart className="hover:text-red-600 duration-500"></FaHeart>
                  </li>
                </NavLink>
                <div className="dropdown  dropdown-end">
                  <label tabIndex={0}>
                    <img
                      src={`${user?.photoURL}`}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  bg-gray-100 px-8 py-2 w-72  rounded-lg  mt-3"
                  >
                    <NavLink>
                      <p className="mb-3 font-bold">{user?.displayName}</p>
                    </NavLink>
                    <NavLink to="/dashboard">
                      <p className="mb-3 font-bold">Dashboard</p>
                    </NavLink>
                    {user?.email === "p.hossain9254@gmail.com" ? (
                      <>
                        <NavLink to="/login" onClick={() => handleLogout()}>
                          <li className="mb-3 font-bold">Signout</li>
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink to="/login" onClick={() => handleLogout()}>
                          <li className="mb-3 font-bold">Signout</li>
                        </NavLink>
                      </>
                    )}
                  </ul>
                </div>
              </>
            ) : (
              <>
                {" "}
                <NavLink to="/login">
                  <li>Login</li>
                </NavLink>
              </>
            )}
          </ul>

          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/">
                        <img src={logo} alt="" className="h-16" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      {user?.uid && user?.email ? (
                        <>
                          <NavLink to="/">
                            <li>Home</li>
                          </NavLink>
                          <NavLink to="/">
                            <li>About</li>
                          </NavLink>
                          <NavLink to="/">
                            <li>Contact</li>
                          </NavLink>{" "}
                          <div className="dropdown  dropdown-end">
                            <label tabIndex={0}>
                              <img
                                src={`${user?.photoURL}`}
                                alt=""
                                className="w-12 h-12 rounded-full"
                              />
                            </label>
                            <ul
                              tabIndex={0}
                              className="dropdown-content bg-gray-100 p-4 w-52  rounded-lg  mt-3"
                            >
                              <NavLink>
                                <p className="mb-3 font-bold">
                                  {user?.displayName}
                                </p>
                              </NavLink>
                              <NavLink to="/dashboard">
                                <p className="mb-3 font-bold">Dashboard</p>
                              </NavLink>
                              <NavLink
                                to="/login"
                                onClick={() => handleLogout()}
                              >
                                <li className="mb-3">Signout</li>
                              </NavLink>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <NavLink to="/login">
                            <li>Login</li>
                          </NavLink>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
