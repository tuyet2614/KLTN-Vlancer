import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
const FreelancerPage = lazy(() => import("../pages/FindFreelancer"));

export const RoutesFindFreelancer = {
  FREELANCERS_ROUTE: "/freelancer",
};

export const routeFindFreelancer: RouteObject[] = [
  {
    path: "/freelancer",
    element: <FreelancerPage />,
  },
];
