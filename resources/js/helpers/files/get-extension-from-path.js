export default function getExtensionFromPath(path) {
    return path
        .split(".")
        .slice(-1)
        .join("");
}
