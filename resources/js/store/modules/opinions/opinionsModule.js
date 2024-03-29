import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        opinions: window.global.cms.homePage.opinions
    },
    getters: {
        opinions: state => state.opinions
    },
    mutations: {
        opinions: (state, opinions) => (state.opinions = opinions)
    },
    actions: {
        async opinions({ commit }) {
            await axios
                .get(`/api/opinions/get_all`)
                .then(res => {
                    commit("opinions", res.data);
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
