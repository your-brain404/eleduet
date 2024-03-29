import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        services: window.global.cms.servicesPage.services || []
    },
    getters: {
        services: state => state.services
    },
    mutations: {
        services: (state, services) => (state.services = services)
    },
    actions: {
        async services({ commit }) {
            await axios
                .get(`/api/services/get_all`)
                .then(res => {
                    commit("services", res.data);
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
