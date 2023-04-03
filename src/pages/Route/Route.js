import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Profile from "../../Layout/Profile";
import ProfileLayout from "../../Layout/ProfileLayout";
import Checkout from "../Checkout/Checkout";
import Home from "../Home/Home";
import ItemsById from "../Home/Items/ItemsById";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Orders from "../Orders/Orders";

export const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children:[
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/signup',
                    element: <Signup></Signup>
               },
               {
                    path: '/items/:id',
                    element: <PrivateRoute><ItemsById></ItemsById></PrivateRoute>,
                    loader: ({params}) => fetch(`https://foodbyt-backend.vercel.app/items/${params.id}`)
               },
               {
                    path: "/checkout",
                    element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
               },
               {
                    path: "/xyz",
                    element: <Orders></Orders>
               }
          ]
     },
     {
          path: '/profile',
          element: <ProfileLayout></ProfileLayout>,
          children: [
               {
                    path: '/profile',
                    element: <Profile></Profile>
               }
          ]
     }
     
])