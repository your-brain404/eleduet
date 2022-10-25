export default function getModule(name) {
    return require(`@/store/modules/${name}/${name}Module.js`).default;
}
