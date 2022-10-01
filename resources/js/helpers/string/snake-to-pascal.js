export default function snakeToPascal(snake) {
    return snake
        .split("_")
        .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join("");
}
