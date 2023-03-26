import { LocalStorageKey } from "../configs/common";
import env from "../configs/env";
import dayjs from "dayjs";
import moment from "moment";
import { isJsonString } from "./string";

let TOKEN: any = "";
export const TOKEN_KEY = env.tokenKey;

export const setAuthData = (authData: any) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(authData || {}));
  TOKEN = authData.jwt;
};

export const parseTokenString = (str: string) => {
  if (isJsonString(str)) {
    const authObject: any = JSON.parse(str);
    return authObject;
  }
  return null;
};

export const getAuthToken = () => {
  const data = localStorage.getItem(env.tokenKey);
  
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      return null;
    }
  }
  return null;
};

export const getRememberMeToken = () => {
  return JSON.parse(
    localStorage.getItem(LocalStorageKey.IS_REMEMBER_ME) ?? "false"
  );
};

export const rememberMeChecker = (authData: any | null) => {
  const isRememberMe = getRememberMeToken();
  return (
    authData?.refreshTokenExpiresAt &&
    isRememberMe &&
    dayjs(authData.refreshTokenExpiresAt).isSame(Date.now(), "day")
  );
};

export const tokenChecker = (authData: any | null) => {
  if (
    !authData ||
    !authData.accessToken ||
    authData.expiresAt < moment().unix()
  )
    return false;
  return true;
};

export const getAuthLocalDataOnRequest = () => {
  if (typeof localStorage !== "undefined" && localStorage !== null) {
    const authData = parseTokenString(localStorage?.getItem(TOKEN_KEY) || "");
    if (!tokenChecker(authData)) {
      return null;
    }
    return authData;
  }
  return null;
};

export const getAuthLocalData = () => {
  if (typeof localStorage !== "undefined" && localStorage !== null) {
    const authData = parseTokenString(localStorage?.getItem(TOKEN_KEY) || "");
    if (!tokenChecker(authData)) {
      localStorage.removeItem(TOKEN_KEY);
      return null;
    }
    return authData;
  }
  return null;
};

export const getToken = () => {
  return `Bearer ${TOKEN}`;
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  TOKEN = "";
};
