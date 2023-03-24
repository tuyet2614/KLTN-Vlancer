import type { RouteObject } from "react-router-dom";
import TopProfile from "..";
import DetailExperienceProfile from "../components/detailExpericeProfile";

export const RoutesTopProfile = {
  TOP_PROFILE_ROUTE: '/top-profile',
  TOP_PROFILE_DETAIL_ROUTE: '/top-profile/:id'
};

export const routerTopProfile: RouteObject[] = [
  {
    path: "/top-profile",
    element: <TopProfile />
  },
  {
    path: "/top-profile/:id",
    element: <DetailExperienceProfile />
  },
];
