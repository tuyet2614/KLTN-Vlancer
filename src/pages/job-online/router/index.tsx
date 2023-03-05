import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const ListJobsOnlinePage = lazy(() => import("../pages/list-jobs-online-page"));
const DetailJobPage = lazy(() => import("../pages/detail-job-page"));

export const RouteListJobsOnlinePage = {
  Jobs_Online_ROUTE: "/jobs-online",
  Detail_Job_ROUTE: "/detail-job",
};

export const routeListJobsOnlinePage: RouteObject[] = [
  {
    path: "/jobs-online",
    element: <ListJobsOnlinePage />,
  },
  {
    path: "/detail-job",
    element: <DetailJobPage />,
  },
];
