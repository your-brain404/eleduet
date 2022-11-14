const Subpages = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/components/emit-data-blocks/Subpages"
    );
// const Languages = () =>
//     import(
//         /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/components/emit-data-blocks/Languages"
//     );
const Mails = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/components/emit-data-blocks/Mails"
    );
const Settings = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/components/emit-data-blocks/Settings"
    );
const Contact = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/components/emit-data-blocks/Contact"
    );
const SnackbarAlerts = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/components/emit-data-blocks/SnackbarAlerts"
    );
const ServiceCategories = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/components/emit-data-blocks/ServiceCategories"
    );
const ServicesAttributes = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/components/emit-data-blocks/ServicesAttributes"
    );
const ContactLinks = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/components/emit-data-blocks/ContactLinks"
    );
const Services = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/components/emit-data-blocks/Services"
    );
// const Translations = () =>
//     import(
//         /* webpackPrefetch: true */ /* webpackChunkName: 'cms' */ "@/components/emit-data-blocks/Translations"
//     );
const Slider = () =>
    import(/* webpackChunkName: 'slider' */ "@/components/pages/main/Slider");
const About = () =>
    import(/* webpackChunkName: 'about' */ "@/components/pages/main/About");
const HomeServices = () =>
    import(
        /* webpackChunkName: 'services' */ "@/components/pages/main/Services"
    );
const HomeSolarSystem = () =>
    import(
        /* webpackChunkName: 'solar-system' */ "@/components/pages/main/SolarSystem"
    );
const HomeCallUs = () =>
    import(/* webpackChunkName: 'call-us' */ "@/components/pages/main/CallUs");
const Attributes = () =>
    import(
        /* webpackChunkName: 'attributes' */ "@/components/pages/main/Attributes"
    );
const Opinions = () =>
    import(
        /* webpackChunkName: 'opinions' */ /* webpackMode: "lazy" */ "@/components/pages/main/Opinions"
    );
const ExecutionProcess = () =>
    import(
        /* webpackChunkName: 'execution-process' */ "@/components/pages/main/ExecutionProcess"
    );
const ServicesCallUs = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'services-call-us' */ "@/components/pages/services/CallUs"
    );

const Realizations = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'realizations-page' */ "@/views/public/Realizations"
    );
const AboutPage = () =>
    import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'about-page' */ "@/views/public/AboutPage"
    );

export default {
    main: [
        {
            title: "Slider",
            component: Slider,
            tablename: "slider",
            table: [],
            multiple: true,
            removable: true,
            gallery: false,
            active: true,
            home_page: false
        },
        {
            title: "Sekcja pod sliderem",
            component: About,
            tablename: "about",
            table: [],
            multiple: false,
            removable: false,
            gallery: false,
            active: false,
            home_page: false
        },
        {
            title: "Opisy sekcji usług",
            component: HomeServices,
            tablename: "home_services_desc",
            table: [{ id: 1, title: "Opisy" }],
            multiple: false,
            removable: false,
            gallery: false,
            active: false,
            home_page: false
        },
        {
            title: "Opisy sekcji fotowoltaiki",
            component: HomeSolarSystem,
            tablename: "home_solar_system_desc",
            table: [{ id: 1, title: "Opisy" }],
            multiple: false,
            removable: false,
            gallery: false,
            active: false,
            home_page: false
        },
        {
            title: "Proces wykonania usługi",
            component: ExecutionProcess,
            tablename: "execution_process",
            table: [],
            multiple: false,
            removable: false,
            gallery: false,
            active: false
        },
        {
            title: "Proces wykonania usługi opisy",
            component: null,
            tablename: "execution_process_desc",
            table: [{ id: 1, title: "Opisy" }],
            multiple: false,
            removable: false,
            gallery: false,
            active: false
        },
        {
            title: "Nasze wartości",
            component: Attributes,
            tablename: "attributes",
            table: [],
            multiple: true,
            removable: true,
            gallery: false,
            active: false
        },
        {
            title: "Nasze wartości opisy",
            component: null,
            tablename: "attributes_desc",
            table: [{ id: 1, title: "Opisy" }],
            multiple: false,
            removable: false,
            gallery: false,
            active: false
        },
        {
            title: "Masz pytania? Zadzwoń!",
            component: HomeCallUs,
            tablename: "home_call_us",
            table: [{ id: 1, title: "Opisy" }],
            multiple: false,
            removable: false,
            gallery: false,
            active: false
        },
        {
            title: "Opinie",
            component: Opinions,
            tablename: "opinions",
            table: [],
            multiple: true,
            removable: true,
            gallery: false,
            active: false
        },
        {
            title: "Opinie Opisy",
            component: null,
            tablename: "opinions_desc",
            table: [{ id: 1, title: "Opisy" }],
            multiple: false,
            removable: false,
            gallery: false,
            active: false
        }
    ],
    realizations: [
        {
            title: "Realizacje",
            component: Realizations,
            tablename: "realizations",
            table: [{ id: 1, title: "Galeria" }],
            multiple: false,
            removable: false,
            gallery: true,
            active: false,
            home_page: false,
            non_editable: true
        }
    ],
    about_page: [
        {
            title: "O nas",
            component: AboutPage,
            tablename: "about_page",
            table: [],
            multiple: false,
            removable: false,
            gallery: true,
            active: false,
            home_page: false,
            non_editable: false
        }
    ],
    services: [
        {
            title: "Kategorie usług",
            component: ServiceCategories,
            tablename: "service_categories",
            table: [],
            multiple: true,
            removable: true,
            gallery: false,
            home_page: false
        },
        {
            title: "Usługi",
            component: Services,
            tablename: "services",
            table: [],
            multiple: true,
            removable: true,
            gallery: true,
            home_page: true
        },
        {
            title: "Usługi opisy",
            component: null,
            tablename: "services_page_desc",
            table: [{ id: 1, title: "Opisy" }],
            multiple: false,
            removable: false,
            gallery: false,
            home_page: false
        },
        {
            title: "Usługi atrybuty",
            component: ServicesAttributes,
            tablename: "services_attributes",
            table: [],
            multiple: true,
            removable: true,
            gallery: false,
            home_page: false
        },
        {
            title: "Zadzwoń zapytaj",
            component: ServicesCallUs,
            tablename: "services_call_us",
            table: [{ id: 1, title: "Opisy" }],
            multiple: false,
            removable: false,
            gallery: false,
            home_page: false
        }
    ],

    contact: [
        {
            title: "Kontakt linki",
            component: ContactLinks,
            tablename: "contact_links",
            table: [],
            multiple: true,
            removable: true,
            gallery: false,
            active: false,
            home_page: false,
            order: false
        }
    ],
    subpages: [
        {
            title: "Podstrony",
            component: Subpages,
            tablename: "subpages",
            table: [],
            multiple: false,
            removable: false,
            gallery: false,
            active: true,
            home_page: false,
            order: false
        }
    ],

    descriptions: [
        {
            title: "Komunikaty (pomarańczowy pasek w prawym dolnym rogu)",
            component: SnackbarAlerts,
            tablename: "snackbar_alerts",
            table: []
        }
    ],

    mails: [
        {
            title: "Skrzynka pocztowa",
            component: Mails,
            tablename: "mails",
            table: [],
            multiple: false,
            removable: true,
            gallery: false,
            active: false,
            home_page: false,
            answer: true,
            add_button_icon: "email-plus",
            add_button_text: "Napisz wiadomość",
            edit_button_icon: "mdi-eye",
            edit_button_text: "Pokaż"
        }
    ],

    settings: [
        {
            title: "Ustawienia",
            component: Settings,
            tablename: "settings",
            table: [],
            multiple: false,
            removable: false
        },
        {
            title: "Dane Kontaktowe",
            component: Contact,
            tablename: "contact",
            table: [],
            multiple: false,
            removable: false
        }
    ]
};
