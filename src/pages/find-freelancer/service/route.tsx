import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
const FreelancerPage = lazy(() => import("../pages/FindFreelancer"));
const DetailUser = lazy(() => import("../../users/pages/DetailUser"));

export const RoutesFindFreelancer = {
  FREELANCERS_ROUTE: "/freelancers",
  DETAIL_FREELANCERS_ROUTE: (freelancerId: string) =>
    "/freelancer/" + freelancerId,
};

export const routeFindFreelancer: RouteObject[] = [
  {
    path: "/freelancers",
    element: <FreelancerPage />,
  },
  {
    path: "/freelancer/:id",
    element: <DetailUser />,
  },
];
