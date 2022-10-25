import axios from "axios";

export default {
    namespaced: true,
    state: {
        servicesServiceCategories:
            window.global.cms.servicesPage.servicesServiceCategories || []
    },
    getters: {
        servicesServiceCategories: state => state.servicesServiceCategories
    },
    mutations: {
        servicesServiceCategories: (state, servicesServiceCategories) =>
            (state.servicesServiceCategories = servicesServiceCategories)
    },
    actions: {
        async servicesServiceCategories({ commit }) {
            await axios
                .get(`/api/services_service_categories/get_all`)
                .then(res => {
                    commit("servicesServiceCategories", res.data);
                })
                .catch(err => {
                    console.log(err);
                    commit(
                        "setSnackbar",
                        "Przepraszamy, nie udało się załadować danych wiążących usługi z ich kategoriami..."
                    );
                });
        }
    }
};
