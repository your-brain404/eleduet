import axios from "axios";

export default {
    namespaced: true,
    state: {
        executionProcessDesc:
            window.global.cms.homePage.executionProcessDesc || {}
    },
    getters: {
        executionProcessDesc: state => state.executionProcessDesc
    },
    mutations: {
        executionProcessDesc: (state, executionProcessDesc) =>
            (state.executionProcessDesc = executionProcessDesc)
    },
    actions: {
        async executionProcessDesc({ commit }) {
            await axios
                .get(`/api/execution_process_desc/get_one/1`)
                .then(res => {
                    commit("executionProcessDesc", res.data);
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
