import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        homeServices: window.global.cms.homePage.homeServices || []
    },
    getters: {
        homeServices: state => state.homeServices
    },
    mutations: {
        homeServices: (state, homeServices) =>
            (state.homeServices = homeServices)
    },
    actions: {
        async homeServices({ commit }) {
            await axios
                .get(`/api/services/get_where?home_page=1`)
                .then(res => {
                    commit("homeServices", res.data);
                })
                .catch(err => {
                    console.log(err);
                    commit(
                        "toast",
                        "Przepraszamy, nie udało się załadować danych usługi..."
                    );
                });
        }
    }
};
