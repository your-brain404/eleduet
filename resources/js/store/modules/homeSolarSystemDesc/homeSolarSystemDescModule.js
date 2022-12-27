import axios from "@/plugins/axios/axios";

export default {
    state: {
        homeSolarSystemDesc:
            window.global.cms.homePage.homeSolarSystemDesc || {}
    },
    getters: {
        homeSolarSystemDesc: state => state.homeSolarSystemDesc
    },
    mutations: {
        homeSolarSystemDesc: (state, homeSolarSystemDesc) =>
            (state.homeSolarSystemDesc = homeSolarSystemDesc)
    },
    actions: {
        async homeSolarSystemDesc({ commit }) {
            await axios
                .get(`/api/home_solar_system_desc/get_one/1`)
                .then(res => {
                    commit("homeSolarSystemDesc", res.data);
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
