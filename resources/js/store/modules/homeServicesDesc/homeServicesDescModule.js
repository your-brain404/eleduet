import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        homeServicesDesc: window.global.cms.homePage.homeServicesDesc || {}
    },
    getters: {
        homeServicesDesc: state => state.homeServicesDesc
    },
    mutations: {
        homeServicesDesc: (state, homeServicesDesc) =>
            (state.homeServicesDesc = homeServicesDesc)
    },
    actions: {
        async homeServicesDesc({ commit }) {
            await axios
                .get(`/api/home_services_desc/get_one/1`)
                .then(res => {
                    commit("homeServicesDesc", res.data);
                })
                .catch(err => {
                    console.log(err);
                    commit(
                        "toast",
                        "Przepraszamy, nie udało się załadować danych..."
                    );
                });
        }
    }
};
