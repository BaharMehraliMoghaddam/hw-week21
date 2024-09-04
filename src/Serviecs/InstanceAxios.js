import axios from "axios";
import { baseURL } from "../Constants/ValuesConstant";
import RefreshToken from "../api/Refresh-token";

export const httpService = axios.create({
  baseURL,
});

httpService.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
);
// httpService.defaults.withCredentials = true
httpService.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    const status = error.response.status;
    const originRequest = error.config;
    const refresh = localStorage.getItem("refresh");

    if (status === 401 && refresh) {
      return RefreshToken(refresh)
        .then(res=>{
            console.log(res)
            localStorage.setItem("access",res.data.access)
            return httpService.request(originRequest)
        })
        .catch(error=>{
            return Promise.reject(error)
        })
    }
  }
);
