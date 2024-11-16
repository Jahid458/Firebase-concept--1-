import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import About from "../About/About";
import PH from "../PH/PH";
import SignUp from "../SignUp/SignUp";
import Login from "../LogIn/Login";
import Profile from "../Profile/Profile";
import PrivateRoute from "../PrivateRouter/PrivateRoute";


const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<PrivateRoute><About></About></PrivateRoute>,
        children:[
          {
            path:"/about/ph",
            element:<PH></PH>
          }
        ]
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signin',
        element: <Login></Login>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
   
      }
    ]
    
  }
])

export default router;
