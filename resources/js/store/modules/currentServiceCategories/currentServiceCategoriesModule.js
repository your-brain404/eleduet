import axios from "axios";

export default {
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
        async currentServiceCategories({ commit }, serviceId) {
            await axios
                .get(
                    `/api/services_service_categories/get_where?service_id=${serviceId}`
                )
                .then(res => {
                    commit(
                        "currentServiceCategories",
                        res.data.map(category => ({
                            ...category,
                            service_category_id: +category.service_category_id,
                            service_id: +category.service_id
                        }))
                    );
                })
                .catch(err => {
                    console.log(err);
                    commit(
                        "setSnackbar",
                        "Przepraszamy, nie udało się załadować danych usługi..."
                    );
                });
        }
    }
};
