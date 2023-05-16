import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="sticky top-0 bg-gray-100 z-50 ">
      <div class="md:w-9/12 mx-auto py-8 px-8 ">
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <svg
              class="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Company
            </span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex font-semibold text-[20px]">
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
                    <NavLink to="/myreviews">
                      <li className="mb-3">{user?.displayName}</li>
                    </NavLink>
                    <NavLink to="/myreviews">
                      <li className="mb-3">All Reviews</li>
                    </NavLink>
                    <NavLink to="/addservice">
                      <li className="mb-3">Add Service</li>
                    </NavLink>
                    <NavLink to="/feedback">
                      <li className="mb-3">Clients FeedBack</li>
                    </NavLink>
                    <NavLink to="/login" onClick={() => handleLogout()}>
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
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>
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
                              <NavLink to="/myreviews">
                                <li className="mb-3">{user?.displayName}</li>
                              </NavLink>
                              <NavLink to="/myreviews">
                                <li className="mb-3">All Reviews</li>
                              </NavLink>
                              <NavLink to="/addservice">
                                <li className="mb-3">Add Service</li>
                              </NavLink>
                              <NavLink to="/feedback">
                                <li className="mb-3">Clients FeedBack</li>
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
