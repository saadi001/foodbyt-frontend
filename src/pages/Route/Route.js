import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import ItemsById from "../Home/Items/ItemsById";
import Login from "../Login/Login";

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
                    path: '/items/:id',
                    element: <ItemsById></ItemsById>,
                    loader: ({params}) => fetch(`https://foodbyt-backend.vercel.app/items/${params.id}`)
               }
          ]
     },
     
])