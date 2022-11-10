import Vue from "vue";

import Vuex from "vuex";

import Toast from "./modules/toast/toastModule";

import Auth from "./modules/auth";

import Users from "./modules/users";

import Subpages from "./modules/subpages";

import Settings from "./modules/settings";

import Contact from "./modules/contact";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Toast,
        Auth,
        Users,
        Subpages,
        Settings,
        Contact
    }
});
