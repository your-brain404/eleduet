import axios from "@/plugins/axios/axios";

export default {
    state: {
        users: []
    },
    mutations: {
        users: (state, users) => (state.users = users)
    },
    actions: {
        async fetchSomeUsers({ commit }) {
            await axios
                .get(
                    "/api/users/get_where?type=Admin&type=Klient&type=Zawodnik"
                )
                .then(res => {
                    commit("users", res.data);
                });
        },
        async fetchAllUsers({ commit }) {
            await axios.get("/api/users/get_all").then(res => {
                commit("users", res.data);
            });
        }
    }
};
