export default function kebabToPascal(kebab) {
    if (!kebab.includes('-')) return kebab
    return kebab
        .split("-")
        .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join("");
}
