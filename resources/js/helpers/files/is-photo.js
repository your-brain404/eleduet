import photoTypes from "@/helpers/files/photo-types";

export default function isPhoto(mime) {
    return photoTypes.includes(mime);
}
