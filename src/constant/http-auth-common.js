import axios from "axios";
import { getAuthToken } from "../untils/token";
const token =
  localStorage.getItem("auth-token") &&
  localStorage.getItem("auth-token").replace(/['"]+/g, "");
const defaultToken = token?.replace(/['"]+/g, "") || getAuthToken();
export default axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${defaultToken}`,
    "Content-Type": "application/json",
  },
});
