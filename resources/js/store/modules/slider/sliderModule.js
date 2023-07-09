import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        slider: window.global.cms.homePage.slider || []
    },
    mutations: {
        slider: (state, slider) => (state.slider = slider)
    },
    getters: {
        slider: state => state.slider
    },
    actions: {
        slider: function ({ commit, state }) {
            let endpoint = `/api/slider/${state.router.history.current.meta.adminRoute
                    ? "get_all"
                    : "get_where?active=1"
                }`;
            axios
                .get(endpoint)
                .then(res => {
                    commit("loading", false, { root: true });
                    commit("slider", res.data);
                })
                .catch(err => {
                    commit("loading", false, { root: true });
                    console.log(err);
                });
        }
    }
};
