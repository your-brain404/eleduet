import { createRouter as _createRouter, createWebHistory } from "vue-router";
import storeBuilderRoutes from "@/router/cmsRoutes.js";

import Home from "@/views/admin/Home.vue"

import MailsForm from "@/views/admin/forms/Mails.vue"
import MailsAnswerForm from "@/views/admin/forms/MailsAnswer.vue"
import GalleryForm from "@/views/admin/forms/Gallery.vue"

import AdminLogin from "@/views/admin/auth/AdminLogin.vue"

import Main from "@/views/public/Main.vue"
import Services from "@/views/public/Services.vue"
import SolarSystems from "@/views/public/SolarSystems.vue"
import Realizations from "@/views/public/Realizations.vue"
import Contact from "@/views/public/Contact.vue"
import Service from "@/views/public/Service.vue"
import AboutPage from "@/views/public/AboutPage.vue"
import Elemele from "@/views/public/Elemele.vue"

import getPrefixes from "@/helpers/languages/get-prefixes.js";
import snakeToPascal from "@/helpers/string/snake-to-pascal.js";
import { defineAsyncComponent } from "vue";

const newStoreBuilderRoutes = storeBuilderRoutes.map(route => ({
    path: route["component-path"],
    component: route["component-name"],
    name: route["route-name"]
}));

const tableCmsRoutes = [
    "main",
    "services",
    "contact",
    "solar_system",
    "realizations",
    "subpages",
    "mails",
    "gallery_page",
    "settings",
    "descriptions",
    "about_page"
].map(route => ({
    path: `/admin-panel/${route}`,
    component: Home,
    name: `Admin${snakeToPascal(route)}`
}));

const formsCmsRoutes = [
    "settings",
    "slider",
    "services",
    "service_categories",
    "about",
    "contact",
    "validation_rules",
    "snackbar_alerts",
    "layout_elements",
    "subpages",
    "about_page"
].reduce((total, route) => {

    const pascalRoute = snakeToPascal(route);
    const component =
        defineAsyncComponent(() => import(
            /* @vite-ignore */
            `../views/admin/forms/${pascalRoute}.vue`
        ));
    total.push({
        path: `/admin-panel/${route}/form`,
        component,
        name: `${pascalRoute}Form`
    });
    total.push({
        path: `/admin-panel/${route}/form/:id`,
        component,
        name: `${pascalRoute}FormEdit`
    });


    return total;
}, []);

const cmsRoutes = [
    ...newStoreBuilderRoutes,
    ...tableCmsRoutes,
    ...formsCmsRoutes
].map(route => ({
    ...route,
    meta: {
        adminRoute: true
    }
}));

const prefixes = getPrefixes();
let frontRoutes = [
    { path: "/", component: Main, name: "Main" },
    { path: "/uslugi", component: Services, name: "Services" },
    { path: "/elemele", component: Elemele, name: "Elemele" },
    { path: "/uslugi/:title/:id", component: Service, name: "Service" },
    {
        path: "/realizacje",
        component: Realizations,
        name: "Realizations"
    },
    {
        path: "/fotowoltaika",
        component: SolarSystems,
        name: "SolarSystems"
    },
    {
        path: "/o-nas",
        component: AboutPage,
        name: "AboutPage"
    },
    { path: "/kontakt", component: Contact, name: "Contact" }
].reduce((total, route) => {
    total.push(route);
    for (let i = 0; i < prefixes.length; i++) {
        total.push({
            ...route,
            path: `/${prefixes[i]}${route.path}`,
            name: `${route.name}-${prefixes[i]}`
        });
    }
    return total;
}, []);

const routes = [
    ...cmsRoutes,
    ...frontRoutes,

    {
        path: "/admin-panel/login",
        component: AdminLogin,
        name: "AdminLogin",
        alias: "/admin-panel",
        meta: {
            adminRoute: true
        }
    },

    {
        path: "/admin-panel/mails/form",
        component: MailsForm,
        name: "MailsForm",
        meta: {
            adminRoute: true
        }
    },
    {
        path: "/admin-panel/mails/form/:id",
        component: MailsAnswerForm,
        name: "MailsFormEdit",
        meta: {
            adminRoute: true
        }
    },

    {
        path: "/admin-panel/:table/gallery/:id",
        component: GalleryForm,
        name: "GalleryForm",
        meta: {
            adminRoute: true
        }
    },
    { path: "/:pathMatch(.*)*", redirect: "/" }
];

export function createRouter() {
    return _createRouter({
        routes,
        history: createWebHistory(),
        scrollBehavior: function (to) {
            if (to.hash) {
                return {
                    selector: to.hash
                };
            } else return { x: 0, y: 0 };
        }
    });
} 
