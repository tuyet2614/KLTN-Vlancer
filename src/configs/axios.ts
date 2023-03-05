import axios from "axios";

axios.defaults.baseURL = "http://localhost:1337/api";

export const axiosConfigs = () => {
  const token =
    localStorage.getItem("auth-token") &&
    localStorage.getItem("auth-token")!.replace(/['"]+/g, "");
  //REQUEST
  axios.interceptors.request.use(
    async (config: any) => {
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // if (error && error.request) {}
      return Promise.reject(error);
    }
  );

  //RESPONSE
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      return Promise.reject(error);
    }
  );
};
