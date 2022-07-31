import axios from "axios";
import config from "./config.json";

const axiosInstance = axios.create({ baseURL: config.api });

axiosInstance.interceptors.request.use(
  (onFulfilled) => onFulfilled,
  (onRejected) => {
    const expectedErrors =
      onRejected.response &&
      onRejected.response.status >= 400 &&
      onRejected.response.status < 500;
    if (!expectedErrors) {
      console.log('opppps!');
      console.log(onRejected);
    }
    return Promise.reject(onRejected);
  }
);

export default axiosInstance;
