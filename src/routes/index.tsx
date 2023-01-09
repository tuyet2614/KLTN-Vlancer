import { createBrowserRouter, RouteObject } from "react-router-dom";
import ContainerLayout from "../layout/ContainerLayout";
import { routeOnBoard, RoutesOnBoard } from "../pages/onBoard/services/route";
import { routerAuth, RoutesAuth } from "../pages/auth/route";
import { routePostJob, RoutesPostJob } from "../pages/postJob/service/route";
import {
  routePostContest,
  RoutesPostContest,
} from "../pages/Contest/service/route";

const routers: RouteObject[] = [
  {
    element: <ContainerLayout />,
    children: [
      ...routeOnBoard,
      ...routerAuth,
      ...routePostJob,
      ...routePostContest,
    ],
  },
];

export const systemRoutes = {
  ...RoutesOnBoard,
  ...RoutesAuth,
  ...RoutesPostJob,
  ...RoutesPostContest,
};

export const browserRouters = createBrowserRouter(routers);
