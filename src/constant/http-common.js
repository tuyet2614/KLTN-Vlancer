import axios from "axios";
const token = localStorage.getItem('token')
export default axios.create({
  baseURL: "http://localhost:1337/api",
//   headers: {
//     Authorization: `Bearer ${token}`,
//     "Content-type": "application/json",
//   },
});