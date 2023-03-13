import axios from "axios";
const token =
  localStorage.getItem("auth-token") &&
  localStorage.getItem("auth-token").replace(/['"]+/g, "");
const defaultToken = token?.replace(/['"]+/g, "");
export default axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
