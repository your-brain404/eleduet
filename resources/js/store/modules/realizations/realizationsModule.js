import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        realizations: window.global.cms.realizationsPage.realizations || []
    },
    getters: {
        realizations: state => state.realizations
    },
    mutations: {
        realizations: (state, realizations) =>
            (state.realizations = realizations)
    },
    actions: {
        async realizations({ commit }) {
            await axios
                .get(`/api/gallery/get_photos/realizations/1`)
                .then(res => {
                    commit("realizations", res.data);
                })
                .catch(err => {
                    console.log(err);
                    commit(
                        "toast",
                        "Przepraszamy, nie udało się załadować realizacji..."
                    );
                });
        }
    }
};
