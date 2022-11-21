import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import { App } from "../views/App";
import { Dashboard } from "../views/Dashboard";
import { Errorpage } from "../views/Errorpage";
import { ForgotPassword } from "../views/ForgotPassword";
import { Signin } from "../views/Signin";
import { Signup } from "../views/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Signin />,
          },
          {
            path: "register",
            element: <Signup />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      }
    ],
  },
]);
