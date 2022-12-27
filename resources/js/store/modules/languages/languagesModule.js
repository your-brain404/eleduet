import axios from "@/plugins/axios/axios";

export default {
    state: {
        languages: window.global.config.languages || [],
        currentLanguage: window.global.config.currentLanguage || {},
        defaultPrefix: "pl"
    },
    getters: {
        languages: state => state.languages,
        currentLanguage: state => state.currentLanguage,
        getPrefix: state => state.currentLanguage.prefix
    },
    mutations: {
        languages: (state, languages) => (state.languages = languages),
        currentLanguage: (state, currentLanguage) =>
            (state.currentLanguage = currentLanguage)
    },
    actions: {
        async languages({ commit }) {
            await axios
                .get(`/api/languages/get_all`)
                .then(res => {
                    commit("languages", res.data);
                })
                .catch(err => {
                    console.log(err);
                    commit(
                        "toast",
                        "Przepraszamy, nie udało się załadować danych..."
                    );
                });
        },
        async setCurrentLanguage({ commit }, payload) {
            await axios
                .post(`/api/set_lang/${payload.lang}`)
                .then(res => {
                    commit("currentLanguage", res.data);
                })
                .catch(err => {
                    console.log(err);
                    commit(
                        "toast",
                        "Przepraszamy, nie udało się zmienić języka"
                    );
                });
        }
    }
};
