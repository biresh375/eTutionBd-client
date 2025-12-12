import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Components/Home/Home/Home";
import Tutions from "../Page/Tutions.jsx/Tutions";
import Tutors from "../Page/Tutors/Tutors";
import DashbordLayout from "../Layouts/DashbordLayout";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PrivateRoute from "../Components/Shared/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "tuitions",
        element: <Tutions></Tutions>,
      },
      {
        path: "tutors",
        element: <Tutors></Tutors>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashbord",
    element: (
      <PrivateRoute>
        <DashbordLayout></DashbordLayout>
      </PrivateRoute>
    ),
  },
]);
