import type { RouteObject } from "react-router-dom";
import TopProfile from "..";

export const RoutesTopProfile = {
  TOP_PROFILE_ROUTE: '/top-profile'
};

export const routerTopProfile: RouteObject[] = [
  {
    path: "/top-profile",
    element: <TopProfile />
  },
];
