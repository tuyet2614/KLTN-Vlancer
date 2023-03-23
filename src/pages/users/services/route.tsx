import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import DetailUser from "../pages/DetailUser";
import InformationUpdate from "../pages/InformmationUpdate";
import UpdateProfileExperience from "../pages/UpdateProfileExperience";
import UpdateUser from "../pages/UpdateUser";

export const RoutesUsers = {
  USERS_ROUTE: "/users",
  UPDATE_USER_ROUTE: (userId: string) => "/users/update/" + userId,
  INFORMATION_USER_UPDATE: "/user/update/information",
  CREATE_PROFILE_WORK : (userId: string, key?: string) => "/users/update/" + userId + "/" + key,
};

export const routeUsers: RouteObject[] = [
  {
    path: "/users/:id",
    element: <DetailUser />,
  },
  {
    path: "/users/update/:id/:key",
    element: <UpdateUser />,
  },
  {
    path: "/user/update/information",
    element: <InformationUpdate />,
  },
  
];
