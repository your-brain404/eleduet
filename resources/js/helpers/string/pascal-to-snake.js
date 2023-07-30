export default function pascalToSnake(pascal) {
    return pascal
        .replaceAll(/[A-Z]/g, (matched) => `_${matched.toLowerCase()}`).replace('_', '')
}
