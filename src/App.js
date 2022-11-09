import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddService from "./Components/AddService/AddService";
import AllFoodsService from "./Components/AllFoodsService/AllFoodsService";
import Blog from "./Components/Blog/Blog";
import ClientFeedback from "./Components/ClientFeddback/ClientFeedback";
import Home from "./Components/Home/Home";
import Main from "./Components/Layout/Main";
import Login from "./Components/Login/Login";
import EditMyReview from "./Components/MyReviews/EditMyReview";
import MyReviews from "./Components/MyReviews/MyReviews";
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
          loader: () =>
            fetch(
              "b6a11-service-review-server-side-md-pervez-hossain.vercel.app/addservice"
            ),
        },
        {
          path: "/allservice",
          element: <AllFoodsService></AllFoodsService>,
          loader: () =>
            fetch(
              "b6a11-service-review-server-side-md-pervez-hossain.vercel.app/addservices"
            ),
        },
        {
          path: "/allservice/:id",
          element: <SingleServiceAndReview></SingleServiceAndReview>,
          loader: ({ params }) =>
            fetch(
              `b6a11-service-review-server-side-md-pervez-hossain.vercel.app/addservice/${params.id}`
            ),
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
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/feedback",
          element: <ClientFeedback></ClientFeedback>,
          loader: () =>
            fetch(
              "b6a11-service-review-server-side-md-pervez-hossain.vercel.app/feedback"
            ),
        },
        {
          path: "/reviewss/:id",
          element: <EditMyReview></EditMyReview>,
          loader: ({ params }) =>
            fetch(
              `b6a11-service-review-server-side-md-pervez-hossain.vercel.app/reviewss/${params.id}`
            ),
        },
        {
          path: "/myreviews",
          element: (
            <PrivateRoutes>
              <MyReviews></MyReviews>
            </PrivateRoutes>
          ),
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
