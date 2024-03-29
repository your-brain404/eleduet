import axios from "@/plugins/axios/axios";

export default {
    namespaced: true,
    state: {
        solarSystemCallUs: {}
    },
    getters: {
        solarSystemCallUs: state => state.solarSystemCallUs
    },
    mutations: {
        solarSystemCallUs: (state, solarSystemCallUs) =>
            (state.solarSystemCallUs = solarSystemCallUs)
    },
    actions: {
        async solarSystemCallUs({ commit }) {
            await axios
                .get(`/api/solar_system_call_us/get_one/1`)
                .then(res => {
                    commit("solarSystemCallUs", res.data);
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
