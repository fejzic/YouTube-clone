import axios from "axios";
import {
  isTokenValid,
  removeAccessToken,
  getAccessToken,
} from "../utils/token";

const instance = axios.create({
  baseURL: "https://youtube-clone-backend.herokuapp.com/api/v1/",
  
});

instance.interceptors.request.use((request) => {
  if (isTokenValid() && !request.headers.common["Authorization"]) {
    request.headers.common["Authorization"] = `Token ${getAccessToken()}`;
  }
  return request;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    if (
      error.response &&
      error.response.status === 401 &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/signup"
    ) {
      removeAccessToken();
      window.location.pathname = "/login";
    }
    return Promise.reject(
      error.response ? error.response.data : { message: "api/no-response" }
    );
  }
);

export default instance;
