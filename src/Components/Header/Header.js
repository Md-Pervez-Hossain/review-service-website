import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
    <div className="bg-red-600  text-white">
      <div className="md:w-9/12 mx-auto font-bold text-2xl p-4 ">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/">
                <img src={logo} alt="" className="h-16" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <div className="flex gap-3 items-center  flex-col md:flex-row ">
                  {user?.uid ? (
                    <>
                      <Link
                        to="/addservice"
                        className="text-white text-decoration-none"
                      >
                        Add Service
                      </Link>{" "}
                      <Link
                        to="/myreviews"
                        className="text-white text-decoration-none"
                      >
                        My Reviews
                      </Link>{" "}
                      <Link
                        to="/feedback"
                        className="text-white text-decoration-none"
                      >
                        Client Feddback
                      </Link>{" "}
                      <Link
                        to="/Blog"
                        className="text-white text-decoration-none"
                      >
                        Blog
                      </Link>
                      <Link
                        to="/"
                        onClick={handleLogOut}
                        className="text-white text-decoration-none"
                      >
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
                      <Link
                        to="/Blog"
                        className="text-white text-decoration-none"
                      >
                        Blog
                      </Link>
                      <Link
                        to="/login"
                        className="text-white text-decoration-none"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="text-white text-decoration-none"
                      >
                        Signup
                      </Link>
                    </>
                  )}
                </div>

                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* <div className="flex items-center justify-between flex-col md:flex-row">
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
        </div> */}
      </div>
    </div>
  );
};

export default Header;
