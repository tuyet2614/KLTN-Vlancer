import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import DetailTest from "../component/DetailTest";
const ContestPage = lazy(() => import("../page/index"));

export const RoutesPostContest = {
  CONTEST_ROUTE: "/post-contest",
  CONTEST_DETAIL_ROUTE: (freelancerId: string) => "/contest/" + freelancerId,
};

export const routePostContest: RouteObject[] = [
  {
    path: "/post-contest",
    element: <ContestPage />,
  },
  {
    path: "/contest/:id",
    element: <DetailTest />,
  },
];
