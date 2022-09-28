export default function isExternal(link) {
    if (!link) link = "";
    return link.includes("http");
}
