import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
const PostJobPage = lazy(() => import("../page/index"));

export const RoutesPostJob = {
  POSTJOB_ROUTE: "/post-a-job",
};

export const routePostJob: RouteObject[] = [
  {
    path: "/post-a-job",
    element: <PostJobPage />
  },
];
