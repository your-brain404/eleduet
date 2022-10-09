export default function getExtensionFromPath(path) {
    if (!path) return "";
    return path
        .split(".")
        .slice(-1)
        .join("");
}
