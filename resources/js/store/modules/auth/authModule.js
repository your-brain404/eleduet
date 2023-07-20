import axios from "@/plugins/axios/axios";
import parseJwt from "@/helpers/auth/tokenDecoder.js";
import getCookie from "@/helpers/cookies/get-cookie";
import setCookie from "@/helpers/cookies/set-cookie";
import removeCookie from "@/helpers/cookies/remove-cookie";

export default {
    state: {
        user: window.global.auth || {},
        token: parseJwt(getCookie("token"))?.sub || ""
    },
    mutations: {
        setUser: (state, user) => (state.user = user),
        setToken: (state, token) => (
            setCookie("token", token, 30), (state.token = token)
        )
    },
    getters: {
        user: state => state.user,
        token: state => state.token
    },
    actions: {
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
        async authLogin({ commit, getters, rootState }, credentials) {
            await axios
                .post("api/auth/login", credentials)
                .then(res => {
                    if (res.data.error) {
                        commit("toast", res.data.error.message);
                    } else {
                        commit("setToken", res.data.token);
                        commit("setUser", res.data.data);
                        commit("toast", getters.snackbarAlerts.login_success);
                        localStorage.setItem(
                            "user",
                            JSON.stringify(res.data.data)
                        );
                        rootState.router.push({ name: "AdminMain" });
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
                        commit("toast", res.data.error.message);
                    } else {
                        commit("setToken", res.data.token);
                        commit("setUser", res.data.data);
                        commit(
                            "toast",
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
    }
};
