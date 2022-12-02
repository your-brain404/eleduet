import axios from "axios";
import router from "@/router/routes";
import SnackbarAlerts from "@/data/snackbar-alerts.js";
import AdminPanelBlocks from "@/data/admin-panel-blocks.js";

export default {
    namespaced: true,
    state: {
        currentObject: {},
        valid: true,
        validateFlag: false
    },
    mutations: {
        setCurrentObject(state, payload) {
            state.currentObject = payload;
        },
        resetCurrentObject(state) {
            state.currentObject = {};
        },
        validate(state) {
            state.validateFlag = true;
            setTimeout(() => (state.validateFlag = false), 10);
        }
    },
    getters: {
        getCurrentObject: state => state.currentObject
    },
    actions: {
        async redirect(_) {
            await router;
            let redirect = "";
            Object.entries(AdminPanelBlocks).forEach(block => {
                block[1].forEach(table => {
                    if (
                        table.tablename ==
                        router.history.current.path.split("/")[2]
                    ) {
                        redirect = `/${block[0]}`;
                        if (router.history.current.params.parent_id)
                            redirect = `${redirect}/${router.history.current.params.parent_id}`;
                    }
                });
            });
            let hash = router.history.current.params.parent_id
                ? ""
                : `#${router.history.current.path.split("/")[2]}`;
            router.push(`/admin-panel${redirect}${hash}`);
        },
        async add({ commit, dispatch }, formData) {
            if (Object.keys(formData).some(key => Number.isInteger(key))) {
                console.error(`Obiekt formData ma numeryczne klucze!!!`);
                this.$store.commit("toast", SnackbarAlerts.error);
                return;
            }
            await router;
            axios
                .post(`/api/${router.history.current.path.split("/")[2]}/add`, {
                    ...formData.formData
                })
                .then(() => {
                    commit("toast", SnackbarAlerts.success, {
                        root: true
                    });
                    commit("resetCurrentObject");
                    dispatch("redirect");
                })
                .catch(err => {
                    commit("toast", SnackbarAlerts.error, { root: true });
                    console.error(err);
                });
        },
        async edit(
            { commit, dispatch },
            { formData, options = { redirect: true } }
        ) {
            if (Object.keys(formData).some(key => Number.isInteger(key))) {
                console.error(`Obiekt formData ma numeryczne klucze!!!`);
                this.$store.commit("toast", SnackbarAlerts.error);
                return;
            }
            await router;
            axios
                .put(
                    `/api/${router.history.current.path.split("/")[2]}/edit`,
                    formData
                )
                .then(() => {
                    commit("toast", SnackbarAlerts.success, {
                        root: true
                    });
                    if (options.redirect) dispatch("redirect");
                })
                .catch(err => {
                    commit("toast", SnackbarAlerts.error, { root: true });
                    console.error(err);
                });
        },
        async updateDeletedFile({ dispatch, getters }) {
            await router;
            if (router.history.current.params.id)
                dispatch("edit", {
                    formData: getters.getCurrentObject,
                    options: { redirect: false }
                });
        }
    }
};
