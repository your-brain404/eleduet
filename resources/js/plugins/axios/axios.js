import axios from "axios";
import getCookie from "@/helpers/cookies/get-cookie";

axios.defaults.baseURL = window.location.origin;
axios.interceptors.request.use(
    config => {
        const token = getCookie("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        config.headers["Access-Control-Allow-Origin"] = "*";

        return config;
    },
    error => Promise.reject(error)
);

export default axios;
