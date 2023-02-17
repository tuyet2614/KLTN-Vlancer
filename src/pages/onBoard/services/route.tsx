import type { RouteObject } from "react-router-dom";
import OnBoard from "..";

export const RoutesOnBoard = {
  ONBOARD_ROUTE: "/",
};

export const routeOnBoard: RouteObject[] = [
  {
    path: "/",
    element: <OnBoard />,
  },
];
