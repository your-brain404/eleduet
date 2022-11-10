import axios from "axios";

export default {
    state: {
        translations: window.global.translations || []
    },
    getters: {
        translations: state => state.translations
    },
    mutations: {
        translations: (state, translations) =>
            (state.translations = translations)
    },
    actions: {
        async translations({ commit }) {
            await axios
                .get(`/api/translations/get_all`)
                .then(res => {
                    commit("translations", res.data);
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
