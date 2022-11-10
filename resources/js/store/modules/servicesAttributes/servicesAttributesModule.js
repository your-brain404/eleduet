import axios from "axios";

export default {
    namespaced: true,
    state: {
        servicesAttributes:
            window.global.cms.servicesPage.servicesAttributes || []
    },
    getters: {
        servicesAttributes: state => state.servicesAttributes
    },
    mutations: {
        servicesAttributes: (state, servicesAttributes) =>
            (state.servicesAttributes = servicesAttributes)
    },
    actions: {
        async servicesAttributes({ commit }) {
            await axios
                .get(`/api/services_attributes/get_all`)
                .then(res => {
                    commit("servicesAttributes", res.data);
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
