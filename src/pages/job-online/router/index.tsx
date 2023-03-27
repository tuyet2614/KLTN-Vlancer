import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import DetailRequestPage from "../pages/detailRequestPage";
import ListContest from "../pages/list-contest";

const ListJobsOnlinePage = lazy(() => import("../pages/list-jobs-online-page"));
const DetailJobPage = lazy(() => import("../pages/detail-job-page"));
const DetailCmtPage = lazy(() => import("../pages/detail-cmt-page"));

export const RouteListJobsOnlinePage = {
  Jobs_Online_ROUTE: "/jobs-online",
  Detail_Job_ROUTE: "/detail-job",
  Detail_Cmt_ROUTE: "/detail-recommend",
  LIST_CONTEST_ROUTE: "/contests"
};

export const routeListJobsOnlinePage: RouteObject[] = [
  {
    path: "/jobs-online",
    element: <ListJobsOnlinePage />,
  },
  {
    path: "/contests",
    element: <ListContest />,
  },
  {
    path: "/detail-job",
    element: <DetailJobPage />,
  },
  {
    path: "/request-detail-job/:id/:type",
    element: <DetailRequestPage />,
  },
  {
    path: "/detail-recommend",
    element: <DetailCmtPage />,
  },
];
