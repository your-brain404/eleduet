import Vue from "vue";
import router from "@/router/routes";
import store from "./store/store.js";

import isExternal from "@/helpers/links/is-external";

Vue.component("app", require("./components/App.vue").default);

Vue.prototype.$isLinkExternal = isExternal;

const ignoreWarnMessage =
    "The .native modifier for v-on is only valid on components but it was used on <div>.";
Vue.config.warnHandler = function(msg, vm, trace) {
    if (msg === ignoreWarnMessage) {
        msg = null;
        vm = null;
        trace = null;
    }
};

export const app = new Vue({
    el: "#app",
    router,
    store
});
