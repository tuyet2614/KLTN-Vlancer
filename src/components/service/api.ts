import { useNavigate } from "react-router-dom";
import { LocalStorageKey } from "../../configs/common";
import { systemRoutes } from "../../routes";
import { removeToken } from "../../untils/token";

export const useLogout = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    removeToken();
    navigate(systemRoutes.LOGIN_ROUTE);
    localStorage.removeItem(LocalStorageKey.TEMP_FORM);
  };
  return { onLogout };
};