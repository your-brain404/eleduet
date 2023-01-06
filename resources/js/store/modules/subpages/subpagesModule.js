import axios from "@/plugins/axios/axios";
import router from "@/router/routes.js";

export default {
    state: {
        subpages: window.global.config.subpages || [],
        currentSubpage: window.global.config.currentSubpage
    },
    mutations: {
        subpages: (state, subpages) => (state.subpages = subpages),
        currentSubpage: (state, currentSubpage) =>
            (state.currentSubpage = currentSubpage)
    },
    getters: {
        subpages: state =>
            state.subpages.sort((a, b) =>
                a.order > b.order ? 1 : b.order > a.order ? -1 : 0
            ),
        currentSubpage: state => state.currentSubpage
    },
    actions: {
        async fetchSubpages({ commit }) {
            await router;
            await axios
                .get("/api/subpages/get_where?active=1")
                .then(res => {
                    commit("subpages", res.data);

                    commit(
                        "currentSubpage",
                        res.data.find(
                            subpage =>
                                subpage.page == router.history.current.path
                        )
                    );
                })
                .catch(err => console.log(err));
        }
    }
};
