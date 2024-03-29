import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        executionProcess: window.global.cms.homePage.executionProcess || []
    },
    getters: {
        executionProcess: state => state.executionProcess
    },
    mutations: {
        executionProcess: (state, executionProcess) =>
            (state.executionProcess = executionProcess)
    },
    actions: {
        async executionProcess({ commit }) {
            await axios
                .get(`/api/execution_process/get_all`)
                .then(res => {
                    commit("executionProcess", res.data);
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
