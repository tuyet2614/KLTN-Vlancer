import axios from "axios";
const token =
  localStorage.getItem("auth-token") &&
  localStorage.getItem("auth-token").replace(/['"]+/g, "");
console.log("token: ", token);
const defaultToken = token?.replace(/['"]+/g, "");
console.log("default: ", defaultToken);
export default axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});
