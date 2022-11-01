import axios from "axios";
import parseJwt from "@/helpers/auth/tokenDecoder.js";
import router from "@/router/routes.js";
import getCookie from "@/helpers/cookies/get-cookie";
import removeCookie from "@/helpers/cookies/remove-cookie";

export default {
    async fbLogin({ dispatch, commit }) {
        await axios
            .get("api/facebook/login/get_token")
            .then(res => {
                if (res.data == "") dispatch("logout");
                commit("setToken", res.data.token);
                commit("setUser", res.data.data);
            })
            .catch(err => console.log(err));
    },
    async authLogin({ commit, getters }, credentials) {
        await router;
        await axios
            .post("api/auth/login", credentials)
            .then(res => {
                if (res.data.error) {
                    commit("setSnackbar", res.data.error.message);
                } else {
                    commit("setToken", res.data.token);
                    commit("setUser", res.data.data);
                    commit("setSnackbar", getters.snackbarAlerts.login_success);
                    localStorage.setItem("user", JSON.stringify(res.data.data));
                    router.push({ name: "AdminMain" });
                }
            })
            .catch(err => console.log(err));
    },
    async authAutoLogin({ commit }) {
        let userId = parseJwt(getCookie("token"))?.sub;
        if (!userId) return;
        await axios.post("api/auth/auto_login/", { id: userId });
        await axios
            .get("api/users/get_one/" + userId)
            .then(res => {
                commit("setUser", res.data);
                commit("setToken", getCookie("token"));
            })
            .catch(err => console.log(err));
    },
    async register({ commit, getters }, credentials) {
        commit("loading", true);
        await axios
            .post("api/auth/register", credentials)
            .then(res => {
                commit("loading", false);
                if (res.data.error) {
                    commit("setSnackbar", res.data.error.message);
                } else {
                    commit("setToken", res.data.token);
                    commit("setUser", res.data.data);
                    commit(
                        "setSnackbar",
                        getters.snackbarAlerts.register_success
                    );
                }
            })
            .catch(err => {
                console.log(err);
                commit("loading", false);
            });
    },
    logout({ commit }) {
        console.log("logout");
        removeCookie("token");
        commit("setUser", {});
        commit("setToken", "");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("authLogin");
    }
};
