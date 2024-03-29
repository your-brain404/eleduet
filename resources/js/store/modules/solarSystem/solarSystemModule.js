import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        solarSystem: {}
    },
    getters: {
        solarSystem: state => state.solarSystem
    },
    mutations: {
        solarSystem: (state, solarSystem) => (state.solarSystem = solarSystem)
    },
    actions: {
        async solarSystem({ commit }) {
            await axios
                .get(`/api/solar_system/get_one/1`)
                .then(res => {
                    commit("solarSystem", res.data);
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
