import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Providers/authProvider';
import PrivateRoute from './Components/Routes/PrivateRoute';
import Orders from './Components/Orders/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
    {
      path: "/",
      element: <PrivateRoute><Home></Home></PrivateRoute>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/registration",
      element: <Registration/>
    },
    {
      path: "/orders",
      element: <PrivateRoute><Orders/></PrivateRoute>
    },
  ],
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
