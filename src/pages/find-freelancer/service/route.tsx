import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
const FreelancerPage = lazy(() => import("../pages/FindFreelancer"));
const DetailFreelancerPage = lazy(() => import("../pages/DetailFreelancer"));

export const RoutesFindFreelancer = {
  FREELANCERS_ROUTE: "/freelancers",
  DETAIL_FREELANCERS_ROUTE: '/freelancer',
};

export const routeFindFreelancer: RouteObject[] = [
  {
    path: "/freelancers",
    element: <FreelancerPage />,
  },
  {
    path: "/freelancer",
    element: <DetailFreelancerPage />,
  },
];
