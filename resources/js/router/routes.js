import { createRouter as _createRouter, createWebHistory } from 'vue-router'
import storeBuilderRoutes from "@/router/cmsRoutes.js";

const Home = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/views/admin/Home"
    );

const MailsForm = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/views/admin/forms/Mails"
    );
const MailsAnswerForm = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/views/admin/forms/MailsAnswer"
    );
const GalleryForm = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/views/admin/forms/Gallery"
    );

const AdminLogin = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'admin-login' */ "@/views/admin/auth/AdminLogin"
    );

const Main = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'main-page' */ "@/views/public/Main"
    );
const Services = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'services-page' */ "@/views/public/Services"
    );
const SolarSystems = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'solar-systems-page' */ "@/views/public/SolarSystems"
    );
const Realizations = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'realizations-page' */ "@/views/public/Realizations"
    );
const Contact = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'contact-page' */ "@/views/public/Contact"
    );
const Service = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'service-page' */ "@/views/public/Service"
    );
const AboutPage = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'service-page' */ "@/views/public/AboutPage"
    );
const Elemele = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'elemele' */ "@/views/public/Elemele"
    );

import getPrefixes from "@/helpers/languages/get-prefixes";
import snakeToPascal from "@/helpers/string/snake-to-pascal";

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
    const component = () =>
        import(
            /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ `@/views/admin/forms/${pascalRoute}.vue`
        );
    // const component = {};
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
