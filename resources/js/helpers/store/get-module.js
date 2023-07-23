export default async function getModule(name) {
    const module = await import(/* @vite-ignore */ `./../../store/modules/${name}/${name}Module.js`)
    return module.default;
}
