import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddService from "./Components/AddService/AddService";
import AllFoodsService from "./Components/AllFoodsService/AllFoodsService";
import Home from "./Components/Home/Home";
import Main from "./Components/Layout/Main";
import Login from "./Components/Login/Login";
import PrivateRoutes from "./Components/Routes/PrivateRoutes";
import Signup from "./Components/Signup/Signup";
import SingleServiceAndReview from "./Components/SingleServiceAndReview/SingleServiceAndReview";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
          loader: () => fetch("http://localhost:5000/addservice"),
        },
        {
          path: "/allservice",
          element: <AllFoodsService></AllFoodsService>,
          loader: () => fetch("http://localhost:5000/addservice"),
        },
        {
          path: "/allservice/:id",
          element: <SingleServiceAndReview></SingleServiceAndReview>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/addservice/${params.id}`),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "/addservice",
          element: (
            <PrivateRoutes>
              <AddService></AddService>
            </PrivateRoutes>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
