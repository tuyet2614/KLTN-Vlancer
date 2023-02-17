import { systemRoutes } from "../../../routes";
import {
  getAuthLocalData,
  rememberMeChecker,
  removeToken,
} from "../../../untils/token";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const authHOC = (WrappedComponent: any) => {
  return (props: any) => {
    const navigate = useNavigate();
    const authData = getAuthLocalData();
    const { pathname } = useLocation();

    useEffect(() => {
      if (authData) {
        if (pathname.startsWith(systemRoutes.AUTH)) {
          navigate(systemRoutes.ONBOARD_ROUTE);
        } else {
          if (rememberMeChecker(authData)) {
            return;
          }
          removeToken();
          if (!pathname.startsWith(systemRoutes.AUTH)) {
            navigate(systemRoutes.LOGIN_ROUTE);
          }
        }
      } else {
        removeToken();
        if (!pathname.startsWith(systemRoutes.AUTH)) {
          navigate(systemRoutes.LOGIN_ROUTE);
        }
      }
    }, []);
    return <WrappedComponent {...props} />;
  };
};

export default authHOC;
