import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authApi from "../../../constant/http-common";
import { useEffect, useState } from "react";
import { systemRoutes } from "../../../routes";
import { getAuthToken, setAuthData } from "../../../untils/token";
import Notification from "../../../components/base/components/Notification";
import userApi from "../../../constant/http-auth-common";
import { useUserStore } from "../../../store/user";

export const useLoginApi = (user: any) => {
  const navigate = useNavigate();
  const { t } = useTranslation("login");

  authApi
    .post("/auth/local", user)
    .then((response) => {
      setAuthData(response.data.jwt);
      Notification.Success({ message: t("login.success") });
      navigate(systemRoutes.ONBOARD_ROUTE);
      localStorage.getItem("auth-token");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const CreateUserApi = (user: any, handleFc: () => void) => {
  // const navigate = useNavigate()
  authApi
    .post("/auth/local/register", user)

    .then(function (response) {
      //handle success
      // navigate(systemRoutes.LOGIN_ROUTE)
      handleFc();
    })
    .catch(function (response) {
      //handle error
    });
};

export const getMyUser = () => {
  const [data, setData] = useState();
  const { user, setUser } = useUserStore();
  const header = { authorization: `Bearer ${getAuthToken()}` };
  useEffect(() => {
    axios
      .get("/users/me?populate=*", {
        baseURL: "http://localhost:1337/api",
        headers: header,
      })
      .then((response) => {
        setData(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data;
};

export const getListRoles = () => {
  const [data, setData] = useState();
  useEffect(() => {
    authApi
      .get("/users-permissions/roles")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data;
};
