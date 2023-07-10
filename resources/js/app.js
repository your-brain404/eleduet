import { createApp } from "vue";
import { createRouter } from "@/router/routes";
import { createStore } from "./store/store.js";
import App from './components/App.vue'

import isExternal from "@/helpers/links/is-external";

const router = createRouter()
const store = createStore(router)



const app = createApp(App)

app.use(store)
app.use(router)

const ignoreWarnMessage =
    "The .native modifier for v-on is only valid on components but it was used on <div>.";
app.config.warnHandler = function (msg, vm, trace) {
    if (msg === ignoreWarnMessage) {
        msg = null;
        vm = null;
        trace = null;
    }
};

app.config.globalProperties.$isLinkExternal = isExternal

app.mount("#app")

export { app }
