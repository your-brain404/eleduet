export default function isPhoto(mime) {
    return [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/svg",
        "image/jfif",
        "image/webp",
        "image/svg+xml"
    ].includes(mime);
}
