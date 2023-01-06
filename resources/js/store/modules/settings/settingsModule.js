import axios from "@/plugins/axios/axios";

export default {
    state: {
        settings: window.global.config.settings || {}
    },
    mutations: {
        settings: (state, settings) => (state.settings = settings)
    },
    getters: {
        settings: state => state.settings
    },
    actions: {
        settings: async ({ commit }) =>
            await axios
                .get("/api/settings/get_one/1")
                .then(res => {
                    commit("settings", res.data);
                })
                .catch(err => console.log(err))
    }
};
