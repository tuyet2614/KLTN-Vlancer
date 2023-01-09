import type { RouteObject } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export const RoutesAuth = {
  AUTH: "/auth",
  LOGIN_ROUTE: "/auth/login",
  SIGN_UP_ROUTE: "/auth/signup",
  FORGOT_PASS_ROUTE: "/auth/forgot-password",
  EMAIL_FORGOT_PASS_ROUTE: "/auth/email-forgot-password",
  PHONE_FORGOT_PASS_ROUTE: "/auth/forgot-password-phone-number",
  NEW_PASS_ROUTE: "/auth/new-password",
};

export const routerAuth: RouteObject[] = [
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />
      }
    ],
  },
];
