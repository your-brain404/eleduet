import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        attributes: window.global.cms.homePage.attributes || []
    },
    getters: {
        attributes: state => state.attributes
    },
    mutations: {
        attributes: (state, attributes) => (state.attributes = attributes)
    },
    actions: {
        async attributes({ commit }) {
            await axios
                .get(`/api/attributes/get_all`)
                .then(res => {
                    commit("attributes", res.data);
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
