import axios from "@/plugins/axios/axios";

export default {
    state: {
        validationRules: {}
    },
    mutations: {
        validationRules: (state, validationRules) =>
            (state.validationRules = validationRules)
    },
    getters: {
        validationRules: state => state.validationRules
    },
    actions: {
        validationRules: async ({ commit }) =>
            await axios
                .get("api/validation_rules/get_one/1")
                .then(res => commit("validationRules", res.data))
    }
};
