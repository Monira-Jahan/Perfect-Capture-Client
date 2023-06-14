import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import InstructorsSection from "../Pages/Instructors/InstructorsSection";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUser/AllUsers";


import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import Classes from "../Pages/Classes/Classes";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/instructors",
            element:<InstructorsSection></InstructorsSection>
        },
        {
          path:"/classes",
          element:<Classes></Classes>

        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signup",
          element:<SignUp></SignUp>
        },
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'manageusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>

        },
        {
          path:'manageclasses',
          element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path:'addclass',
          element:<AddClass></AddClass>
        }
      ]
    }

  ]);
  