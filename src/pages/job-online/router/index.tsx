import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const ListJobsOnlinePage = lazy(() => import("../pages/list-jobs-online-page"));
const DetailJobPage = lazy(() => import("../pages/detail-job-page"));
const DetailCmtPage = lazy(() => import("../pages/detail-cmt-page"));

export const RouteListJobsOnlinePage = {
  Jobs_Online_ROUTE: "/jobs-online",
  Detail_Job_ROUTE: "/detail-job",
  Detail_Cmt_ROUTE: "/detail-recommend",
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
  {
    path: "/detail-recommend",
    element: <DetailCmtPage />,
  },
];
