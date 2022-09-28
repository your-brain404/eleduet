export default function prepareCustomLink(link) {
    if (link.includes(window.location.origin))
        return link.replace(window.location.origin, "");
}
