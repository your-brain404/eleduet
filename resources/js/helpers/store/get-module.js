export default async function getModule(name) {
    return await import(/* @vite-ignore */ `@/store/modules/${name}/${name}Module.js`).default;
}
