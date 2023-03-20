import { createBrowserRouter, RouteObject } from "react-router-dom";
import ContainerLayout from "../layout/ContainerLayout";
import ContainerAuthLayout from "../layout/ContainerAuthLayout";
import { routeOnBoard, RoutesOnBoard } from "../pages/onBoard/services/route";
import { routerAuth, RoutesAuth } from "../pages/auth/route";
import { routePostJob, RoutesPostJob } from "../pages/postJob/service/route";
import {
  routePostContest,
  RoutesPostContest,
} from "../pages/Contest/service/route";
import {
  routeFindFreelancer,
  RoutesFindFreelancer,
} from "../pages/find-freelancer/service/route";
import { RoutesUsers, routeUsers } from "../pages/users/services/route";
import {
  RouteListJobsOnlinePage,
  routeListJobsOnlinePage,
} from "../pages/job-online";
import UpdateUser from "../pages/users/pages/UpdateUser";
import {
  routeCustomerManager,
  RoutesCustomerManager,
} from "../pages/manager/services/route";
import {
  routeSearchService,
  RoutesSearchService,
} from "../pages/search-service/service/route";

const routers: RouteObject[] = [
  {
    element: <ContainerLayout />,
    children: [
      ...routeOnBoard,
      ...routerAuth,
      ...routePostJob,
      ...routePostContest,
      ...routeListJobsOnlinePage,
      ...routeFindFreelancer,
      ...routeUsers,
      ...routeCustomerManager,
      ...routeSearchService,
    ],
  },
];

export const systemRoutes = {
  ...RoutesOnBoard,
  ...RoutesAuth,
  ...RoutesPostJob,
  ...RoutesPostContest,
  ...RoutesFindFreelancer,
  ...RoutesUsers,
  ...RouteListJobsOnlinePage,
  ...RoutesCustomerManager,
  ...RoutesSearchService,
};

const updateRouters: RouteObject[] = [
  {
    element: <UpdateUser />,
    children: [...routeUsers],
  },
];

export const updateRoutes = {
  ...RoutesUsers,
};

export const itemRouters = createBrowserRouter(updateRouters);

export const browserRouters = createBrowserRouter(routers);
