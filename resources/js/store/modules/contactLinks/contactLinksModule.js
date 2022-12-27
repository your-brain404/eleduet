import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        contactLinks: window.global.cms.contactPage.contactLinks || []
    },
    getters: {
        contactLinks: state => state.contactLinks
    },
    mutations: {
        contactLinks: (state, contactLinks) =>
            (state.contactLinks = contactLinks)
    },
    actions: {
        async contactLinks({ commit }) {
            await axios
                .get(`/api/contact_links/get_all`)
                .then(res => {
                    commit("contactLinks", res.data);
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
