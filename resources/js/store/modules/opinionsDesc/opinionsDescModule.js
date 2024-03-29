import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        opinionsDesc: window.global.cms.homePage.opinionsDesc || {}
    },
    getters: {
        opinionsDesc: state => state.opinionsDesc
    },
    mutations: {
        opinionsDesc: (state, opinionsDesc) =>
            (state.opinionsDesc = opinionsDesc)
    },
    actions: {
        async opinionsDesc({ commit }) {
            await axios
                .get(`/api/opinions_desc/get_one/1`)
                .then(res => {
                    commit("opinionsDesc", res.data);
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
