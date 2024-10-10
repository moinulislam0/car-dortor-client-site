import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIN from "../Pages/Login/LogIn";
import SignUP from "../Pages/SignUP/SignUp";
import About from "../Pages/About/About";
import CheckOut from "../Pages/checkOut/CheckOut";
import Services from "../Pages/services/Services";
import Booking from "../Pages/Bookings/Bookings";
import PrivateRouter from "./PrivateRouter";

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
        path: "/login",
        element: <LogIN></LogIN>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/checkOut/:id",
        element: (
          <PrivateRouter>
            <CheckOut></CheckOut>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRouter>
            <Booking></Booking>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
