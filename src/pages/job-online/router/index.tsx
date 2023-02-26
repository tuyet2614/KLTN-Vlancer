import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
const ListJobsOnlinePage = lazy(() => import("../pages/list-jobs-online-page"));

export const RouteListJobsOnlinePage = {
  Jobs_Online_ROUTE: "/jobs-online",
};

export const routeListJobsOnlinePage: RouteObject[] = [
  {
    path: "/jobs-online",
    element: <ListJobsOnlinePage />,
  },
];
