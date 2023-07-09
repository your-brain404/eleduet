import { createApp } from "vue";
import { createRouter } from "@/router/routes";
import { createStore } from "./store/store.js";
import App from './components/App.vue'

import isExternal from "@/helpers/links/is-external";

const store = createStore()
const router = createRouter()



const app = createApp({
    router,
    store,
    ...App
}).mount("#app")

app.provide('$isLinkExternal', isExternal)

const ignoreWarnMessage =
    "The .native modifier for v-on is only valid on components but it was used on <div>.";
app.config.warnHandler = function (msg, vm, trace) {
    if (msg === ignoreWarnMessage) {
        msg = null;
        vm = null;
        trace = null;
    }
};

app.use(store)

export { app }
