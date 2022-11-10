import axios from "axios";

export default {
    namespaced: true,
    state: {
        currentServiceCategories: []
    },
    getters: {
        currentServiceCategories: state => state.currentServiceCategories
    },
    mutations: {
        currentServiceCategories: (state, currentServiceCategories) =>
            (state.currentServiceCategories = currentServiceCategories)
    },
    actions: {
        async currentServiceCategories({ commit, rootGetters }, serviceId) {
            if (!serviceId) return;
            await axios
                .get(
                    `/api/services_service_categories/get_where?service_id=${serviceId}`
                )
                .then(res => {
                    commit("currentServiceCategories", res.data);
                    commit(
                        "FormService/setCurrentObject",
                        {
                            ...rootGetters["FormService/getCurrentObject"],
                            service_categories: res.data.map(
                                row => row.service_category_id
                            )
                        },
                        { root: true }
                    );
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
