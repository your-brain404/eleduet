import store from "@/store/store.js";

export default function rt(route) {
    const currentPrefix = store.getters.getPrefix;
    const defaultLang = currentPrefix == store.state.Languages.defaultPrefix;
    if (route.includes("/") || route === "") {
        let path = route;
        return defaultLang ? path : `/${currentPrefix}${path}`;
    } else {
        return route + (defaultLang ? "" : `-${currentPrefix}`);
    }
}
