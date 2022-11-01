import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";
import pl from "vuetify/src/locale/pl.ts";

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: "mdi"
    },
    theme: {
        themes: {
            light: {}
        }
    },
    options: {
        customProperties: true
    },
    lang: {
        locales: { pl },
        current: "pl"
    }
};

export default new Vuetify(opts);
