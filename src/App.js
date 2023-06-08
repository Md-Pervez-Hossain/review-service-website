import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddService from "./Components/AddService/AddService";
import AllFoodsService from "./Components/AllFoodsService/AllFoodsService";
import Blog from "./Components/FoodsBlog/FoodsBlog";
import ClientFeedback from "./Components/ClientFeddback/ClientFeedback";
import Home from "./Components/Home/Home";
import Main from "./Components/Layout/Main";
import Login from "./Components/Login/Login";
import EditMyReview from "./Components/MyReviews/EditMyReview";
import MyReviews from "./Components/MyReviews/MyReviews";
import PrivateRoutes from "./Components/Routes/PrivateRoutes";
import Signup from "./Components/Signup/Signup";
import SingleServiceAndReview from "./Components/SingleServiceAndReview/SingleServiceAndReview";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage";
import FoodsBlog from "./Components/FoodsBlog/FoodsBlog";
import SingleFoodsBlog from "./Components/FoodsBlog/SingleFoodsBlog";
import PaymentSuccess from "./Components/PaymentSuccess/PaymentSuccess";
import AllOrders from "./Components/AllOrders/AllOrders";
import MyOrders from "./Components/MyOrders/MyOrders";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashboadCommon from "./Components/Dashboard/DashboadCommon";
import Cartpage from "./Components/Cartpage/Cartpage";
import Wishlistpage from "./Components/Wishlistpage/Wishlistpage";
import ContactInfo from "./Components/ContactInfo/ContactInfo";

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
          path: "/allservice",
          element: <AllFoodsService></AllFoodsService>,
        },
        {
          path: "/allservice/:id",
          element: <SingleServiceAndReview></SingleServiceAndReview>,
          loader: ({ params }) =>
            fetch(
              `https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/addservice/${params.id}`
            ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/contact",
          element: <ContactInfo></ContactInfo>,
        },
        {
          path: "/cart",
          element: <Cartpage></Cartpage>,
        },
        {
          path: "/wishlist",
          element: <Wishlistpage></Wishlistpage>,
        },

        {
          path: "/payment/success/:transactionId",
          loader: async ({ params }) => {
            return fetch(
              `https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/payment/success/${params.transactionId}`
            );
          },
          element: <PaymentSuccess></PaymentSuccess>,
        },

        {
          path: "/Foodsblog/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/foodsBlog/${params.id}`
            );
          },
          element: <SingleFoodsBlog></SingleFoodsBlog>,
        },
        {
          path: "/checkout",
          element: <CheckoutPage></CheckoutPage>,
        },
        {
          path: "/feedback",
          element: <ClientFeedback></ClientFeedback>,
        },
        {
          path: "/reviewss/:id",
          element: <EditMyReview></EditMyReview>,
          loader: ({ params }) =>
            fetch(
              `https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/reviewss/${params.id}`
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
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "/dashboard",
          element: <DashboadCommon></DashboadCommon>,
        },
        {
          path: "/dashboard/addservice",
          element: (
            <PrivateRoutes>
              <AddService></AddService>
            </PrivateRoutes>
          ),
        },
        {
          path: "/dashboard/orders",
          loader: async () => {
            return fetch(
              "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/orders"
            );
          },
          element: <AllOrders></AllOrders>,
        },
        {
          path: "/dashboard/Foodsblog",
          element: <FoodsBlog></FoodsBlog>,
        },
        {
          path: "/dashboard/orders/:cus_email",
          element: <MyOrders></MyOrders>,
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
