import axios from "axios";
const token = localStorage.getItem("token");
export default axios.create({
  baseURL: "http://localhost:1337/api",
  // headers: {
  //   "content-type": "application/json",
  //   Accept: "application/json",
  //   // 'Access-Control-Allow-Origin': 'http://localhost:3000',
  //   // 'Access-Control-Allow-Credentials': true,
  // },
});
