import parseJwt from "@/helpers/auth/tokenDecoder.js";
import getCookie from "@/helpers/cookies/get-cookie";

export default {
    user: window.global.auth || {},
    token: parseJwt(getCookie("token"))?.sub || ""
};
