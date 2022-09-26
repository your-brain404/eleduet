export default function formatFileSize(size) {
    if (size >= 1000000) {
        return (size / 1000000).toFixed(2) + " MB";
    }
    if (size >= 1000) {
        return (size / 1000).toFixed(2) + " kB";
    }

    return size + " B";
}
