import photoTypes from "@/helpers/files/photo-types.js";

export default function isPhoto(mime) {
    return photoTypes.includes(mime);
}
