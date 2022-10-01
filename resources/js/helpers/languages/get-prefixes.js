export default function getPrefixes() {
    return window.global.config.languages.map(lang => lang.prefix);
}
