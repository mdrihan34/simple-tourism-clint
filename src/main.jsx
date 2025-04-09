import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./users/Login.jsx";
import Root from "./root/Root.jsx";
import Register from "./users/Register.jsx";
import AuthProvaider from "./provaider/AuthProvaider.jsx";
import AddSpots from "./pages/AddSpots.jsx";
import Home from "./pages/Home.jsx";
import MySpots from "./pages/MySpots.jsx";
import UpdateSpot from "./Spots/UpdateSpot.jsx";
import AllToruist from "./Spots/AllToruist.jsx";
import ViewDetails from "./Spots/ViewDetails.jsx";
import PrivateRoute from "./Spots/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://simple-tourism-scerver.vercel.app/spots')
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
        path: "/addsports",
        element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>,
      },
      {
        path:'/mySpots',
        element: <PrivateRoute><MySpots></MySpots></PrivateRoute>,
        loader: () => fetch('https://simple-tourism-scerver.vercel.app/spots')
        
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
        loader: ({params}) => fetch(`https://simple-tourism-scerver.vercel.app/spots/${params.id}`)
        
      },
      {
        path:'/allTorists',
        element: <AllToruist></AllToruist>,
        loader: () => fetch('https://simple-tourism-scerver.vercel.app/spots')


      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://simple-tourism-scerver.vercel.app/spots/${params.id}`)
        

      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvaider>
      <RouterProvider router={router} />
    </AuthProvaider>
  </React.StrictMode>
);
