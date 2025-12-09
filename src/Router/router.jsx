import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Components/Home/Home/Home";
import Tutions from "../Page/Tutions.jsx/Tutions";
import Tutors from "../Page/Tutors/Tutors";
import DashbordLayout from "../Layouts/DashbordLayout";

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
    path: "/dashbord",
    element: <DashbordLayout></DashbordLayout>,
  },
]);
