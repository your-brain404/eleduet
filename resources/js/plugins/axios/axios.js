import axios from "axios";

axios.defaults.baseURL = window.location.origin;
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        config.headers["Access-Control-Allow-Origin"] = "*";

        return config;
    },
    error => Promise.reject(error)
);

export default axios;
