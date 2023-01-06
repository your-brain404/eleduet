import axios from "@/plugins/axios/axios";

export default {
    state: {
        contact: window.global.config.contact || {}
    },
    mutations: {
        contact: (state, contact) => (state.contact = contact)
    },
    getters: {
        contact: state => state.contact
    },
    actions: {
        contact: async ({ commit }) =>
            await axios
                .get("/api/contact/get_one/1")
                .then(res => commit("contact", res.data))
    }
};
