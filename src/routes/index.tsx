import { createBrowserRouter, RouteObject } from "react-router-dom";
import ContainerLayout from "../layout/ContainerLayout";
import { routeOnBoard, RoutesOnBoard } from "../pages/onBoard/services/route";
import { routerAuth, RoutesAuth } from "../pages/auth/route";
import { routePostJob, RoutesPostJob } from "../pages/postJob/service/route";
import {
  routePostContest,
  RoutesPostContest,
} from "../pages/Contest/service/route";
import { routeFindFreelancer, RoutesFindFreelancer } from "../pages/find-freelancer/service/route";

const routers: RouteObject[] = [
  {
    element: <ContainerLayout />,
    children: [
      ...routeOnBoard,
      ...routerAuth,
      ...routePostJob,
      ...routePostContest,
      ...routeFindFreelancer
    ],
  },
];

export const systemRoutes = {
  ...RoutesOnBoard,
  ...RoutesAuth,
  ...RoutesPostJob,
  ...RoutesPostContest,
  ...RoutesFindFreelancer,
};

export const browserRouters = createBrowserRouter(routers);
