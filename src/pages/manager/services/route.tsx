import type { RouteObject } from "react-router-dom";
import CustomerManager from "../customer";
import FreelancerManager from "../freelancer";

export const RoutesCustomerManager = {
  CUSTOMER_MANAGER_ROUTE: (userId: string) => "/job-client/" + userId,
  FREELANCER_MANAGER_ROUTE: (userId: string) => "/job-freelancer/" + userId,
};

export const routeCustomerManager: RouteObject[] = [
  {
    path: "/job-client/:id",
    element: <CustomerManager />,
  },
  {
    path: "/job-freelancer/:id",
    element: <FreelancerManager />,
  },
];
