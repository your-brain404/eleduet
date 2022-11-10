import axios from "axios";

export default {
    namespaced: false,
    state: {
        aboutPage: window.global.cms.aboutPage.aboutPage || {}
    },
    getters: {
        aboutPage: state => state.aboutPage
    },
    mutations: {
        aboutPage: (state, aboutPage) => (state.aboutPage = aboutPage)
    },
    actions: {
        async aboutPage({ commit }) {
            await axios
                .get(`/api/about_page/get_one/1`)
                .then(res => {
                    commit("aboutPage", res.data);
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
