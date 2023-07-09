import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        about: window.global.cms.homePage.about || {}
    },
    getters: {
        about: state => state.about
    },
    mutations: {
        about: (state, about) => (state.about = about)
    },
    actions: {
        async about({ commit }) {
            await axios
                .get(`/api/about/get_one/1`)
                .then(res => {
                    commit("about", res.data);
                })
                .catch(err => {
                    console.log(err);
                    commit(
                        "toast",
                        "Przepraszamy, nie udało się załadować sekcji pod sliderem..."
                    );
                });
        }
    }
};
