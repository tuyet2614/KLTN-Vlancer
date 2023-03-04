import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import DetailUser from "../pages/DetailUser";

export const RoutesUsers = {
  USERS_ROUTE: "/users",
};

export const routeUsers: RouteObject[] = [
  {
    path: "/users/:id",
    element: <DetailUser />,
  },
];
