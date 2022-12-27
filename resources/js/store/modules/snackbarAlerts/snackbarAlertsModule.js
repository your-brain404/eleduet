import axios from "@/plugins/axios/axios";

export default {
    state: {
        snackbarAlerts: window.global.config.snackbarAlerts || {}
    },
    mutations: {
        snackbarAlerts: (state, snackbarAlerts) =>
            (state.snackbarAlerts = snackbarAlerts)
    },
    getters: {
        snackbarAlerts: state => state.snackbarAlerts
    },
    actions: {
        snackbarAlerts: async ({ commit }) =>
            await axios
                .get("api/snackbar_alerts/get_one/1")
                .then(res => commit("snackbarAlerts", res.data))
    }
};
