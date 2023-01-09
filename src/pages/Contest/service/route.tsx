import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
const ContestPage = lazy(() => import("../page/index"));

export const RoutesPostContest = {
  CONTEST_ROUTE: "/post-contest",
};

export const routePostContest: RouteObject[] = [
  {
    path: "/post-contest",
    element: <ContestPage />,
  },
];
